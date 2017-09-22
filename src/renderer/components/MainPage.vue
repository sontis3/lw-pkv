<template>
  <q-layout view="lhh lpr fFf">
    <div id="left-bar" slot="left">
      <activity-bar id="abar" class="vertical-top"></activity-bar>
      <q-side-bar id="sbar" class="vertical-top"></q-side-bar>
    </div>
    <status-bar slot="footer"></status-bar>
  </q-layout>
  <!-- <div id="main-container">
      </div> -->
</template>

<script>
import { QLayout } from '../../../node_modules/quasar-framework'
import ActivityBar from './MainPage/ActivityBar';
import QSideBar from './MainPage/QSideBar';
import StatusBar from './MainPage/StatusBar'

export default {
  components: {
    QLayout,
    'activity-bar': ActivityBar,
    'q-side-bar': QSideBar,
    'status-bar': StatusBar
  }
}
</script>

<style>
#left-bar {
  height: 100%;
  /* width: 300px; */
}

#abar {
  display: inline-block;
}

#sbar {
  display: inline-block;
}
</style>
