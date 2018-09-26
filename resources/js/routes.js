import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Login from './components/auth/Login.vue';

export const routes = [
  {
    path: '/login',
    component: Home,
    meta: { requiredAuth: true },
  },
  {
    path: '/login',
    component: Login
  }
];
