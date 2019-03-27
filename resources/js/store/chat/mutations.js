export default {
    setSelectedUser(state, user) {
        state.selectedUser.push(user);
    },
    fillUserState(state, users) {
        state.users = users;
    }
}
