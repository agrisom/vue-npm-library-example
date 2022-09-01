import type { App } from 'vue';
import { HelloWorld } from './components';

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld);
  }
};

export { HelloWorld };