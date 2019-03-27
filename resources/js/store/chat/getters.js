export default {
    message(state) {
        return state.message;
    },
    user(state) {
        return state.user
    },
    users({ users }) {
        return users;
    },
}
