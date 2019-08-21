import App from "@/App.component";
import { i18n } from "@/plugins/i18n";
import { store } from "@/plugins/store";
import "@/plugins/vee-validate";
import "@/plugins/vue-high-light";
import "@/plugins/vuetify";
import Vue from "vue";
import DependencyInjector from "./plugins/dependency-injector/install";
import router from "./router";
import "./styles.css";
Vue.use(DependencyInjector);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
