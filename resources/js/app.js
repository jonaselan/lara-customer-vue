require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { routes } from './routes';
import AppMain from './components/AppMain.vue';
import storeData from './store';
import { initialize } from './helpers/general';

// dizer ao vue o que ele vai usar
Vue.use(VueRouter);
Vue.use(Vuex);

// definir store da aplicação
const store = new Vuex.Store(storeData);

const router = new VueRouter({
  routes,
  mode: 'history'
});

initialize(store, router);

new Vue({
    el: '#app',
    router,
    store,
    components: {
      AppMain
    }
});
