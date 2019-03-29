<template>
  <div id="main">
    <keep-alive>
      <AppHeader/>
    </keep-alive>
    <div class="content">
      <router-view> </router-view>
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
