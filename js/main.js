'use strict';
const { createApp } = Vue

const app = createApp({
  data() {
    return {
      arrayList: [
        {
          text: "fare la spesa",
          done: false
        },
        {
          text: "portare il cane dal veterinario",
          done: false
        },
        {
          text: "riparare l'automobile",
          done: false
        },
      ]
    }
  },

  methods: {
    onCardClick(i) {
      this.arrayList[i].done = true;
    }
  }
}).mount('#app');


