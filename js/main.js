'use strict';
const { createApp } = Vue

const app = createApp({
  data() {
    return {
      arrayList: [
        {
          id: 251476,
          text: "fare la spesa",
          done: false
        },
        {
          id: 345172,
          text: "portare il cane dal veterinario",
          done: false
        },
        {
          id: 211456,
          text: "riparare l'automobile",
          done: false
        },
        {
          id: 125713,
          text: "andare al parco",
          done: false
        },
      ]
    }

    {
      myInput: ''
    }

    {
      inputEnterKey: ''
    }

  },

  methods: {

    onClickTextThrough(IdElement) {
      for (let i = this.arrayList.length - 1; i >= 0; i--) {
        if (this.arrayList[i].id === IdElement && this.arrayList[i].done === false) {
          this.arrayList[i].done = true;
        } else {
          this.arrayList[i].done = false;
        }
      }
    },

    deleteSingleElement(IdElement) {
      for (let i = this.arrayList.length - 1; i >= 0; i--) {
        if (this.arrayList[i].id === IdElement) {
          this.arrayList.splice(i, 1); /*a partire dalla posizionie i elimina 1 oggetto dell'array */
        }
      }
      console.log(this.arrayList)
    },

    addObject() {
      let newIdToAssing = Math.floor(Math.random() * 9999999);
      this.arrayList.push({ id: newIdToAssing, text: this.myInput, done: false });
      console.log(this.arrayList);
      console.log(this.onEnter)
    },

    
  }
}).mount('#app');
