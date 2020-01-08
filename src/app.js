import Vue from 'vue';

window.axios = require('axios');

Vue.component('todo', {
  props: ['taki'],

  template: `
      <div>
      <p v-if="toggle">{{taki}} Shoot</p>
      <button @click="toggle = !toggle">Pssst...click me</button>
      </div>

    `,

  data: function () {
    return{
      toggle: false
    }
  }
});

new Vue({
  el: '#app',

  data: {
    title: 'Vue refresher',
    content: [],
    plug: '',
    posts:null,

  },
  
  mounted: function () {
    axios.get("http://jsonplaceholder.typicode.com/posts")
      .then(response => this.posts = response.data);
  }
});
