<template>
  <div class="registerForm">
    <h1>{{ saludo }}</h1>
    <form class="registerForm" id="registerAccount">
    <h1>¡Registrate!</h1><br>
    <p class="text">Los campos obligatorios se marcan con un (*).</p>
    <section class="secForm">
      <p class="errorMsg"></p>
      <section class="inputGroupRegister">
        <p class="errorMsg"></p>
        <label for="Name" >Nombre(s)*</label>
        <input type="text" id="Name" class="formRegister" autofocus>
        <p class="errorMsg"></p>
        <label for ="lastname" >Apellidos*</label>
        <input type="text" id="lastname" class="formRegister"  autofocus >
        <p class="errorMsg"></p>
        <label for='registerEmail'>Correo Electrónico *</label>
        <input type="email" id="registerEmail" class="formRegister"  autofocus >
        <p class="errorMsg"></p>
        <label for ="password"> Contraseña *</label>
        <input type="password" id="password" class="formRegister" minlength="6"  autofocus
        placeholder="Contraseña">
      </section>
      <button id="FormBtn" type="submit">Registrarse</button>
      <p class="textCount">Ya tienes cuenta?
        <a class="loginLink" href="#/" id="linkLogin"> Inicia Sesión</a>
      </p>
    </section>
  </form>`;
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data(){
    return{
      saludo:'Registrate'      
    }
  }

}
</script>

<style>

</style>