<template>
    <div class="customer-view" v-if="customer">
        <div class="user-info">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <td>{{ customer.id }}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{{ customer.name }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ customer.email }}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{{ customer.phone }}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{ customer.website }}</td>
                </tr>
                <tr>
                    <th>Images</th>
                    <td>
                        <div v-if="customer.images" class="row">
                            <div v-for="img in customer.images" class="col-lg-4">
                                <img :src="'/storage/' + img.url" class="user-images" />
                            </div>
                        </div>
                        <div v-else>
                            Nenhuma imagem
                        </div>
                    </td>
                </tr>
            </table>
            <router-link to="/customers">Back to all customers</router-link>
        </div>
    </div>
</template>

<script>
    import api from '../../api/customers';
    import { mapGetters } from 'vuex';

    export default {
        name: 'show',
        data() {
            return {
                customer: null
            };
        },
        created() {
            if (this.customers.length) {
                this.customer = this.customers.find((customer) => customer.id == this.$route.params.id);
            } else {
                api.getCustomerById(this.$route.params.id).then(customer => {
                    this.customer = customer;
                })
            }
        },
        computed: {
            ...mapGetters([
                'currentUser',
                'customers',
            ])
        }
    }
</script>

<style scoped>
  .customer-view {
      display: flex;
      align-items: center;
  }
  .user-img {
      flex: 1;
  }
  .user-img img {
      max-width: 160px;
  }
  .user-info {
    flex: 3;
    overflow-x: scroll;
  }

    /* figure {
        display: inline-block;
        margin: 0 0 0 0;
        width: 100%;
    } */

    .user-images {
        width: 100%;
        height: auto;
        /* max-height: 120px; */
    }
</style>

// <script src="https://unpkg.com/zooming/build/zooming.min.js"></script>
// <script>
//     document.addEventListener('DOMContentLoaded', function () {
//         new Zooming({
//             // options...
//         }).listen('.user-images')
//     })
// </script>
