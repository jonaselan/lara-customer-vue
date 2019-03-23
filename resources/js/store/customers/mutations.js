export default {
    fillCustomerState(state, customers) {
        state.customers = customers;
    },
    removeCustomerState(state, id) {
        state.customers = state.customers.filter(function (val) {
            return val.id !== id;
        });
    },
    fillImage(state, img) {
        state.images.push(img);
    },
    fillFile(state, file) {
        state.files.push(file);
    },
    eraseMedias(state) {
        state.files = [];
        state.images = [];
    }
}
