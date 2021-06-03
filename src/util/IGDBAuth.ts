import axios from "axios";
import dotenv from 'dotenv';
import updateDotenv from "@growflow/update-dotenv";

dotenv.config();


interface IGDBAuthResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}

interface IGDBHeaders {
    "Client-ID": string;
    Authorization: string;
}

export class IGDBAuth {
    igdbAuth: IGDBAuthResponse;
    readonly apiUrl: string;
    readonly authUrl: string;
    headers: IGDBHeaders;
    private readonly clientID: string;
    private readonly secret: string;

    constructor() {
        this.apiUrl = process.env.IGDB_API_URL;
        this.authUrl = process.env.TWITCH_URL;
        this.clientID = process.env.IGDB_ID;
        this.secret = process.env.IGDB_SECRET;
    }

    async init(): Promise<void> {
        const autorized = await this.checkAuth();

        if (!autorized) {
            await this.autenticateIGDB();
            this.buildHeader(this.igdbAuth.access_token);
            return;
        }
    }

    private buildHeader(access_token: string): void {
        this.headers = {
            'Client-ID': this.clientID,
            'Authorization': 'Bearer ' + access_token,
        };
    }

    async checkAuth(): Promise<boolean> {
        if (!process.env.IGDB_ACCESS_TOKEN) {
            return false;
        }

        this.buildHeader(process.env.IGDB_ACCESS_TOKEN);

        try {
            await axios.post(this.apiUrl + 'games', null, {
                headers: this.headers
            });
            console.log("Autenticado com sucesso");
            return true;
        } catch (e) {
            if (!axios.isAxiosError(e)) {
                throw e;
            }
            if (e.response.status !== 401) {
                console.log(`Erro com status ${e.response.status} ao tentar checkar a autenticação`);
            }
            return false;
        }
    }

    private async autenticateIGDB(): Promise<void> {
        const params = `?client_id=${this.clientID}&` +
            `client_secret=${this.secret}&grant_type=client_credentials`;

        const url = this.authUrl + params;

        const response = await axios.post(url);
        this.igdbAuth = response.data;
        const newEnv = await updateDotenv({
            IGDB_ACCESS_TOKEN: this.igdbAuth.access_token
        });
        console.log(`novo token ${newEnv.toString()}`);
    }
}
