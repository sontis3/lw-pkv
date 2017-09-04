<template>
  <div id="example" class="container">
    <h2>{{title}}</h2>
    <div class="input-group">
      <input v-model="newItem" @keyup.enter="addItem" placeholder="add shopping list item" type="text" class="form-control">
      <span class="input-group-btn">
        <button @click="addItem" class="btn btn-default" type="button">Add!</button>
      </span>
    </div>
    <ul>
      <li v-for="item in items" :class="{ 'removed': item.checked }">
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="item.checked"> {{ item.text }}
          </label>
        </div>
      </li>
    </ul>
    <div class="footer">
      <hr/>
      <em>>Change the title of your shopping list here</em>
      <input v-model="title" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { text: 'Bananas', checked: true },
        { text: 'Apples', checked: false }],
      title: 'MSL',
      newItem: ''
    };
  },
  methods: {
    addItem () {
      var text;
      text = this.newItem.trim();
      if (text) {
        this.items.push({
          text: text,
          checked: false
        });
        this.newItem = '';
      }
    }
  }
}
</script>

<<style scoped>
.container {
  width: 80%;
  margin: 10px auto 0px auto;
}

.removed label {
  text-decoration: line-through;
}

ul li {
  list-style-type: none;
}

ul li span {
  margin-left: 5px;
}

.footer {
  font-size: 0.7em;
  margin-top: 5vh;
}
</style>
