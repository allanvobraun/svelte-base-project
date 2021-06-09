import type {Game} from "@/types";

class GameEntity implements Game {
    name: string;
    id: number;
    cover: string;
    addedAt: string;

    constructor({name, id, cover}: Game) {
        this.name = name;
        this.id = id;
        this.cover = cover;
        this.addedAt = new Date().toLocaleString();
    }
}
export default GameEntity;
