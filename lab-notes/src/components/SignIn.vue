<template>
  <div>
    <!-- <h2>{{login}}</h2> -->
  <form  @submit.prevent="login( this.email, this.password )">
      <p class="errorMsg"></p>
      <section class="inputGroup">
        <p class="errorMsg"></p>
        <label>Correo Electrónico:</label><br/>
        <input type="email" required v-model="email"><br/><br/>
        <label>Contraseña:</label><br/>
        <input type="password" required v-model="password"><br/><br/>
      </section>
      <button type="submit">Iniciar Sesión</button>
      </form>
      <section class="loginGoogle">
          <p class="loginText"> O bien ingresa con...</p>
          <p class="loginGoogleImg"><img  src= "../assets/logoGoogle.png" alt="Iniciar sesion Google"/></p>
      <p> No tienes cuenta?
        <a href="?#/register">registrate</a>
      </p>
      </section>
    
    <p>Email {{email}} </p>
     <p>password {{password}} </p>
  </div>
</template>

<script>
import { 
  signOut, signInWithEmailAndPassword } from "firebase/auth";
  import {auth} from '../Config'

export default {
  name:'SingIn',
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
    login(email, password) {
      signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('¡Sesión iniciada!');
                // Signed in
                const user = userCredential.user;
                this.$router.push('/myNotes');
                // ...
                })
            .catch((error) => {
            const errorCode = error.code;
            this.errorMessage = error.message;
            alert(this.errorMessage);
            });
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
/* form{
  text-align: left;
  padding:4px;
  width:100%;
} */
#login{
  *background-color:red;
  justify-content: center;
}
.inputGroup{
  *background-color:gray;
  *justify-content: center;
  text-align: left;
  padding:4px;
  width:100%;
}
label{
  *background-color:green;
  justify-content: right;
  display: inline-block;
  font-weight: bold;

}
input{
  display:block;
  padding:10px 10px;
  box-sizing: border-box;
  *border-bottom: 1px solid white;
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
  text-align: center;
  display: inline-block;
  justify-content: center;

}
</style>