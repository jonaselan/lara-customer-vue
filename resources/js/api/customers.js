export default {
    allCustomers(){
        return axios.get('api/customers')
            .then((response) => {
                return response.data;
            });
    },
    getCustomerById(id) {
        return axios.get(`/api/customers/${id}`)
            .then((response) => {
                return response.data.customer
            });
    },
    deleteCustomerById(id) {
        return axios.delete(`/api/customers/${id}`)
            .then((response) => {
                return 'Customers deleted!'
            });
    },
}
