<template>
  <div class="q-action-bar">
    <ul class="actions-container list-unstyled" role="toolbar">
      <li class="action-item" role="button" v-for="item in iconArray">
        <q-icon :name="item" @click="actionClick(item)" :class="{checked: checked == item}" />
      </li>
    </ul>
  </div>
</template>

<script>
import { QIcon } from '../../../../../node_modules/quasar-framework';
import { EventBus } from '../../../event-bus.js';
import { settings } from '../../settings.js'

export default {
  components: {
    QIcon
  },

  props: {
    checked: '',
    iconArray: Array
  },

  methods: {
    actionClick (actionItem) {
      console.log('action click')

      const vm = this
      vm.checked = actionItem

      EventBus.$emit('action-click', settings.ACTION_MAP.get(actionItem))
    }
  }
}
</script>

<style scoped>
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

.q-action-bar>.actions-container>.action-item .q-icon.checked {
  opacity: 1;
}

.q-action-bar>.actions-container>.q-btn .q-btn-inner {
  font-size: 3rem;
  margin-left: 0;
}
</style>
