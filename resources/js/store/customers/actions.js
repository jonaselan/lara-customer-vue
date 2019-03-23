import api from '../../api/customers';

export default {
    storeFile(context, file) {
        context.commit("fillFile", file);
    },
    storeImage(context, image) {
        context.commit("fillImage", image);
    },
    getCustomers({ commit }) {
        // api.allCustomers(response => {
        //     console.log(response)
        //     commit('fillCustomerState', response.data.customers)
        // })

        axios.get('api/customers')
            .then((response) => {
                commit('fillCustomerState', response.data.customers);
            });
    },
    deleteCustomer(context, id) {
        axios.delete(`api/customers/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    context.commit('removeCustomerState', id);
                    alert("Customers deleted!");
                }
            });
    },
    resetMedias(context) {
        context.commit('eraseMedias');
    },
}
