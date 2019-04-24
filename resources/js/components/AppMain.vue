<template>
  <div id="main">
    <keep-alive>
        <AppHeader/>
    </keep-alive>
    <div class="content">
        <div class="container">
            <transition name="moveInUp">
                <router-view/>
            </transition>
        </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from './AppHeader.vue';

  export default {
    name: 'AppMain',
    components: { AppHeader }
  }
</script>
