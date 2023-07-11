
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Tailwind 
import 'vuetify/styles'
import './assets/tailwind.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
