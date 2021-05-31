import App from './App.svelte';
import {Autentication} from "@/util/Autentication";

const autentication = new Autentication();
autentication.init();

const app = new App({
  target: document.getElementById('app'),
});

export default app;
