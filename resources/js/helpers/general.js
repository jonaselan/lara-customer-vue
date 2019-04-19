export function initialize(store, router) {
    // to: rota que o usuário está pedindo
    // from: rota que vinhemos
    // next: callback que usamos para pararmos
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const currentUser = store.getters.currentUser;

        if(requiresAuth && !currentUser) {
            next('/login');
        } else if(to.path === '/login' && currentUser) {
            next('/');
        } else {
            next();
        }
    });

    axios.interceptors.response.use(null, (error) => {
      // intercepta todos os request para verificar se há alguma requisição não autorizada
      if (error.response.status === 401) {
          store.commit('logout');
          router.push('/login');
      }

      // retornar o erro de qualquer forma, caso seja necessário
      // sna resposta de onde está sendo feito a requisição
      return Promise.reject(error);
    });

    // se houver um usuário na "sessão", adicionar o token nas suas requisições
    if (store.getters.currentUser) {
        setAuthorization(store.getters.currentUser.token);
    }
}

export function setAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}
