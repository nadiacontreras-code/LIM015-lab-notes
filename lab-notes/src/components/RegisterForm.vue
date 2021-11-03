<template>
  <div class="registerForm">
      <form  class="registerForm"  @submit.prevent="register( this.email, this.password )" >
      <p class="text">
        Los campos obligatorios se marcan con un (*).
      </p>
      <section class="secForm">
        <p class="errorMsg" ></p>
        <section class="inputGroupRegister">
          <p class="errorMsg"></p>
          <label >Nombre(s)*</label>
          <input type="text" required  v-model="nombres">
          <p class="errorMsg"></p>
          <label >Apellidos*</label>
          <input  type="text" required v-model="apellidos">
          <p class="errorMsg" />
          <label>Correo Electrónico *</label>
          <input type="email"  required v-model="email"  >
          <p class="errorMsg" />
          <label> Contraseña *</label>
          <input type="password" minlength="6" required v-model="password">
        </section>
        <button  type="submit" >Registrarse</button>
        <p class="textCount">
          Ya tienes cuenta?
          <a  href="?/" > Inicia Sesión</a>
        </p>
      </section>
    </form>`;
  </div>
</template>

<script>
import { 
 createUserWithEmailAndPassword } from "firebase/auth";
  import {auth} from '../Config'
export default {
  name: 'RegisterForm',
  data(){
    return{
      nombres:'',
      apellidos: '',
      email: '',
      password: '',
    }
  },
  methods: {
    register(email,password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alert('¡Ya estas registrado!')
    this.$router.push('/');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
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
.inputGroupRegister{
  *background-color:gray;
  *justify-content: center;
  text-align: left;
  padding:4px;
  width:100%;
}
label{
  *background-color:green;
  *justify-content: right;
   text-align: left;
   padding-left:10px ;
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
  border: 3px solid rgb(11, 114, 155);
  background-color:skyblue;
  text-align: center;
  display: inline-block;
  justify-content: center;
  margin-top: 10px;
  width: 30%;
  font-size: 20px;

}
</style>