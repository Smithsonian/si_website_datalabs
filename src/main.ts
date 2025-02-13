import { ViteSSG } from 'vite-ssg/single-page'
import { createBootstrap } from 'bootstrap-vue-next'
import App from './App.vue'

import './assets/data_labs_theme.scss'

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(createBootstrap())
})
