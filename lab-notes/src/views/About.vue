<template>
  <div class="about">
    <h1>This is an about page</h1>
     <Contador/>
  </div>
</template>


<script>
import Contador from '@/components/contador.vue'
export default {
  name: 'about',
  components: {
    Contador
  }

}
</script>

<style>

</style>
