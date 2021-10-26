<template>
  <div class="home">
    <div class="logo">
    <img
      alt="Note logo"
      src="../assets/noteLogo.png"
    >
    <HelloWorld msg="Welcome to My Notes" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.home{
  padding: 100px;
}
img{
  width:200px;
  height:200px;
}
.logo{
  text-align: center;
}

</style>
