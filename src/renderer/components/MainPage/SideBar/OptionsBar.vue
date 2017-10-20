<template>
  <div class="options-bar">
    <q-list no-border dense>
      <q-list-header>Настройки</q-list-header>
      <q-collapsible indent dense icon="fa-puzzle-piece" label="Проект">
        <q-item></q-item>
      </q-collapsible>
      <q-collapsible indent dense icon="fa-gears" label="Система">
        <!-- <q-tree :model="treeModel_System" contract-html="" expand-html=""></q-tree> -->
        <q-list no-border dense>
          <q-collapsible indent dense icon="style" label="Шаблоны">
            <q-list no-border dense>
              <q-collapsible indent dense label="Время" @open="tempClick('Times')" :class="{selected: selected == 'Times'}" ></q-collapsible>
              <q-collapsible indent dense label="Рандомизация" @open="tempClick('RandLists')" :class="{selected: selected == 'RandLists'}" ></q-collapsible>
              <q-collapsible indent dense label="Данные" @open="tempClick('Datas')" :class="{selected: selected == 'Datas'}" ></q-collapsible>
            </q-list>
          </q-collapsible>
          <q-collapsible indent dense icon="fa-info" label="О программе"></q-collapsible>
        </q-list>
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
      selected: 'Times'
      // treeModel_System: [
      //   {
      //     title: 'Шаблоны',
      //     id: 'Templates',
      //     expanded: false,
      //     icon: 'style',
      //     handler: this.treeItemClick,
      //     children: [
      //       {
      //         title: 'Время',
      //         id: 'Times',
      //         expanded: false,
      //         handler: this.treeItemClick,
      //         children: []
      //       },
      //       {
      //         title: 'Рандомизация',
      //         id: 'RandLists',
      //         expanded: false,
      //         handler: this.treeItemClick,
      //         children: []
      //       },
      //       {
      //         title: 'Данные',
      //         id: 'Datas',
      //         expanded: false,
      //         handler: this.treeItemClick,
      //         children: []
      //       }
      //     ]
      //   },
      //   {
      //     title: 'О программе',
      //     id: 'About',
      //     expanded: false,
      //     icon: 'fa-info',
      //     handler: this.treeItemClick,
      //     children: []
      //   }
      // ]
    }
  },

  methods: {
    // выделение выбранного шаблона
    tempClick (tempItem) {
      console.log('click templates ' + tempItem)
      const vm = this
      vm.selected = tempItem
    },

    treeItemClick (item) {
      // var currentSelect = {
      //   action: 'options'
      // }
      this.selected = item.id
      console.log('About...' + item.id)
    }
  }

}
</script>

<style>
/* .q-list {
  padding: 0;
} */

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

.q-item-side {
  min-width: 20px;
}

.q-collapsible>.q-item {
  padding: 2px 8px;
  font-weight: bold;
}

.q-collapsible.selected {
  background-color: rgb(9, 71, 113);
}

.options-bar>.q-list>.q-collapsible>.q-item {
  background-color: rgba(128, 128, 128, 0.2);
}

.q-collapsible-sub-item.relative-position {
  padding-top: 0px;
  padding-bottom: 0px;
}

.q-collapsible-sub-item.indent {
  padding-left: 24px;
}
/* 

.q-collapsible-sub-item>.q-item {
  padding: 0px 16px;
  font-weight: 100;
  line-height: 22px;
}
 */
div.row.q-tree-link {
  margin-left: 13px;
}
</style>
