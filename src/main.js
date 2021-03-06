import Vue from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VuePlaceAutocomplete from "vue-place-autocomplete";

Vue.use(VuePlaceAutocomplete);
import vuetify from "./plugins/vuetify";

import "@adyen/adyen-web/dist/adyen.css";

import "./index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
