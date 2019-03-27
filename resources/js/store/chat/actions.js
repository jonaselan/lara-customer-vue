import api from '../../api/chat';

export default {
    selectUser({commit}, user){
        commit('setSelectedUser', user);
    },
    getUsers({ commit }) {
        api.allUsers().then(data => {
            // commit('fillCustomerState', data.customers)
        })
    },
}
