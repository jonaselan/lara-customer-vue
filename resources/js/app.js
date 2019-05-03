require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { routes } from './routes';
import AppMain from './components/AppMain.vue';
import storeData from './store';
import { initialize } from './helpers/general';
import mixin from './helpers/helper';

// dizer ao vue o que ele vai usar
Vue.use(VueRouter);
Vue.use(Vuex);

// https://medium.com/vuejs-tips/vue-log-a7b0b5d16a0
Vue.prototype.$log = console.log.bind(console);

// definir store da aplicação
const store = new Vuex.Store(storeData);

const router = new VueRouter({
  routes,
  mode: 'history'
});

initialize(store, router);

Vue.mixin(mixin);

new Vue({
    el: '#app',
    router,
    store,
    components: {
      AppMain
    }
});
