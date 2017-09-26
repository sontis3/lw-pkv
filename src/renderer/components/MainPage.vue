<template>
  <!-- <q-layout view="lhh lpr fFf">
          <div id="left-bar" slot="left">
            <activity-bar id="abar" class="vertical-top"></activity-bar>
            <q-side-bar id="sbar" class="vertical-top"></q-side-bar>
          </div>
          <status-bar slot="footer"></status-bar>
        </q-layout> -->
  <div id="main-container" v-on:mousedown.left="onMouseDown">
    <activity-bar id="abar" class="vertical-top"></activity-bar>
    <q-side-bar id="sbar" class="vertical-top"></q-side-bar>
    <status-bar id="f-container"></status-bar>
  </div>
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
  },
  mounted () {
    console.log('main-container mounted')
  },
  beforeDestroy () {
    console.log('main-container beforeDestroy')
  },
  methods: {
    onMouseDown (e) {
      console.log('mouse down')
      // const vm = this
      // vm.thElm = e.target.parentNode
      // vm.startOffset = vm.thElm.offsetWidth - e.pageX
    }
  }
}
</script>

<style>
/* #left-bar {
  height: 100%;
  width: 300px;
} */

#abar {
  /* display: inline-block; */
  grid-column: 1;
}

#sbar {
  /* display: inline-block; */
  grid-column: 2;
}

#f-container {
  grid-row: 2;
  grid-column-start: 1;
  grid-column-end: 4;
}

#main-container {
  display: grid;
  grid-template-columns: 50px 250px 1fr;
  grid-template-rows: 1fr 22px;
  height: 100%;
}
</style>
