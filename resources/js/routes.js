import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Login from './components/auth/Login.vue';

export const routes = [
  {
    path: '/',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: Login
  }
];
