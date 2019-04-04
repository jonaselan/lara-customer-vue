import api from '../../api/chat';
import {
    LOAD_MESSAGES,
    GET_USERS,
    SET_SELECTED_USER,
    SEND_MESSAGE,
    NEW_MESSAGE,
} from '../../definitions/actions';

export default {
    [LOAD_MESSAGES] ({commit}, user){
        return new Promise((resolve, reject) => {
            // timeout para testar loading
            setTimeout(() => {
                api.getConversationMessages(user.id).then(data => {
                    commit('fillConversationMessages', data.messages);
                });
                resolve()
            }, 1000)
        })
    },
    [GET_USERS] ({ commit }) {
        api.allUsers().then(data => {
            commit('fillUserState', data.users)
        })
    },
    [SET_SELECTED_USER] ({ commit }, user) {
        commit('fillConversationMessages', []);
        commit('fillSelectedUser', user);
    },
    [SEND_MESSAGE] ({ commit }, message) {
        api.createNewMessage(message).then(data => {
            commit('fillNewMessageState', data.message)
        })
    },
    [NEW_MESSAGE] ({ commit }, message) {
        commit('fillNewMessageState', message)
    },
}
