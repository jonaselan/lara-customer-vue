export default {
    storeFile(context, file) {
        context.commit("fillFile", file);
    },
    storeImage(context, image) {
        context.commit("fillImage", image);
    },
    getCustomers(context) {
        axios.get('api/customers')
            .then((response) => {
                context.commit('fillCustomerState', response.data.customers);
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
