<template>
  <!-- <q-layout view="lhh lpr fFf">
            <div id="left-bar" slot="left">
              <activity-bar id="abar" class="vertical-top"></activity-bar>
              <q-side-bar id="sbar" class="vertical-top"></q-side-bar>
            </div>
            <status-bar slot="footer"></status-bar>
          </q-layout> -->
  <div id="main-container" v-on:mousemove="onMouseMove" v-on="onMouseUp">
    <div id="abar" v-on:mousedown.left="onToggleSideBar">
      <activity-bar></activity-bar>
    </div>
    <div id="sbar" v-show="seenSideBar" ref="sideBar">
      <q-side-bar></q-side-bar>
    </div>
    <div id="slider" v-show="seenSideBar" v-on:mousedown.left="onMouseDown"></div>
    <div id="work-container" v-bind:style="{gridColumnStart: gridColumnStart}"></div>
    <div id="footer-container">
      <status-bar></status-bar>
    </div>
  </div>
</template>

<script>
// import { QLayout } from '../../../node_modules/quasar-framework'
import ActivityBar from './MainPage/ActivityBar';
import QSideBar from './MainPage/QSideBar';
import StatusBar from './MainPage/StatusBar'

export default {
  components: {
    // QLayout,
    'activity-bar': ActivityBar,
    'q-side-bar': QSideBar,
    'status-bar': StatusBar
  },
  data () {
    return {
      seenSideBar: true,
      gridColumnStart: 4
    }
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
      const vm = this
      vm.isStartMove = true
      vm.startWidth = this.$refs.sideBar.offsetWidth
    },
    onMouseMove (e) {
      const vm = this
      if (vm.isStartMove) {
        const width = vm.startWidth + e.pageX
        vm.qqq = width
      }
    },
    onMouseUp (e) {
      console.log('mouse up')
    },
    onToggleSideBar (e) {
      console.log('toggle SideBar')
      this.seenSideBar = !this.seenSideBar
      // var wc = this.$refs.workContainer
      // wc.hidden = false
      if (this.seenSideBar) {
        this.gridColumnStart = 4
      } else {
        this.gridColumnStart = 2
      }
      // const vm = this
      // vm.thElm = e.target.parentNode
      // vm.startOffset = vm.thElm.offsetWidth - e.pageX
    }
  }
}
</script>

<style>
#abar {
  grid-column: 1;
}

#sbar {
  grid-column: 2;
}

#slider {
  grid-column: 3;
  cursor: col-resize;
}

#work-container {
  grid-column-start: 4;
  grid-column-end: 5;
  background-color: rgb(30, 30, 30);
  width: 100%
}

#footer-container {
  grid-row: 2;
  grid-column-start: 1;
  grid-column-end: 5;
}

#main-container {
  display: grid;
  grid-template-columns: 50px 250px 3px 1fr;
  grid-template-rows: 1fr 22px;
  height: 100%;
}
</style>
