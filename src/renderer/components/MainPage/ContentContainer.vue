<template>
  <div class="content-container" @mousemove="onMouseMove" @mouseup="onMouseUp" :style="{gridTemplateRows: '[topStart] ' + topHight + 'px [sliderStart] 2px [bottomStart] auto [bottomEnd]'}">
    <top-content ref="topContent"></top-content>
    <div id="h-slider" @mousedown.left="onMouseDown"></div>
    <bottom-content></bottom-content>
  </div>
</template>

<script>
import TopContent from './ContentContainer/TopContent';
import BottomContent from './ContentContainer/BottomContent';

export default {
  components: {
    'top-content': TopContent,
    'bottom-content': BottomContent
  },

  data () {
    return {
      topHight: 300
    }
  },

  mounted () {
    const vm = this
    vm.topHight = this.$refs.topContent.$el.offsetHeight
  },

  methods: {
    // нажатие мыши на слайдер (для отслеживания начала перемещения)
    onMouseDown (e) {
      console.log('mouse down')
      const vm = this
      vm.isStartMove = true
      vm.startPageY = e.pageY
    },

    // перемещение слайдера
    onMouseMove (e) {
      const vm = this
      if (vm.isStartMove === true) {
        const moveY = e.pageY - vm.startPageY
        this.topHight += moveY

        // ограничение на минимальную высоту сайдбара
        if (moveY < 0 && this.topHight < 50) {
          vm.startPageY = e.pageY + 50 - this.topHight
          this.topHight = 50
        } else if (e.pageY > vm.$el.offsetHeight - 50) {
          // ограничение на максимальную ширину сайдбара
          this.topHight = this.topHight - moveY + vm.$el.offsetHeight - 50 - vm.startPageY
          vm.startPageY = vm.$el.offsetHeight - 50
        } else {
          vm.startPageY = e.pageY
        }

        console.log('mouse move ' + moveY + '= ' + this.topHight)
      }
    },

    // конец перемещения слайдера
    onMouseUp (e) {
      console.log('mouse up')
      const vm = this
      vm.isStartMove = undefined
    }
  }
}
</script>

<style>
.content-container {
  display: grid;
}

#h-slider {
  /* grid-column: sliderstart; */
  cursor: row-resize;
  background-color: rgb(111, 111, 111);
}

</style>
