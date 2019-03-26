<template>
    <div class="customers-list">
        <ul>
            <li v-for="customer in customers" :key="customer.id">
                <div class="avatar">
                    <img src="http://via.placeholder.com/150x150" :alt="customer.id">
                </div>
                <div class="customer">
                    <p class="name">{{customer.name}}</p>
                    <p class="email">{{customer.email}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CustomersList",
        beforeMount() {
            if (this.customers.length) {
                return;
            }

            this.$store.dispatch('getCustomers');
        },
        computed: {
            customers() {
                return this.$store.getters.customers
            },
        },
    }
</script>

<style scoped>

</style>
