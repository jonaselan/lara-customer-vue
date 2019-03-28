export default {
    fillSelectedUser(state, user) {
        state.selectedUser = user;
    },
    fillUserState(state, users) {
        state.users = users;
    },
    fillNewMessageState(state, message) {
        state.messages.push(message);
    },
    fillConversationMessages(state, messages) {
        state.messages = messages;
    },
}
