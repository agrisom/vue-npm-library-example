import type { App } from 'vue';
import { HelloWorld, UITable } from './components';

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld);
    app.component('UITable', UITable);
  }
};

export { HelloWorld, UITable };