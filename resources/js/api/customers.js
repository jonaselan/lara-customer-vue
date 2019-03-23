

export default {
    allCustomers(){
        axios.get('api/customers')
            .then((response) => {
                return response;
            });
    },
    getCustomerById(id) {
        console.log('qwe123');
        axios.get(`/api/customers/${id}`)
            .then((response) => {
                this.customer = response.data.customer
            });
    },
}
