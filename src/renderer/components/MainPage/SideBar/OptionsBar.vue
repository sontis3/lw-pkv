<template>
  <div class="options-bar">
    <q-list>
      <q-list-header>Настройки</q-list-header>
      <q-collapsible icon="fa-puzzle-piece" label="Проект">
        <q-item></q-item>
      </q-collapsible>
      <q-collapsible indent icon="fa-gears" label="Система">
        <q-item>
          <q-item-main>Шаблоны</q-item-main>
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-main>О программе</q-item-main>
        </q-item>
      </q-collapsible>
    </q-list>
  </div>
</template>

<script>
import { QList, QListHeader, QCollapsible, QItem, QItemMain, QItemSeparator } from '../../../../../node_modules/quasar-framework';

export default {
  components: {
    QList,
    QListHeader,
    QCollapsible,
    QItem,
    QItemMain,
    QItemSeparator
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
  height: 100%;
  padding: 4px 16px;
  font-size: 12px;
}
</style>
