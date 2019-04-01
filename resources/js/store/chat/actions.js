import api from '../../api/chat';

export default {
    loadMessages({commit}, user){
        return new Promise((resolve, reject) => {
            // para simular quiser testar o loading
            setTimeout(() => {
                api.getConversationMessages(user.id).then(data => {
                    commit('fillConversationMessages', data.messages);
                });
                resolve()
            }, 1000)
        })
    },
    getUsers({ commit }) {
        api.allUsers().then(data => {
            commit('fillUserState', data.users)
        })
    },
    setSelectedUser({ commit }, user) {
        commit('fillConversationMessages', []);
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
