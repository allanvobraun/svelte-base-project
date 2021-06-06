import {Readable, Writable, writable} from 'svelte/store';
import type {Game} from "@/types";


interface GamesStore extends Readable<Game[]> {
    push: (item: Game) => void;
}

function gameIsEqual(game1: Game, game2: Game): boolean {
    return game1.name.toLowerCase() === game2.name.toLowerCase();
}

function addGame(list: Game[], newGame: Game): Game[] {
    const alreadyExist = list.some((game) => gameIsEqual(game, newGame));
    if (alreadyExist) {
        return list;
    }
    list.push(newGame);
    return list;
}


function createStore(): GamesStore {
    const gameList: Writable<Game[]> = writable([]);
    const {subscribe, update} = gameList;

    return {
        subscribe,
        push(item: Game): void {
            update((items) => addGame(items, item));
        }
    };
}

export const gamesStore = createStore();
