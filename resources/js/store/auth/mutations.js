export default {
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
}
