import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseIcon from "@/components/baseicon";
//global componants: can be added anywhere in the application without importing
//see in event list
Vue.component("BaseIcon", BaseIcon);

// import upperFirst from "lodash/upperFirst";
// import camelCase from "lodash/camelCase";

// const requireComponent = require.context(
//   "./components",
//   false,
//   /Base[A-Z]\w+\.(vue|js)$/
// );

// requireComponent.keys().forEach((fileName) => {
//   const componentConfig = requireComponent(fileName);

//   const componentName = upperFirst(
//     camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
//   );

//   Vue.component(componentName, componentConfig.default || componentConfig);
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
