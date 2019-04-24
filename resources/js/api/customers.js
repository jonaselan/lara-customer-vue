export default {
    externalAllCustomers(){
        console.log('call external');
        return axios.get('http://localhost:5000/api/customers')
            .then((response) => {
                return response.data.data
            });
    },
    allCustomers(){
        console.log('call local');
        return axios.get('/api/customers')
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
