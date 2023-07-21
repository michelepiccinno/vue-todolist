'use strict';
const { createApp } = Vue

const app = createApp({
  data() {
    return {
      arrayList: [
        {
          text: "testo-1"
        },
        {
          text: "testo-1"
        },
        {
          text: "testo-1"
        },
        {
          text: "testo-1"
        },
        {
          text: "testo-1"
        }
      ]
    };
  },

  methods: {
    
  }
}).mount('#app');