<template>
  <div id="main-container">
    <activitybar></activitybar>
    <sidebar></sidebar>
  </div>
</template>

<script>
import ActivityBar from './MainPage/ActivityBar';
import SideBar from './MainPage/SideBar';

export default {
  components: {
    'activitybar': ActivityBar,
    'sidebar': SideBar
  }
}
</script>

<style>
#main-container {
  height: 100%;
}
</style>
