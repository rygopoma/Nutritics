<template lang="html">
  <div class="container-fluid row py-5"
  style="background:#1c2a1b;
  no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;">
  <div class="col-3">

  </div>
  <div class="col-6">
    <div class="row py-5">
      <div class="col-md-12 text-white text-center">
        <h1>Usuarios <span class="fa fa-cutlery"></span></h1>
        <!-- <hr class="bg-success"> -->
      </div>
      <!-- <img src="../assets/FrutasFondo.jpg" alt=""> -->
      <div class="col-md-12 ">
        <div class="row divRygo pt-0">
          <div class="col-6  text-left">
            <h5 class="btn btn-info " v-on:click="agregarNuevo"><span class="fa fa-plus-square"></span> Nuevo Usuario</h5>
          </div>
          <div class="col-sm-12 col-xs-12">
            <div class="group">
              <input v-model="modelUsuario.email"  v-on:keyup.enter="crearUsuarioEmail" id="email" type="email" class="form-control" placeholder="E-mail">
              <label for="nombre">E-mail</label>
            </div>
          </div>

          <div class="col-md-12">
            <div class="row"  id="detalleUsuario" style="display:none">
              <div class="col-sm-6 col-xs-12">
                <div class="group">
                  <select v-model="modelUsuario.tipoDeUsuario"  v-on:keyup.enter="editarUsuario" v-on:click="editarUsuario" name="tipoDeUsuario" class="form-control">
                    <option value="Nutricionista" selected>Nutricionista</option>
                    <option value="Administrador">Administrador</option>
                  </select>
                  <label>Tipo de usuario</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 px-3 pt-0">
        <div class="row divRygo py-3 pt-0" >

          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
            <div class="group">
              <hr class="bg-success">
              <input v-model="buscador"  type="text" name="" class="form-control" placeholder="Buscar por e-mail" value="">
              <label>Buscar por e-mail</label>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="table-responsive" >
              <div class=" panel-body body-panel" style="height:400px; background:white">
                <table class="table table-md table-hover" id="datos">
                  <thead class="bg-success">
                    <th>E-mail</th>
                    <th>Tipo de usuario</th>
                    <th>Opciones</th>
                  </thead>
                  <tr class="table-light" v-for="item in listaUsuarios(usuarios)">
                    <td>{{item.email}}</td>
                    <td>{{item.tipoDeUsuario}}</td>
                    <td>
                      <button  v-on:click="" class="btn btn-info" type="button" name="button"><span class="fa fa-edit"></span></button>
                      <button  v-on:click="eliminarUsuario(item)" class="btn btn-danger" type="button" name="button"> <span class="fa fa-trash-o"> </span> </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="col-3">

  </div>

  </div>
</template>

<script>
import toastr from 'toastr'

import {
  usuariosRef
} from '../conexion';

export default {

  firebase: {
    usuarios: usuariosRef
  },
  data() {
    return {
      buscador: '',
      idUsuario: '',
      modelUsuario: {
        email: '',
        tipoDeUsuario: 'Nutricionista'
      }
    }
  },
  methods: {
    crearUsuarioEmail() {
      var emailExiste = false;
      for (var i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].email.toUpperCase() == this.modelUsuario.email.toUpperCase()) {
          emailExiste = true;
        }
      }
      if (!emailExiste) {
        usuariosRef.push(this.modelUsuario);

        document.getElementById('detalleUsuario').style.display = '';
        document.getElementById('email').disabled = true;
      } else {
        toastr.error('Email "' + this.modelUsuario.email + '" de usuario ya existe!')
        this.modelUsuario.email = "";
      }
    },
    editarUsuario() {
      var credencialesCorrectos = false;
      for (var i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].email == this.modelUsuario.email) {
          this.idUsuario = this.usuarios[i]['.key'];

          credencialesCorrectos = true;

          usuariosRef.child(this.idUsuario).update({
            tipoDeUsuario: this.modelUsuario.tipoDeUsuario
          });

        }
      }
      if (credencialesCorrectos == false) {
        toastr.error('No existe usuario.', 'Error!');

      }
    },
    agregarNuevo() {
      this.modelUsuario.email = '';
      this.modelUsuario.tipoDeUsuario = 'Nutricionista';

      document.getElementById('detalleUsuario').style.display = 'none';
      document.getElementById('email').disabled = false;

    },
    listaUsuarios(usuariosR) {
      var buscador = this.buscador
      return usuariosR.filter((item) => {
        return item.email.match(buscador);
      });
    },
    eliminarUsuario(item) {
      usuariosRef.child(item['.key']).remove();
      document.getElementById('detalleUsuario').style.display = 'none';
      document.getElementById('email').disabled = false;
    }
  }
}
</script>

<style lang="css">
.r-nutricion2 {
  color:#121a12;
}
.r-nutricion2 h3{
  color:#121a12;
  background: #d7e7d4;
  padding: 10px;
  margin-top: 10px;
}
.r-nutricion2 h3:after{content:" "; width:270px; height:3px; background:#121a12; display:block; margin-top:5px; border-radius:3px; margin-left:auto;margin-right:auto}

/*  Magic Happens Here */
.group input:placeholder-shown + label {
  opacity:0;
  transform: translateY(5%);
}
.group select:placeholder-shown + label {
  opacity:0;
  transform: translateY(5%);
}

/* Other CSS to make it look cool */

.group input {
  margin:15px 0;
}
.group select {
  margin:15px 0;
}
.group label {
  font-size:15px;
}

.group {
  position:relative;
}

.group input + label {
  border:1px solid #d4d0d2;
  position: absolute;
  top:-8px;
  left: 0px;
  transition: all 0.5s;
  opacity:10;
  background:white;
  /*border:1px ;
  border:2px solid;*/
  border-width: 0 2px 0 2px;
  padding:0 8px;
  transform: translate(15%,-60%);
  /*transform: translateY(calc(-60%));*/
}
.group select + label {
  border:1px solid #d4d0d2;
  position: absolute;
  top:0;
  left: 0px;
  transition: all 0.5s;
  opacity:10;
  background:white;
  /*border:1px ;
  border:2px solid;*/
  border-width: 0 2px 0 2px;
  padding:0 8px;
  transform: translate(15%,-60%);
  /*transform: translateY(calc(-60%));*/
}


.group input:focus {
  outline:0;
  border-color:#52a1eb;
}

.group input:focus + label {
  border-color:#52a1eb;
}
/*custom*/
.custom-checkbox {
min-height: 1rem;
padding-left: 0;
margin-right: 0;
cursor: pointer;
}
.custom-checkbox .custom-control-indicator {
  content: "";
  display: inline-block;
  position: relative;
  width: 40px;
  height: 10px;
  background-color: #818181;
  border-radius: 15px;
  margin-right: 10px;
  -webkit-transition: background .3s ease;
  transition: background .3s ease;
  vertical-align: middle;
  margin: 0 16px;
  box-shadow: none;
}
  .custom-checkbox .custom-control-indicator:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: #f1f1f1;
    border-radius: 21px;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);
    left: -2px;
    top: -4px;
    -webkit-transition: left .3s ease, background .3s ease, box-shadow .1s ease;
    transition: left .3s ease, background .3s ease, box-shadow .1s ease;
  }
.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {
  background-color: red;
  background-image: none;
  box-shadow: none !important;
}
  .custom-checkbox .custom-control-input:checked ~ .custom-control-indicator:after {
    background-color: red;
    left: 23px;
  }
.custom-checkbox .custom-control-input:focus ~ .custom-control-indicator {
  box-shadow: none !important;
}
</style>
