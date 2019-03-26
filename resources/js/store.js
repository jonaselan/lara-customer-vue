import { authModule } from "./store/auth/store"
import { customerModule } from "./store/customers/store"
import { chatModule } from "./store/chat/store"

export default {
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
        },
    },
    mutations: {
        //
    },
    actions: {
        //
    }
};
