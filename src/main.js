import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);

Vue.config.productionTip = false
require("./assets/main.scss")

app.AOS = new AOS.init({ disable: "phone" });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
