import {Readable, Writable, writable} from 'svelte/store';

// const games: string[] = [];
// export const gameList = writable(games);

interface GamesStore<T> extends Readable<T> {
    push: (item: string) => void;
}


function createStore(): GamesStore<string[]> {
    const gameList: Writable<string[]> = writable([]);
    const { subscribe, update } = gameList;

    return {
        subscribe,
        push(item: string): void {
            update(n => [...n, item]);
        }
    };
}

export const gamesStore = createStore();
