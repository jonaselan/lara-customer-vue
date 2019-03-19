import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import CustomerMain from './components/customers/Main.vue';
import CustomerIndex from './components/customers/Index.vue';
import CustomerCreate from './components/customers/Create.vue';
import CustomerShow from './components/customers/Show.vue';

export const routes = [
    {
        path: '/',
        component: Home,
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        component: Login
    },
    {
    path: '/customers',
    component: CustomerMain,
    meta: {
        requiresAuth: true
    },
    // Dentro do componente principal de customer irá ser
    // redenrizado as seguintes rotas detrno de "route-view"
    children: [
        {
            path: '/',
            component: CustomerIndex
        },
        {
            path: 'create',
            component: CustomerCreate
        },
        {
            path: ':id',
            component: CustomerShow
        }
    ]
  },
];
