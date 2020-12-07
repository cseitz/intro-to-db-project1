import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

window.templateString = function(str, obj) {
  return new Function("return `" + str + "`;").call(obj)
}

createApp(App).use(store).use(router).mount('#app')
