import { customerModule } from "./store/customers/store"
import { authModule } from "./store/auth/store"

export default {
    modules: {
        customerModule,
        authModule
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
        },
    },
    mutations: {
        //
    },
    actions: {
        //
    }
};
