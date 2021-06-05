import {Readable, Writable, writable} from 'svelte/store';



interface GamesStore extends Readable<Set<string>> {
    push: (item: string) => void;
}


function createStore(): GamesStore {
    const gameList: Writable<Set<string>> = writable(new Set<string>());
    const { subscribe, update } = gameList;

    return {
        subscribe,
        push(item: string): void {
            update(n => new Set([...n, item]));
        }
    };
}

export const gamesStore = createStore();
