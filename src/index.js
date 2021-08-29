import Vue from 'vue';
import { rtdbPlugin } from 'vuefire';
import App from './App.vue';
import router from './router';

Vue.use(rtdbPlugin);

export default new Vue({
  router,
  el: '#root',
  render: (h) => h(App),
});
