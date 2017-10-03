<template>
  <div class="activity-bar" role="navigation">
    <div class="content">
      <q-action-bar :iconArray="['fa-folder', 'fa-calculator']"></q-action-bar>
      <action-bar :iconType="'fa'" :iconArray="['fa-folder', 'fa-calculator']"></action-bar>
      <q-action-bar :iconArray="['fa-cog']"></q-action-bar>
      <!-- <action-bar :iconType="'glyphicon'" :iconArray="['glyphicon-file']"></action-bar> -->
    </div>
  </div>
</template>

<script>
import ActionBar from './ActivityBar/ActionBar';
import QActionBar from './ActivityBar/QActionBar';

export default {
  components: {
    'action-bar': ActionBar,
    'q-action-bar': QActionBar
  }
}
</script>

<style>
.activity-bar {
  background-color: rgb(51, 51, 51);
  height: 100%;
  width: 50px;
  /* padding-bottom: 22px; */
}

.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
</style>
