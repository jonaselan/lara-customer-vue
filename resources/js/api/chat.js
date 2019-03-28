export default {
    allUsers(){
        return axios.get('/api/conversation/getUsers')
            .then((response) => {
                return response.data;
            });
    },
    getConversationMessages(id) {
        return axios.get(`/api/conversation/${id}`)
            .then((response) => {
                return response.data;
            });
    },
    createNewMessage(body) {
        return axios.post(`/api/conversation/send`, body)
        .then((response) => {
            return response.data;
        });
    },
}
