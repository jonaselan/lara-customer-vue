import { getLocalUser } from "./helpers/auth";
const user = getLocalUser();

export default {
  state: {
    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    authError: null,
    customers: [],
    welcome: "olá"
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    currentUser(state) {
      return state.currentUser;
    },
    authError(state) {
      return state.authError;
    },
    customers(state) {
      return state.customers;
    },
    welcome(state){
      return state.welcome;
    }
  },
  mutations: {
    login(state) {
      state.loading = true;
      state.authError = null;
    },
    loginSuccess(state, payload) {
      state.authError = null;
      state.isLoggedIn = true;
      state.loading = false;
      // unir os dois valores em um
      state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});

      localStorage.setItem("user", JSON.stringify(state.currentUser));
    },
    loginFailed(state, payload) {
      state.loading = false;
      state.authError = payload;
    },
    logout(state) {
      localStorage.removeItem("user");
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
  actions: {
    login(context) {
      context.commit("login");
    },
  }
};
