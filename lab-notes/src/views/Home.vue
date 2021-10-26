<template>
  <div class="home">
    <img alt="Notes logo" src="../assets/note-taking.png">
    <HelloWorld />    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld: "Welcome to TakeNotes" 
  }
}
</script>
