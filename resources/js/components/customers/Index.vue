<template>
    <div>
        <div class="row">
            <div class="col-sm">
                <p> Origem dos dados: {{ backendSource === true ? 'local' : 'api externa' }}</p>
                <label for="toggle-source"> Mudar </label>
                <input type="checkbox" id="toggle-source" v-bind:value="backendSource" @change="changeSourceBackend()"/>
                <transition name="fade">
                    <div class="filters" v-show="!backendSource">
                        aksjdn
                    </div>
                </transition>
            </div>
            <div class="col-sm text-right">
                <input type="text" v-model="filterField">
                <router-link to="/customers/create" class="btn btn-primary btn-sm">Create</router-link>
            </div>
        </div>
        <table class="table">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <template v-if="!customers.length">
                    <tr>
                        <td colspan="4" class="text-center">No Customers Available</td>
                    </tr>
                </template>
                <template v-else>
                    <tr v-for="customer in customers" :key="customer.id">
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.email }}</td>
                        <td>{{ customer.phone }}</td>
                        <td>
                            <router-link :to="`/customers/${customer.id}`">
                                View
                            </router-link>
                            <a href="#" @click="deleteCustomer(customer.id)">Delete</a>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'index',
        data() {
            return {
                filterField: '',
            }
        },
        beforeMount() {
            if (this.customers.length) {
                return;
            }

            this.$store.dispatch('fetchCustomers');
        },
        computed: {
            ...mapGetters([
                'backendSource'
            ]),
            customers() {
                return this.$store.getters.customers.filter((customer) => {
                    return customer.name.includes(this.filterField);
                });
            },
        },
        methods: {
            // o payload vai implicitamente
            ...mapActions([
                'deleteCustomer',
                'changeSourceBackend'
            ]),
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
