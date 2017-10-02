<template>
  <div class="activity-bar" role="navigation">
    <div class="content">
      <q-action-bar :iconArray="['thumb_up', 'fa-calculator']"></q-action-bar>
      <action-bar :iconType="'fa'" :iconArray="['fa-folder', 'fa-calculator']"></action-bar>
      <action-bar :iconType="'fa'" :iconArray="['fa-cog']"></action-bar>
      <!-- <action-bar :iconType="'glyphicon'" :iconArray="['glyphicon-file']"></action-bar> -->
    </div>
  </div>
</template>

<script>
import ActionBar from './ActivityBar/ActionBar';
import QActionBar from './ActivityBar/QActionBar';
import { EventBus } from '../../event-bus.js';

const onToggleSideBar = function (actionName) {
  console.log('toggle SideBar ' + actionName)
}

export default {
  components: {
    'action-bar': ActionBar,
    'q-action-bar': QActionBar
  },

  mounted () {
    console.log('mounted ActivityBar')
    EventBus.$on('action-click', onToggleSideBar)
  },

  beforeDestroy () {
    console.log('beforeDestroy ActivityBar')
    EventBus.$off('action-click', onToggleSideBar)
  },

  methods: {
    onToggleSideBar (actionName) {
      console.log('toggle SideBar ' + actionName)
    }
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
