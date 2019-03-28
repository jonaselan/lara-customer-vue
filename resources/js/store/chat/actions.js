import api from '../../api/chat';

export default {
    loadMessages({commit}, user){
        api.getConversationMessages(user.id).then(data => {
            commit('fillConversationMessages', data.messages);
        })
    },
    getUsers({ commit }) {
        api.allUsers().then(data => {
            commit('fillUserState', data.users)
        })
    },
    setSelectedUser({ commit }, user) {
        commit('fillSelectedUser', user);
    },
    sendMessage({ commit }, message) {
        api.createNewMessage(message).then(data => {
            commit('fillNewMessageState', data.message)
        })
    },
    newMessage({ commit }, message) {
        commit('fillNewMessageState', message)
    },
}
