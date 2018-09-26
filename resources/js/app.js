require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { routes } from './routes';
import MainApp from './components/MainApp.vue';

// dizer ao vue o que ele vai usar
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes,
  mode: 'history'
});

const app = new Vue({
    el: '#app',
    router,
    components: {
      MainApp
    }
});
