'use strict';
const { createApp } = Vue

const app = createApp({
  data() {
    return {
      arrayList: [
        {
          id: 101,
          text: "fare la spesa",
          done: false
        },
        {
          id: 102,
          text: "portare il cane dal veterinario",
          done: false
        },
        {
          id: 103,
          text: "riparare l'automobile",
          done: false
        },
        {
          id: 104,
          text: "andare al parco",
          done: false
        },
      ]
    }

    {
      myInput: ''
    }
  },

  methods: {

    onCardClick(IdElement) {
      for (let i = this.arrayList.length - 1; i >= 0; i--) {
        if (this.arrayList[i].id === IdElement) {
          this.arrayList[i].done = true;
        }
      }
      /* console.log(this.arrayList)*/
    },

    deleteSingleElement(IdElement) {
      for (let i = this.arrayList.length - 1; i >= 0; i--) {
        if (this.arrayList[i].id === IdElement) {
          this.arrayList.splice(i, 1); /*a partire dalla posizionie i elimina 1 oggetto dell'array */
        }
      }
      console.log(this.arrayList)
    },



/*-------------DA ULTIMARE-----------------*/

    /**preleva l'attivita da svolgere in input
     * verifica qual'è il primo id libero
     * pusha tutto nell'array come nuovo oggetto
     */
    addObject() {
      for (let i=0; i<=this.arrayList.length-1; i++) {

        let actualId = parseInt(this.arrayList[i].id);
        let nextId = parseInt(this.arrayList[i+1].id); //id del prossimo indice 

        console.log("l'id attuale è: " + actualId);
        console.log("il prossimo id occupato è: " + nextId);


        if (nextId !== actualId ) {
          console.log("usiamo l id libero: " + parseInt(nextId+1))
          return;
        }
      }
    }
    /*this.arrayList.push({ id: searchFreeId, text: this.myInput, done: false });   
    console.log(this.arrayList);*/

  }












}).mount('#app');
