<template>
  <div id="main-container">
    <activity-bar></activity-bar>
    <side-bar></side-bar>
    <status-bar></status-bar>
  </div>
</template>

<script>
import ActivityBar from './MainPage/ActivityBar';
import SideBar from './MainPage/SideBar';
import StatusBar from './MainPage/StatusBar'

export default {
  components: {
    'activity-bar': ActivityBar,
    'side-bar': SideBar,
    'status-bar': StatusBar
  }
}
</script>

<style>
#main-container {
  height: 100%;
}
</style>
