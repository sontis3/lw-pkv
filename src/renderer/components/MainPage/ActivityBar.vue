<template>
  <div class="activity-bar">
    <div class="content">
    <action-bar :iconType="'fa'" :iconArray="['fa-folder', 'fa-calculator']"></action-bar>
    <action-bar :iconType="'fa'" :iconArray="['fa-cog']"></action-bar>
    <!-- <action-bar :iconType="'glyphicon'" :iconArray="['glyphicon-file']"></action-bar> -->
    </div>
  </div>
</template>

<script>
import ActionBar from './ActivityBar/ActionBar';

export default {
  components: {
    'action-bar': ActionBar
  }
}
</script>

<style>
.activity-bar {
    background-color: rgb(51, 51, 51);
    height: 100%;
    width: 50px;
}

.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
</style>
