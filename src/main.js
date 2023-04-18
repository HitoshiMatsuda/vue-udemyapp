import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
// import LikeBody from './components/BodyWidget.vue'

const app = createApp(App)
app
.use(router)
.mount('#app')

// createApp(App)
// .mount('#app')

// createApp(App)
// .component('LikeBody', LikeBody)
// .mixin({
//     // mixinをグローバルで定義するとすべてのvueに自動で適用されてしまう
// })
// .mount('#app')  