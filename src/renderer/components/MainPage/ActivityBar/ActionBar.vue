<template>
  <div class="action-bar">
    <ul class="actions-container" role="toolbar">
        <li class="action-item" role="button" v-for="item in items"><span :class="'glyphicon ' + item.glyph"></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {glyph: 'glyphicon-cog'},
        {glyph: 'glyphicon-file'}
      ]
    };
  }
};
</script>

<style>
.action-bar {
  text-align: left;
	background-color: inherit;
}

.actions-container {
  justify-content: flex-end;
  display: inline-block;
  width: 50px;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.actions-container > .action-item {
  color: rgb(204, 204, 204);
  display: block;
  position: relative;
	padding: 5px 0;
  margin-left: 10px;
  width: 40px;
  height: 50px;
  opacity: 0.6;
}

.actions-container > .action-item:hover {
  opacity: 1;
}

.actions-container > .action-item .glyphicon {
  font-size: 3rem;
  margin-left: 0;
}

</style>
