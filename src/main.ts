import { ViteSSG } from 'vite-ssg/single-page';
import { createBootstrap } from 'bootstrap-vue-next';
import App from './App.vue';

import './assets/data_labs_theme.scss';
import { configure } from 'vue-gtag';

export const createApp = ViteSSG(App, ({ app }) => {
  configure({ tagId: 'G-CQCJ1860S7' });
  app.use(createBootstrap());
});
