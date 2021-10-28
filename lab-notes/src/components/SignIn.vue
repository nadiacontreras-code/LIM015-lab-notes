<template>
  <div>
    <h2>{{login}}</h2>
  <form class="loginform" id="login">
      <p class="errorMsg"></p>
      <section class="inputGroup">
        <p class="errorMsg"></p>
        <label for="loginEmail">Correo Electrónico</label><br/>
        <input type="email" id="loginEmail" class="inputLogin" autofocus><br/><br/>
        <label for="loginPassword">Contraseña</label><br/>
        <input type="password" id="loginPassword" class="inputLogin" autofocus><br/><br/>
      </section>
      <button @click="getInfo" id="loginFormBtn" type="button">Iniciar Sesión</button>
      <section class="loginGoogle">
          <p class="loginText"> O bien ingresa con...</p>
          <p class="loginGoogleImg"><img  src= "img/googleIcono.png" alt="Iniciar sesion Google"/></p>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  name:'SingIn',
  data(){
    return{
      login:`Registrate`
    }
  },
  methods:{
    getInfo(){
      this.login = 'Bienvenido'
    }
  }

}
</script>

<style scoped>
*{
  font-family:Georgia, 'Times New Roman', Times, serif;
}
h2{
font-size:30px;
*background-color: skyblue;
}
#login{
  *background-color:red;
  justify-content: center;
}
.inputGroup{
  *background-color:gray;
  justify-content: center;
}
label{
  *background-color:green;
  justify-content: right;

}
input{
  background-color:rgb(193, 231, 247);
   justify-content:center;
   border-radius: 10px;
   border:2px solid rgb(84, 201, 247);
   width:100%;
   height: 22px;
}
button{
  border-radius: 50px;
  border: 3px solid rgb(58, 188, 240);
  background-color:skyblue;
  
  
}
</style>