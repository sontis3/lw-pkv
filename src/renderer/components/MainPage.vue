<template>
  <div id="main-container">
    <activity-bar></activity-bar>
    <side-bar></side-bar>
  </div>
</template>

<script>
import ActivityBar from './MainPage/ActivityBar';
import SideBar from './MainPage/SideBar';

export default {
  components: {
    'activity-bar': ActivityBar,
    'side-bar': SideBar
  }
}
</script>

<style>
#main-container {
  height: 100%;
}
</style>
