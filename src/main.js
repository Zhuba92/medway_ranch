/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

//CSS
import './main.scss';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import router from './router';

const app = createApp(App).use(router)

registerPlugins(app)

app.mount('#app')
