<template>
  <div>
    <h1>{{counter}}</h1>
   <!--  si quiero enlazarlo con la data (counter) del script, pues
    lo llamo con las dobles llaves "{{}}" -->
    <button @click="suma">+</button>
    <!-- para llamar a los eventos se recurre al "@" -->
    <button @click="resta">-</button>
  </div>
</template>

<script>
// import {  } from ''

export default {
  data() {
    return {
      counter:0
    }
  },
  methods:{
    //funciones para la data
    suma(){ //1era funcion como objeto
      this.counter++
      /*"this" te trae cualquier elemento que este dentro dentro de
      data o de methods */
    },
    resta(){
      this.counter--
    }

  }
}
</script>
<style scoped>

</style>
