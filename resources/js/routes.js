import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import CustomerMain from './components/customers/Main.vue';
import CustomerIndex from './components/customers/Index.vue';

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/customers',
    component: CustomerMain,
    meta: { requiresAuth: true },
    // Dentro do componente principal de customer irá ser
    // redenrizado as seguintes rotas detrno de "route-view"
    children: [
      {
        path: '/',
        component: CustomerIndex
      },
      // {
      //   path: 'new',
      //   component: NewCustomer
      // },
      // {
      //   path: ':id',
      //   component: Customer
      // }
    ]
  },
];
