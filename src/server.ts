import express from 'express';
import axios from "axios";
import dotenv from 'dotenv';
import {IGDBAuth} from "./util/IGDBAuth";
import cors from 'cors';

const app = express();
app.use(cors({credentials: true, origin: true}));
const PORT = 8000;
dotenv.config();

const igdbAuth = new IGDBAuth();

interface IGBDResponse {
    id: number;
    name: string;
}

app.get('/api/search/:query', (req, res) => {
        const igdbRequestBody = `search "${req.params.query}";fields name;limit 10;`;

        axios.post(process.env.IGDB_API_URL + 'games', igdbRequestBody, {
            headers: igdbAuth.headers
        }).then(response => {
            const games = response.data.map((item: IGBDResponse) => item.name);
            res.send(games);
        }).catch(err => {
            console.log(igdbAuth.headers);
            console.log(err.request.headers);
            res.status(400).send({message: 'Error in IGDB api', igdbStatus: err.status});
        });
    }
);


app.listen(PORT, () => {
    igdbAuth.init().then(() => {
        console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    }).catch((err) => {
        console.log(err);
        console.log(`⚡️[server]: Failed to autenticate with IGDB`);
        process.exit(1);
    });
});
