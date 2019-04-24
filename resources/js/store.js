import { authModule } from "./store/auth/store"
import { customerModule } from "./store/customers/store"
import { chatModule } from "./store/chat/store"
import api from "./api/customers";

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
        welcome: "olá",
        sourceLocal: true,
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        welcome(state) {
            return state.welcome;
        },
        backendSource(state) {
            return state.sourceLocal;
        }
    },
    mutations: {
        toggleLoad(state) {
            state.loading = !state.loading;
        },
        toggleBackend(state) {
            state.sourceLocal = !state.sourceLocal;
        }
    },
    actions: {
        changeStatusLoad({ commit }){
            commit('toggleLoad');
        },
        changeSourceBackend({ commit, state }){
            (state.sourceLocal
                ? api.allCustomers()
                : api.externalAllCustomers())
                .then(data => {
                    commit('toggleBackend');
                    commit('fillCustomerState', data.customers)
                })
        }
    }
};
