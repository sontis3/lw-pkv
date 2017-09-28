<template>
  <!-- <q-layout view="lhh lpr fFf">
              <div id="left-bar" slot="left">
                <activity-bar id="abar" class="vertical-top"></activity-bar>
                <q-side-bar id="sbar" class="vertical-top"></q-side-bar>
              </div>
              <status-bar slot="footer"></status-bar>
            </q-layout> -->
  <div id="main-container" v-on:mousemove="onMouseMove" v-on:mouseup="onMouseUp" v-bind:style="{gridTemplateColumns: '[activitybarstart] 50px [sidebarstart] ' + sideBarWidth + 'px [sliderstart] 3px [workcontainerstart] 1fr [workcontainerend]'}">
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
      gridColumnStart: 'workcontainerstart',
      sideBarWidth: 250
    }
  },

  mounted () {
    console.log('main-container mounted')
    const vm = this
    vm.sideBarWidth = this.$refs.sideBar.offsetWidth
  },

  beforeDestroy () {
    console.log('main-container beforeDestroy')
  },

  methods: {
    onMouseDown (e) {
      console.log('mouse down')
      const vm = this
      vm.isStartMove = true
      vm.startPageX = e.pageX
    },
    onMouseMove (e) {
      const vm = this
      if (vm.isStartMove === true) {
        const moveX = e.pageX - vm.startPageX
        this.sideBarWidth += moveX
        // ограничение на минимальную ширину сайдбара
        if (moveX < 0 && this.sideBarWidth < 200) {
          vm.startPageX = e.pageX + 200 - this.sideBarWidth
          this.sideBarWidth = 200
        } else if (e.pageX > vm.$el.offsetWidth - 200) {
          // ограничение на максимальную ширину сайдбара
          this.sideBarWidth = this.sideBarWidth - moveX + vm.$el.offsetWidth - 200 - vm.startPageX
          vm.startPageX = vm.$el.offsetWidth - 200
        } else {
          vm.startPageX = e.pageX
        }

        console.log('mouse move ' + moveX + '= ' + this.sideBarWidth)
      }
    },
    onMouseUp (e) {
      console.log('mouse up')
      const vm = this
      vm.isStartMove = undefined
    },

    // переключение видимости сайдбара
    onToggleSideBar (e) {
      console.log('toggle SideBar')
      this.seenSideBar = !this.seenSideBar
      if (this.seenSideBar) {
        this.gridColumnStart = 'workcontainerstart'
      } else {
        this.gridColumnStart = 'sidebarstart'
      }
    }
  }
}
</script>

<style>
#abar {
  grid-column: activitybarstart;
}

#sbar {
  grid-column: sidebarstart;
}

#slider {
  grid-column: sliderstart;
  cursor: col-resize;
}

#work-container {
  grid-column-start: workcontainerstart;
  grid-column-end: workcontainerend;
  background-color: rgb(30, 30, 30);
  width: 100%
}

#footer-container {
  grid-row: 2;
  grid-column-start: activitybarstart;
  grid-column-end: workcontainerend;
}

#main-container {
  display: grid;
  grid-template-columns: [activitybarstart] 50px [sidebarstart] 250px [sliderstart] 5px [workcontainerstart] 1fr [workcontainerend];
  grid-template-rows: 1fr 22px;
  height: 100%;
}
</style>
