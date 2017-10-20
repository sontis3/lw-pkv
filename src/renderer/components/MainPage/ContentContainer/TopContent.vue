<template>
  <div class="top-content">
    <q-tabs inverted align="justify">
      <q-tab slot="title" name="tab-1">111</q-tab>
      <q-tab-pane name="tab-1">Tab 1</q-tab-pane>
    </q-tabs>
  </div>
</template>

<script>
import { QTabs, QTab, QTabPane } from '../../../../../node_modules/quasar-framework';

export default {
  components: {
    QTabs,
    QTab,
    QTabPane
  }

}
</script>

<style>
.q-tabs>.row {
  margin-left: unset;
  margin-right: unset;
}
</style>
