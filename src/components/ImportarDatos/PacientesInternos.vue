
<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <section class="row-section3">
        <div class="container-fluid px-4">
          <div class="row pt-5">
            <h2 class="text-center m-0"><span>Pacientes Internos</span></h2>
            <h3 class="text-center m-0"><span>[ DATOS <i class="fa fa-database"></i> ]</span></h3>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6 px-4">
              <div class="row">
                <div class="col-12 px-0">
                  <div class="row">

                    <div class="col-sm-12 col-md-12 text-left pt-3">
                      <button v-on:click="importarDatosPacientes" class="btn btn-primary" type="button" name="button">Importar <span class="fa fa-download"></span></button>
                    </div>
                    <div class="col-sm-12 col-md-6">
                      <div class="group">
                        <input v-model="servidor" class="form-control" type="text" placeholder="Servidor" name="" value="">
                        <label for="">Servidor</label>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                      <div class="group">
                        <input v-model="modelPacienteFecha.fecha" class="form-control" type="date" name="" value="">
                        <label for="">Fecha</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 row-block  body-panel">
                  <ul>
                    <li v-for="item in pacientesImportados">
                      <div class="media row text-center p-1 " style="background:#b2c7dd">
                        <div class="col-sm-12 col-md-2 media-left align-self-center">
                          <img class="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5aydR32aX4Gm9UwuqhJWNtIzsNnouwmXd7EJyijWXTOPXRqs">
                        </div>
                        <div class="col-sm-12 col-md-10 media-body" >
                          <h4>{{item.nombres}} {{item.apellidos}}</h4>
                          <p><strong>C.I. :</strong> {{item.ci}} </p>
                          <p><strong>Tipo de dieta:</strong> {{item.tipoDeDieta}} </p>
                          <p><strong>Peso:</strong> {{item.peso}} (kg) | <strong>Estatura:</strong> {{item.estatura}} (m) | <strong>IMC:</strong> {{item.imc}} </p>
                          <p><strong>Número de cama:</strong> {{item.numCama}} </p>
                        </div>
                        <!-- <div class="col-sm-12 col-md-2 media-right align-self-center">
                          <button href="#" class="btn btn-default" v-on:click=""><span class="fa fa-chevron-circle-right"></span></button>
                        </div> -->
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 px-4">
              <div class="row">
                <div class="col-12 px-0">
                  <div class="row">
                    <div class="col-sm-12 col-md-12 text-right pt-3">
                      <button v-on:click="guardarPacientes" class="btn btn-success" type="button" name="button">Guardar datos <span class="fa fa-floppy-o"></span></button>
                    </div>
                    <div class="col-sm-12 col-md-12">
                      <div class="group">
                        <input v-model="buscador" class="form-control" type="text" placeholder="Buscar por C.I." name="" value="">
                        <label for="">Buscar</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 row-block  body-panel">
                  <ul class="row">
                    <li v-for="item in buscadorPaciente(pacientes)" class="col-sm-12 col-md-6 px-4">
                      <div class="media row text-center p-1" style="background:#b2ddb8">

                        <div class="col-sm-12  media-body">
                          <h4>{{item.nombres}} {{item.apellidos}}</h4>
                          <hr class="m-1">
                          <p><strong>C.I. :</strong> {{item.ci}} </p>
                          <p><strong>Tipo de dieta:</strong> {{item.tipoDeDieta}} </p>
                          <p><strong>Peso:</strong> {{item.peso}} (kg) | <strong>Estatura:</strong> {{item.estatura}} (m) | <strong>IMC:</strong> {{item.imc}} </p>
                          <p><strong>Número de cama:</strong> {{item.numCama}} </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <h3 class="text-center m-0"><span>Historial de datos importados <i class="fa fa-database"></i></span></h3>
            <div class="col-sm-12 col-md-6">
              <div class="group">
                <input v-model="fechaHistorial" class="form-control" type="date" name="" value="">
                <label for="">Fecha</label>
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="group">
                <input v-model="fechaHistorialFin" class="form-control" type="date" name="" value="">
                <label for="">Fecha fin</label>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="table-responsive" >
                <div class=" row-block body-panel  px-2" style="height:400px">
                  <ul class="row">
                    <template  v-for="item2 in buscadorPacienteFecha(pacienteFecha)" >
                      <li class="col-sm-12 col-md-3 px-4">
                        <template v-for="item in pacientes">
                          <template v-if="item['.key']==item2.idPaciente">
                            <div class="media row text-center p-1" style="background:#dbe8e8" >
                              <div class="col-sm-12 col-md-12 media-body">
                                <h4>{{item.nombres}} {{item.apellidos}}</h4>
                                <hr class="m-1">
                                <p class="text-danger" style="font-size:15px"><strong>{{item2.fecha}}</strong></p>
                                <hr class="m-1">

                                <p><strong>C.I. :</strong> {{item.ci}} </p>
                                <p><strong>Tipo de dieta:</strong> {{item.tipoDeDieta}} </p>
                                <p><strong>Peso:</strong> {{item.peso}} (kg) | <strong>Estatura:</strong> {{item.estatura}} (m) | <strong>IMC:</strong> {{item.imc}} </p>
                                <p><strong>Número de cama:</strong> {{item.numCama}} </p>
                              </div>
                              <!-- <div class="col-sm-12 col-md-2 media-right align-self-center">
                                <button href="#" class="btn btn-default" v-on:click=""><span class="fa fa-chevron-circle-right"></span></button>
                              </div> -->
                            </div>
                          </template>
                        </template>
                      </li>
                    </template>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {
  pacientesRef
} from '../../conexion'
import {
  pacienteFechaRef
} from '../../conexion'

import toastr from 'toastr';
export default {
  firebase: {
    pacientes: pacientesRef.orderByChild('nombre'),
    pacienteFecha: pacienteFechaRef
  },
  data() {
    return {
      fechaHistorial: '',
      fechaHistorialFin: '',
      buscador: '',
      servidor: 'http://localhost:3000/pacientes',
      pacientesImportados: [],
      pacientesFe: [],
      modelPaciente: {
        nombres: '',
        apellidos: '',
        ci: '',
        tipoDeDieta: '',
        peso: '',
        estatura: '',
        imc: '',
        numCama: ''
      },
      modelPacienteFecha: {
        idPaciente: '',
        fecha: ''
      }
    }
  },
  methods: {
    importarDatosPacientes() {
      if (this.servidor != '') {
        this.$http.get(this.servidor)
          .then(function(response) {
            console.log(response);
            this.pacientesImportados = response.body
            toastr.success('Datos importados con exito!');
          });
      } else {
        toastr.error('Por favor llene el campo de servidor');
      }
    },
    guardarPacienteFecha() {
      var pImportados = this.pacientesImportados;
      var ciPaciente;
      for (var paciente in pImportados) {
        ciPaciente = pImportados[paciente].ci;
        for (var i = 0; i < this.pacientes.length; i++) {
          if (this.pacientes[i].ci == ciPaciente) {
            this.modelPacienteFecha.idPaciente = this.pacientes[i]['.key'];
            console.log(this.modelPacienteFecha.idPaciente);
            pacienteFechaRef.push(this.modelPacienteFecha);
          }
        }

      }
      for (var item in this.pacientesFe) {
        console.log(this.pacientesFe[item]);
      }
    },
    guardarPacientes() {
      var mPaciente = this.modelPaciente;
      var pImportados = this.pacientesImportados;
      if (this.modelPacienteFecha.fecha != '') {
        for (var paciente in pImportados) {
          mPaciente.nombres = pImportados[paciente].nombres;
          mPaciente.apellidos = pImportados[paciente].apellidos;
          mPaciente.ci = pImportados[paciente].ci;
          mPaciente.tipoDeDieta = pImportados[paciente].tipoDeDieta;
          mPaciente.peso = pImportados[paciente].peso;
          mPaciente.estatura = pImportados[paciente].estatura;
          mPaciente.imc = pImportados[paciente].imc;
          mPaciente.numCama = pImportados[paciente].numCama;
          var pacienteExiste = false;
          for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].ci == mPaciente.ci) {
              pacienteExiste = true;
            }
          }
          if (!pacienteExiste) {
            pacientesRef.push(mPaciente);
          }
        }
        this.guardarPacienteFecha();
        toastr.success('Datos guardados/n con exito!');
      } else {
        toastr.error('Por favor ingrese la fecha de registro.');
      }
    },
    buscadorPaciente(pacientesR) {
      var ciPaciente = this.buscador
      return pacientesR.filter((item) => {
        return item.ci.match(ciPaciente) || item.nombres.toUpperCase().match(ciPaciente.toUpperCase()) || item.apellidos.toUpperCase().match(ciPaciente.toUpperCase());
      });
    },
    buscadorPacienteFecha(pacienteFechaR) {
      var fechaHistorial = this.fechaHistorial
      var fechaHistorialFin = this.fechaHistorialFin
      return pacienteFechaR.filter((item) => {
        return (item.fecha >= fechaHistorial && item.fecha <= fechaHistorialFin) || item.fecha == fechaHistorial;

      });
    }
  }
}
</script>

<style lang="css">
  .row-section3 {float:left; width:100%; background: #2d6b2b;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #05200a, #05200a);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #031206, #82561d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .row-section3 h3{float:left; width:100%; color:#fff; margin-bottom:10px; font-size: 12px;}
  .row-section3 h3 span{font-family: 'Libre Baskerville', serif; display:block; font-size:25px; text-transform:none; margin-bottom:20px; margin-top:0px;font-weight:700;}
  .row-section3 h2{float:left; width:100%; color:#fff; margin-bottom:30px; font-size: 14px;}
  .row-section3 h2 span{font-family: 'Libre Baskerville', serif; display:block; font-size:45px; text-transform:none; margin-bottom:20px; margin-top:30px;font-weight:700;}
  .row-section3 h2 a{color:#16bf43;}
  .row-section3 .row-block{background:#fff; padding:20px; margin-bottom:20px;}
  .row-section3 .row-block ul{margin:0; padding:0;}
  .row-section3 .row-block ul li{list-style:none; margin-bottom:20px;}
  .row-section3 .row-block ul li:last-child{margin-bottom:0;}
  .row-section3 .row-block ul li:hover{cursor:grabbing;}
  .row-section3 .row-block .media{border:1px solid #d5dbdd; padding:5px 20px; border-radius: 5px; box-shadow:0px 2px 1px rgba(0,0,0,0.04); background:#fff;}
  .row-section3 .media .media-left img{width:75px;}
  .row-section3 .media .media-body p{padding: 0px;  margin:0px; font-size:14px;}
  .row-section3 .media .media-body h4 {color: #6b456a; font-size: 18px; font-weight: 600; margin-bottom: 0; padding-left: 14px; margin-top:12px;}
  .btn-default{background:#0c5219; color:#fff; border-radius:30px; border:none; font-size:16px;}

  .panel .slidedown .glyphicon, .chat .glyphicon
  {
      margin-right: 5px;
  }
  /*agrupamiento*/
  .group input {
    margin:15px 0;
  }
  .group label {
    font-size:11px;
  }

  .group {
    position:relative;
  }

  .group input + label {
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
</style>
