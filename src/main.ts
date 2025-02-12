import { ViteSSG } from 'vite-ssg/single-page'
import { createBootstrap } from 'bootstrap-vue-next'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(createBootstrap())
})
