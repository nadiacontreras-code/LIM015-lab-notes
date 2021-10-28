<template>
  <div class="home">
    <div class="logo">
    <img
      alt="Note logo"
      src="../assets/noteLogo.png"
    >
    <HelloWorld msg="Welcome to My Notes" />
    <!-- <Registerform /> -->
    <SignIn/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
//import RegisterForm from '@/components/RegisterForm.vue'
import SignIn from '@/components/SignIn.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
   // RegisterForm,
    SignIn
  }
}
</script>
<style scoped>
.home{
  padding: 100px;
  *background-color: red;
}
img{
  width:150px;
  height:150px;
}
.logo{
  text-align: center;
}

</style>
