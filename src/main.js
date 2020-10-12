import { createApp } from 'vue'
import App from './App.vue'

window.sb.options.moveType = "blizzard"
window.sb.start();
createApp(App).mount('#app')
