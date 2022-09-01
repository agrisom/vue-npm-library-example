# vue-npm-library-example
Vue3 typescript component library compiled by vite and ready to deploy on npm

## How it works

- [x] Build tool [Vite](https://vitejs.dev/)
- [x] Build TS tool [rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2)
- [x] Framework [Vue 3](https://vuejs.org/)
- [x] Type system [TypeScript](https://www.typescriptlang.org/) / [Vue tsc](https://github.com/johnsoncodehk/volar/tree/master/packages/vue-tsc)
- [x] Vue SFC Setup [script setup](https://vuejs.org/api/sfc-script-setup.html)
- [x] Publish repository [npm](https://www.npmjs.com/package/vue-npm-library-example)

## Installation

**Using npm**
```
npm install vue-npm-library-example
```

## Usage
- Declare components globaly **main.ts**

```
import VueLibraryLoader from 'vue-npm-library-example';

const app = createApp(App);
app.use(VueLibraryLoader);
```
- Declare components localy **\*.vue**

```
<script setup lang="ts">
import { HelloWorld } from 'vue-npm-library-example';
</script>

<template>
<HelloWorld msg="Message test" color="green" />
</template>
```
