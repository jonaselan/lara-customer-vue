require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { routes } from './routes';
import MainApp from './components/MainApp.vue';
import storeData from './store';

// dizer ao vue o que ele vai usar
Vue.use(VueRouter);
Vue.use(Vuex);

// definir store da aplicação
const store = new Vuex.Store(storeData);

const router = new VueRouter({
  routes,
  mode: 'history'
});

// to: rota que o usuário está pedindo
// from: rota que vinhemos
// next: callback que usamos para pararmos
router.beforeEach((to, from, next) => {
  const requiredAuth = to.matched.some(record => record.meta.requiredAuth);
  const currentUser = store.state.currentUser;

  if (requiredAuth && !currentUser) {
    next('/login');
  }
  else{
    next('/')
  }
});

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
      MainApp
    }
});
