<template>
  <div>
    <router-view></router-view>
    <tab-bar></tab-bar>
    <side-bar></side-bar>
  </div>
</template>

<script>
import tabBar from '../components/TabBar.vue';
import sideBar from '../components/SideBar.vue';

export default {
  components: {
    tabBar,
    sideBar,
  },
};
</script>

<style>

</style>
