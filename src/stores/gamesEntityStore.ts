import {Readable, Writable, writable} from 'svelte/store';
import type GameEntity from "@/util/GameEntity";


interface GamesEntityStore extends Readable<GameEntity[]> {
    push: (item: GameEntity) => void;
}

function gameIsEqual(game1: GameEntity, game2: GameEntity): boolean {
    return game1.name.toLowerCase() === game2.name.toLowerCase();
}

function addGame(list: GameEntity[], newGame: GameEntity): GameEntity[] {
    const alreadyExist = list.some((game) => gameIsEqual(game, newGame));
    if (alreadyExist) {
        return list;
    }
    list.push(newGame);
    return list;
}

function createStore(): GamesEntityStore {
    const gameList: Writable<GameEntity[]> = writable([]);
    const {subscribe, update} = gameList;

    return {
        subscribe,
        push(item: GameEntity): void {
            update((items) => addGame(items, item));
        }
    };
}

export const gamesStore = createStore();
