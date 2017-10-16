<template>
  <div class="options-bar">
    <q-list>
      <q-list-header>Настройки</q-list-header>
      <q-collapsible icon="fa-puzzle-piece" label="Проект">
        <q-item></q-item>
      </q-collapsible>
      <q-collapsible indent icon="fa-gears" label="Система">
        <q-tree :model="treeModel_System"></q-tree>
        <!-- <q-item>
          <q-item-main>Шаблоны</q-item-main>
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-main>О программе</q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-tree :model="treeModel_About"></q-tree>
          </q-item-main>
        </q-item> -->
      </q-collapsible>
    </q-list>
  </div>
</template>

<script>
import { QList, QListHeader, QCollapsible, QItem, QItemMain, QItemSeparator, QTree } from '../../../../../node_modules/quasar-framework';

export default {
  components: {
    QList,
    QListHeader,
    QCollapsible,
    QItem,
    QItemMain,
    QItemSeparator,
    QTree
  },

  data () {
    return {
      treeModel_System: [
        {
          title: 'Шаблоны',
          expanded: false,
          icon: 'style',
          handler: this.treeItemClick,
          children: [],
          id: 'Templates'
        },
        {
          title: 'О программе',
          expanded: false,
          icon: 'fa-info',
          handler: this.treeItemClick,
          children: [],
          id: 'About'
        }
      ]
    }
  },

  methods: {
    treeItemClick (item) {
      var currentSelect = {
        action: 'options'
      }
      console.log('About...' + item.id)
    }
  }

}
</script>

<style>
.q-list {
  padding: 0;
  border: none;
}

.q-list-header {
  background-color: #23282e;
  line-height: 50px;
  display: block;
  text-align: center;
  font-size: 14px;
}

.q-item {
  font-size: 12px;
  min-height: 18px;
}

.q-item-icon {
  font-size: 18px;
}

.q-collapsible>.q-item {
  padding: 2px 16px;
  background-color: rgba(128, 128, 128, 0.2);
  font-weight: bold;
}

.q-collapsible-sub-item.relative-position {
  padding-top: 0px;
  padding-bottom: 0px;
}

.q-collapsible-sub-item.indent {
  padding-left: 0px;
}

.q-collapsible-sub-item>.q-item {
  padding: 0px 16px;
  font-weight: 100;
  line-height: 22px;
}
</style>
