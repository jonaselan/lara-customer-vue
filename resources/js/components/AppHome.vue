<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card card-default">
                <div class="card-header">Welcome</div>

                <div class="card-body">
                    <h2>{{ welcome }}</h2>

                    <div class="small">
                        <line-chart :chart-data="datacollection"></line-chart>
                        <button @click="fillData()">Gerar</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChart from '../LineChart';

    export default {
        name: 'AppHome',
        components: {
            LineChart
        },
        data () {
            return {
                datacollection: null
            }
        },
        mounted () {
            this.fillData()
        },
        methods: {
            fillData () {
                this.datacollection = {
                    labels: [this.getRandomInt(), this.getRandomInt()],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }, {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }
                    ]
                }
            },
            getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        },
        computed: {
            welcome() {
                return this.$store.getters.welcome
            }
        },

    }
</script>

<style>
    .small {
        max-width: 600px;
        margin:  150px auto;
    }
</style>
