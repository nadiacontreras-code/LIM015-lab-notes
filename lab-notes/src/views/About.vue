<template>
  <div class="about">
    <h1>This is an about page</h1>
      <Cabecera/>
      <Contador/>
  </div>
</template>


<script>
import Cabecera from '@/components/Cabecera.vue'
import Contador from '@/components/contador.vue'
export default {
  name: 'about',
  components: {
    Cabecera,
    Contador
  }

}
</script>

<style>

</style>
