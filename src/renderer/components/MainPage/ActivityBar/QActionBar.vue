<template>
  <div class="q-action-bar">
    <ul class="actions-container list-unstyled" role="toolbar">
      <li class="action-item" role="button" v-for="item in iconArray">
        <q-icon :name="item" @click="actionClick" />
      </li>
    </ul>
  </div>
</template>

<script>
import { QIcon } from '../../../../../node_modules/quasar-framework'
export default {
  components: {
    QIcon
  },
  props: {
    iconArray: Array
  },
  methods: {
    actionClick (e) {
      console.log('action click')
      this.$emit('action-click', e.pageX)
    }
  }
}
</script>

<style>
.q-action-bar {
  text-align: left;
  background-color: inherit;
}

.q-action-bar>.actions-container {
  justify-content: flex-end;
  display: inline-block;
  width: 50px;
  margin: 0;
  padding: 0;
}

.q-action-bar>.actions-container>.action-item {
  color: rgb(204, 204, 204);
  display: block;
  position: relative;
  padding: 5px 0;
  margin-left: 10px;
  width: 40px;
  height: 50px;
}

.q-action-bar>.actions-container>.action-item .q-icon {
  opacity: 0.6;
  font-size: 3rem;
  margin-left: 0;
}

.q-action-bar>.actions-container>.action-item .q-icon:hover {
  opacity: 1;
}

.q-action-bar>.actions-container>.q-btn .q-btn-inner {
  font-size: 3rem;
  margin-left: 0;
}
</style>
