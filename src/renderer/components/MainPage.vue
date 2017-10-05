<template>
  <!-- <q-layout view="lhh lpr fFf">
                  <div id="left-bar" slot="left">
                    <activity-bar id="abar" class="vertical-top"></activity-bar>
                    <q-side-bar id="sbar" class="vertical-top"></q-side-bar>
                  </div>
                  <status-bar slot="footer"></status-bar>
                </q-layout> -->
  <div id="main-container" v-on:mousemove="onMouseMove" v-on:mouseup="onMouseUp" v-bind:style="{gridTemplateColumns: '[activitybarstart] 50px [sidebarstart] ' + sideBarWidth + 'px [sliderstart] 3px [workcontainerstart] 1fr [workcontainerend]'}">
    <div id="abar">
      <activity-bar></activity-bar>
    </div>
    <div id="sbar" v-show="seenSideBar" ref="sideBar">
      <side-bar :sideBarType="$store.state.Action.current"></side-bar>
    </div>
    <div id="slider" v-show="seenSideBar" v-on:mousedown.left="onMouseDown"></div>
    <div id="content-container" v-bind:style="{gridColumnStart: gridColumnStart}"></div>
    <div id="footer-container">
      <status-bar></status-bar>
    </div>
  </div>
</template>

<script>
// import { QLayout } from '../../../node_modules/quasar-framework'
import ActivityBar from './MainPage/ActivityBar';
import SideBar from './MainPage/SideBar';
import StatusBar from './MainPage/StatusBar'
import { EventBus } from '../event-bus.js';
import { mapActions } from 'vuex';

export default {
  components: {
    // QLayout,
    'activity-bar': ActivityBar,
    'side-bar': SideBar,
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
    EventBus.$on('action-click', this.onToggleSideBar)
  },

  beforeDestroy () {
    console.log('main-container beforeDestroy')
    EventBus.$off('action-click', this.onToggleSideBar)
  },

  methods: {
    // акции vuex
    ...mapActions(['changeAction']),

    // нажатие мыши на слайдер (для отслеживания начала перемещения)
    onMouseDown (e) {
      console.log('mouse down')
      const vm = this
      vm.isStartMove = true
      vm.startPageX = e.pageX
    },

    // перемещение слайдера
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

    // конец перемещения слайдера
    onMouseUp (e) {
      console.log('mouse up')
      const vm = this
      vm.isStartMove = undefined
    },

    // переключение видимости сайдбара (если кликаем на одну и ту же акцию)
    onToggleSideBar (actionName, actionItem) {
      console.log('toggle SideBar ' + actionName)
      if (this.$store.state.Action.current === actionName) {
        this.seenSideBar = !this.seenSideBar
      } else {
        this.changeAction(actionName)
        this.seenSideBar = true
      }

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
  background-color: rgb(111, 111, 111);
}

#content-container {
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
