import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cube from "cube-ui";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Cube,
  render: (h) => h(App),
}).$mount("#app");
