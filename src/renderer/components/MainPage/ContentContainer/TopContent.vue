<template>
  <div class="top-content">
    <q-tabs inverted align="left" color="tertiary">
      <q-tab slot="title" name="tab-1" label="asd12"/>
      <q-tab slot="title" name="tab-12" label="qwe12"/>
      <q-tab-pane name="tab-1">Tab 1</q-tab-pane>
    </q-tabs>

    <!-- <q-tabs inverted align="left" color="tertiary">
      <q-tab v-for="_tab in tabs" :key="_tab.label" slot="title" name="_tab.name" :label="_tab.label" />
      <q-tab-pane v-for="_tab in tabs" :key="_tab.label" name="_tab.name">{{ _tab.content }}</q-tab-pane>
    </q-tabs> -->
  </div>
</template>

<script>
import { QTabs, QTab, QTabPane } from '../../../../../node_modules/quasar-framework';

export default {
  components: {
    QTabs,
    QTab,
    QTabPane
  },

  data () {
    return {
      tabs: [
        {
          name: 'Test',
          label: 'test',
          content: '111'
        },
        {
          name: 'Test2',
          label: 'test2',
          content: '222'
        }
      ]
    }
  }

}
</script>

<style>
.text-tab {
  color:gray;
}

.bg-tab {
  background: dimgray;
}

.text-seltab {
  color:white;
}

.bg-seltab {
  background: black;
}

.q-tabs>.row {
  margin-left: unset;
  margin-right: unset;
}
</style>
