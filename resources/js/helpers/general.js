export function initialize(store, router) {
    // to: rota que o usuário está pedindo
    // from: rota que vinhemos
    // next: callback que usamos para pararmos
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const currentUser = store.state.currentUser;

        if(requiresAuth && !currentUser) {
            next('/login');
        } else if(to.path == '/login' && currentUser) {
            next('/');
        } else {
            next();
        }
    });
}
