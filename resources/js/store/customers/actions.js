import api from '../../api/customers';

export default {
    storeFile(context, file) {
        context.commit("fillFile", file);
    },
    storeImage(context, image) {
        context.commit("fillImage", image);
    },
    getCustomers({ commit }) {
        api.allCustomers().then(data => {
            commit('fillCustomerState', data.customers)
        })
    },
    deleteCustomer(context, id) {
        api.deleteCustomerById(id).then(data => {
            context.commit('removeCustomerState', id);
            alert(data);
        })
    },
    resetMedias(context) {
        context.commit('eraseMedias');
    },
}
