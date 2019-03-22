import {getLocalUser} from "./helpers/auth";

const user = getLocalUser();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        authError: null,
        customers: [],
        files: [],
        images: [],
        welcome: "olá"
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        files(state) {
            return state.files;
        },
        images(state) {
            return state.images;
        },
        authError(state) {
            return state.authError;
        },
        customers(state) {
            return state.customers;
        },
        welcome(state) {
            return state.welcome;
        },
        filterCustomer: state => field => state.customers.filter(customer => customer.name == field),
        // filterCustomer(state, field) {
            // return state.customers.filter(function(customer) {
            //     return customer.name.includes(field);
            // });
        // }
    },
    mutations: {
        login(state) {
            state.loading = true;
            state.authError = null;
        },
        loginSuccess(state, payload) {
            state.authError = null;
            state.isLoggedIn = true;
            state.loading = false;
            // unir os dois valores em um
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});

            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.authError = payload;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        },
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
    },
    actions: {
        login(context) {
            context.commit("login");
        },
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
};
