export default {
    fillSelectedUser(state, user) {
        state.selectedUser = user;
    },
    fillUserState(state, users) {
        state.users = users;
    },
    fillConversationMessages(state, messages) {
        state.messages = messages;
    },
}
