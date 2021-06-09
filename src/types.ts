export interface Game {
    name: string;
    cover?: string;
    id: number;
}

export interface IGDBGameResponse {
    id: number;
    cover: Cover;
    name: string;
}

interface Cover {
    id: number;
    url: string;
}
