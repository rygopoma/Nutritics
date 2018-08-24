<template>
<div class="hello">
  <div class="">
    <section class="intro carousel slide bg-overlay-light h-auto" id="carouselExampleCaptions">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img class="d-block img-fluid" alt="First slide" src="../assets/FrutasFondo.jpg">
          <div class="carousel-caption ">
            <h1 class="display-5 text-white mb-2 mt-4">Bienvenido a</h1>
            <div class="col-12">

              <h1 class="display-2 text-success mb-2 mt-4">NUTRI<span class="display-2 text-white mb-2 mt-4">TICS</span></h1>
              <h2 style="display:none">TICS</h2>
            </div>
            <p class="text-white mb-3 px-5 lead">Sistema de procesos de atencion alimentaria </p>
            <p class="text-white mb-3 px-5 lead">"Hospital Dr. Benigno Sanchez" </p>
            <!-- <a href="#" class="btn btn-primary  px-4 py-2">Conectar</a>
            <a href="#" class="btn btn-danger  px-4 py-2">Desconectar</a> -->
            <!-- <a href="#" class="btn btn-primary btn-capsul px-4 py-2">Iniciar sesion</a> -->
            <br>
            <br>
            <p class="text-white mb-3 px-5 lead">By: Rodrigo Poma</p>

          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" alt="First slide" src="../assets/FrutasFondo.jpg">
          <div class="carousel-caption ">
            <h1 class="display-5 text-white mb-2 mt-4">Bienvenido a</h1>
            <h1 class="display-2 text-success mb-2 mt-4">NUTRI<span class="display-2 text-white mb-2 mt-4">TICS</span></h1>
            <p class="text-white mb-3 px-5 lead">Sistema de procesos de atencion alimentaria </p>
            <p class="text-white mb-3 px-5 lead">"Hospital Dr. Benigno Sanchez" </p>
            <!-- <a href="#" class="btn btn-primary btn-capsul px-4 py-2">Conectar</a> -->
            <br>
            <br>
            <p class="text-white mb-3 px-5 lead">By: Rodrigo Poma</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
    </section>
  </div>
  <!-- <div class="container">
      <div class="row">
        <div class="col-md-12 ">
          <br>
          <hr>
        </div>
      </div>
      <div class="row ">
        <div class="col-md-2">

        </div>
        <div class="col-md-8 m-0 jumbotron p-3 p-md-5 text-dark rounded bg-ligth">
          <div class="px-0">
            <h1 class="display-4 font-italic">Muy bienvenido a </h1>
            <h1><span class="	fa fa-child"></span></h1>
            <h1>- <span class="text-success fa fa-apple" style="font-size:45px"></span> NUTRITICS -</h1>
            <p class="lead my-3">Sistema de procesos de atencion alimentaria del "Hospital DBS"</p>
            <router-link to="/"><p class="lead mb-0"><a href="#" class="text-dark font-weight-bold">Rodrigo Poma</a></p></router-link>
          </div>
        </div>
      </div>
    </div> -->

</div>
</template>

<script>
import {
  auth,
  proveedor
} from '../conexion'
export default {
  name: 'HelloWorld',
  // data() {
  //   return {
  //     msg: 'Welcome to Your Vue.js App',
  //     autentificado: false,
  //     usuarioActivo: null
  //   }
  // },
  // methods: {
  //   conectar() {
  //     auth.signInWithPopup(proveedor).catch(function(error) {
  //       console.error('Error haciendo logIn: ', error);
  //
  //     });
  //
  //     auth.signInWithPopup(proveedor).then(function(result) {
  //       var token = result.credential.accessToken;
  //       var user = result.user;
  //     }).catch(function(error) {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       var email = error.email;
  //       var credential = error.credential;
  //     });
  //   },
  //   desconectar() {
  //     auth.signOut().catch(function(error) {
  //       console.error('Error haciendo logOut: ', error);
  //     });
  //   }
  // },
  // created() {
  //   auth.onAuthStateChanged(function(user) {
  //     if (user) {
  //       console.info('Conectado: ', user);
  //       this.autentificado = true;
  //       this.usuarioActivo = user;
  //     } else {
  //       console.warn('No conectado');
  //       this.autentificado = false;
  //       this.usuarioActivo = null;
  //     }
  //   });
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
