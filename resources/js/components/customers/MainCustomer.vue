<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header"> Customers section </div>
                    <div class="card-body">
                        <transition name="moveInUp">
                            <router-view/>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'customers-main'
    }
</script>

<style>
    .moveInUp-enter-active{
        animation: fadeIn 2s ease-in;
    }
    @keyframes fadeIn{
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.5;
        }
        100%{
            opacity: 1;
        }
    }

    .moveInUp-leave-active{
        animation: moveInUp .3s ease-in;
    }
    @keyframes moveInUp{
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-400px);
        }
    }
</style>

