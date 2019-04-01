import { authModule } from "./store/auth/store"
import { customerModule } from "./store/customers/store"
import { chatModule } from "./store/chat/store"

export default {
    // é uma verificação pesada. Não é recomendado fazer em prod
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        customerModule,
        authModule,
        chatModule,
    },
    state: {
        loading: false,
        welcome: "olá"
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        welcome(state) {
            return state.welcome;
        }
    },
    mutations: {
        toggleLoad(state) {
            console.log(state.loading);
            state.loading = !state.loading;
        }
    },
    actions: {
        changeStatusLoad({ commit }){
            console.log('123')
            commit('toggleLoad');
        }
    }
};
