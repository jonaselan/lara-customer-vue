export default {
    messages(state) {
        return state.messages;
    },
    selectedUser(state) {
        return state.selectedUser
    },
    users({ users }) {
        return users;
    },
}
