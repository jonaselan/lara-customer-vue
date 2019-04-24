import AppHome from './components/AppHome.vue';
import Login from './components/auth/Login.vue';

import CustomerMain from './components/customers/MainCustomer.vue';
import CustomerIndex from './components/customers/Index.vue';
import CustomerCreate from './components/customers/Create.vue';
import CustomerShow from './components/customers/Show.vue';
import ChatMain from './components/chat/ChatMain.vue';

export const routes = [
    {
        path: '/',
        component: AppHome,
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        component: Login
    },
    {
    path: '/customers',
    component: CustomerMain,
    meta: { requiresAuth: true },
    // Dentro do componente principal de customer irá ser
    // redenrizado as seguintes rotas dentro de "route-view"
    children: [
        {
            path: '/',
            component: CustomerIndex
        },
        {
            path: 'chat',
            component: ChatMain
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
