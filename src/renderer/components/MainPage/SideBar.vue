<template>
  <div class="side-bar">
    <component :is="sideBarType"></component>
    <!-- здесь будет SideBar {{sideBarType}} -->
  </div>
</template>

<script>
import explorer from './SideBar/ExplorerBar'
import options from './SideBar/OptionsBar'

export default {
  components: {
    explorer, options
  },

  props: {
    sideBarType: String
  }

}
</script>

<style scoped>
.side-bar {
  font-family: verdana;
  font-size: 12px;
  line-height: initial;
  font-weight: 200;
  background-color: #2e353d;
  height: 100%;
  color: #e1ffff;
}
</style>
