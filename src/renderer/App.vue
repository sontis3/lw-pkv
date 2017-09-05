<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'lw-pkv'
}
</script>

<style>
/* CSS */

html {
  height: 100%;
}

body {
  display: block;
  min-height: 100%;
}

#app {
  position: absolute;
  left: 0;
  top: 0;
  
  height: 100%;
  width: 100%;
}
</style>
