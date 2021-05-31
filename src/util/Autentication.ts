import axios from "axios";

export interface IGDBAuth {
    access_token: string;
    expires_in: number;
    token_type: string;
}

export class Autentication {
    igdbAuth: IGDBAuth;

    init(): void {
        void this.autenticateIGDB().then(() => {
            setTimeout(() => this.autenticateIGDB(), this.igdbAuth.expires_in * 1000);
        });
    }

    async autenticateIGDB(): Promise<void> {
        const params = `?client_id=${import.meta.env.VITE_IGDB_ID}&client_secret=${import.meta.env.VITE_IGDB_SECRET}&grant_type=client_credentials`;
        const url = import.meta.env.VITE_IGDB_URL + params;
        console.log(url);

        return await axios.post(url)
            .then(response => {
                this.igdbAuth = response.data;
            }).catch(err => {
                console.log(err);
            });
    }
}
