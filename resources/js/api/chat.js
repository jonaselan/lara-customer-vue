export default {
    allUsers(){
        return axios.get('/api/conversation/getUsers')
            .then((response) => {
                return response.data;
            });
    },
}
