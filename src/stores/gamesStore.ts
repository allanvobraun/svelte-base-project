import { writable } from 'svelte/store';

const games: string[] = [];
export const gameList = writable(games);
