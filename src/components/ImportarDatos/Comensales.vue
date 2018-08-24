<template lang="html">
  <div class="container-fluid">

    <div class="row">
      <section class="row-section1">
        <div class="container-fluid px-4">
          <div class="row pt-5">
            <h2 class="text-center m-0"><span>Comensales</span></h2>
            <h3 class="text-center m-0"><span>[ DATOS <i class="fa fa-database"></i> ]</span></h3>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6 px-4">
              <div class="row">
                <div class="col-12 px-0">
                  <div class="row">

                    <div class="col-sm-12 col-md-12 text-left pt-3">
                      <button v-on:click="importarDatosComensales" class="btn btn-primary" type="button" name="button">Importar <span class="fa fa-download"></span></button>
                    </div>
                    <div class="col-sm-12 col-md-6">
                      <div class="group">
                        <input v-model="servidor" class="form-control" type="text" placeholder="Servidor" name="" value="">
                        <label for="">Servidor</label>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                      <div class="group">
                        <input v-model="modelComensalFecha.fecha" class="form-control" type="date" name="" value="">
                        <label for="">Fecha</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 row-block  body-panel">
                  <ul>
                    <li v-for="item in comensalesImportados">
                      <div class="media row text-center p-1 " style="background:#b2c7dd">
                        <div class="col-sm-12 col-md-2 media-left align-self-center">
                          <img class="rounded-circle" src="https://images.vexels.com/media/users/3/144170/isolated/preview/219840730d3ce3fd29bba2dfcb5914a1-car-cter-m-dico-mujer-by-vexels.png">
                        </div>
                        <div class="col-sm-12 col-md-10 media-body" >
                          <h4>{{item.nombres}}</h4>
                          <h4>{{item.apellidos}}</h4>
                          <hr class="m-1">
                            <p><strong>C.I.:</strong> {{item.ci}} </p>
                            <p><strong>Especialidad:</strong> {{item.especialidad}} </p>
                            <p><strong>Número de celular:</strong> {{item.numCelular}} </p>
                            <p><strong>Tipo de dieta:</strong> {{item.tipoDeDieta}} </p>
                        </div>
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
                      <button v-on:click="guardarComensales" class="btn btn-success" type="button" name="button">Guardar datos <span class="fa fa-floppy-o"></span></button>
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
                    <li v-for="item in buscadorComensal(comensales)" class="col-sm-12 col-md-6 px-4">
                      <div class="media row text-center p-1" style="background:#b2ddb8">

                        <div class="col-sm-12  media-body">
                          <h4>{{item.nombres}}</h4>
                          <h4>{{item.apellidos}}</h4>
                          <hr class="m-1">
                            <p><strong>C.I.:</strong> {{item.ci}} </p>
                            <p><strong>Especialidad:</strong> {{item.especialidad}} </p>
                            <p><strong>Número de celular:</strong> {{item.numCelular}} </p>
                            <p><strong>Tipo de dieta:</strong> {{item.tipoDeDieta}} </p>
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
                    <template  v-for="item2 in buscadorComensalFecha(comensalFecha)" >
                      <li class="col-sm-12 col-md-3 px-4">
                        <template v-for="item in comensales">
                          <template v-if="item['.key']==item2.idComensal">
                            <div class="media row text-center p-1" style="background:#dbe8e8" >
                              <div class="col-sm-12 col-md-12 media-body">
                                <h4>{{item.nombres}}</h4>
                                <h4>{{item.apellidos}}</h4>
                                <hr class="m-1">
                                <p class="text-danger" style="font-size:15px"><strong>{{item2.fecha}}</strong></p>
                                <hr class="m-1">

                                <p><strong>C.I.:</strong> {{item.ci}} </p>
                                <p><strong>especialidad:</strong> {{item.especialidad}} </p>
                                <p><strong>Número de celular:</strong> {{item.numCelular}} </p>
                                <p><strong>Tipo de dieta:</strong> {{item.tipoDeDieta}} </p>
                              </div>
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
      <section class="team-section py-5" style="display:none">
        <div class="container">
          <div class="row mb-5">
            <div class="head-box text-center mb-5 col-md-12">
              <h2>Historial</h2>
              <h6 class="text-underline-primary mb-5">Información de extracto y manipulación de datos.</h6>
            </div>
            <div class="col-md-4 mb-md-0 mb-sm-2">
              <div class="member-box anim-lf t-bottom">
                    <img class="img-fluid" src="https://scontent.fcbb1-1.fna.fbcdn.net/v/t1.0-9/12801117_480863978770488_1580368780866267585_n.jpg?_nc_cat=0&oh=78cbbfedaec2d0ee7bfd5aa7486e3da4&oe=5B788ABA" alt="">
                    <div class="overlay-content">
                      <h3 class="text-white ml-3 my-0">Lucio Poma</h3>
                      <p class="text-white ml-3 mb-3">Pai</p>
                      <span class="socail-l ml-3 mb-3">
                        <a href="tel:71222433" class="mr-2"><i class="fa fa-facebook box-circle-solid"></i></a>
                        <a href="tel://71222433" class="mr-2"><i class="fa fa-twitter box-circle-solid"></i></a>
                        <a href="callto://71222433"><i class="fa fa-dribbble box-circle-solid"></i></a>
                      </span>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-md-0 mb-sm-2">
              <div class="member-box anim-lf t-bottom">
                    <img class="img-fluid" src="https://scontent.fcbb1-1.fna.fbcdn.net/v/t1.0-9/11898851_968242719888910_7610428636887017520_n.jpg?_nc_cat=0&oh=6eb2ccf5f3d34b4e9588610cfdb933af&oe=5B77EAF4" alt="">
                    <div class="overlay-content">
                      <h3 class="text-white ml-3 my-0">Rodrigo Poma</h3>
                      <p class="text-white ml-3 mb-3">Yo</p>
                      <span class="socail-l ml-3 mb-3">
                        <a href="tel:60701387" class="mr-2"><i class="fa fa-facebook box-circle-solid"></i></a>
                        <a href="tel://60701387" class="mr-2"><i class="fa fa-twitter box-circle-solid"></i></a>
                        <a href="callto://60701387"><i class="fa fa-dribbble box-circle-solid"></i></a>
                      </span>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-md-0 mb-sm-2">
              <div class="member-box anim-lf t-bottom">
                    <img class="img-fluid" src="https://scontent.fcbb1-1.fna.fbcdn.net/v/t1.0-9/14322282_1066542680109387_6381867455725982217_n.jpg?_nc_cat=0&oh=02f7e246a5e148eade9469b164811183&oe=5B83B427" alt="">
                    <div class="overlay-content">
                      <h3 class="text-white ml-3 my-0">Erika Suxo</h3>
                      <p class="text-white ml-3 mb-3">Love</p>
                      <span class="socail-l ml-3 mb-3">
                        <a href="tel:77825579" class="mr-2"><i class="fa fa-facebook box-circle-solid"></i></a>
                        <a href="tel://77825579" class="mr-2"><i class="fa fa-twitter box-circle-solid"></i></a>
                        <a href="callto://77825579"><i class="fa fa-dribbble box-circle-solid"></i></a>
                      </span>
                    </div>
                </div>
            </div>

            <!-- <div class="col-md-2 mb-md-0 mb-sm-2">
              <div class="member-box anim-lf t-bottom">
                    <img class="img-fluid" src="https://grafreez.com/wp-content/temp_demos/suffi/img/t-member-03.jpg" alt="">
                    <div class="overlay-content text-center p-4">

                  <a href="#"><i class="fa fa-eye box-circle-solid"></i></a>
                      </span>
                    </div>
                </div>
            </div> -->
          </div>
        </div>
      </section>
    </div>
  </div>

</template>

<script>
import {
  comensalesRef
} from '../../conexion'
import {
  comensalFechaRef
} from '../../conexion'

import toastr from 'toastr';
export default {
  firebase: {
    comensales: comensalesRef.orderByChild('nombre'),
    comensalFecha: comensalFechaRef
  },
  data() {
    return {
      fechaHistorial: '',
      fechaHistorialFin: '',
      buscador: '',
      servidor: 'http://localhost:3000/comensales',
      comensalesImportados: [],
      modelComensal: {
        nombres: '',
        apellidos: '',
        ci: '',
        tipoDeDieta: '',
        especialidad: '',
        numCelular: ''
      },
      modelComensalFecha: {
        idComensal: '',
        fecha: ''
      }
    }
  },
  methods: {
    importarDatosComensales() {
      if (this.servidor != '') {
        this.$http.get(this.servidor)
          .then(function(response) {
            console.log(response);
            this.comensalesImportados = response.body
            toastr.success('Datos importados con exito!');
          });
      } else {
        toastr.error('Por favor llene el campo de servidor');
      }
    },
    guardarComensalFecha() {
      var cImportados = this.comensalesImportados;
      var ciComensal;
      for (var comensal in cImportados) {
        ciComensal = cImportados[comensal].ci;
        for (var i = 0; i < this.comensales.length; i++) {
          if (this.comensales[i].ci == ciComensal) {
            this.modelComensalFecha.idComensal = this.comensales[i]['.key'];
            comensalFechaRef.push(this.modelComensalFecha);
          }
        }
      }
    },
    guardarComensales() {
      var mComensal = this.modelComensal;
      var cImportados = this.comensalesImportados;
      if (this.modelComensalFecha.fecha != '') {
        for (var comensal in cImportados) {
          mComensal.nombres = cImportados[comensal].nombres;
          mComensal.apellidos = cImportados[comensal].apellidos;
          mComensal.ci = cImportados[comensal].ci;
          mComensal.tipoDeDieta = cImportados[comensal].tipoDeDieta;
          mComensal.especialidad = cImportados[comensal].especialidad;
          mComensal.numCelular = cImportados[comensal].numCelular;
          var comensalExiste = false;
          for (var i = 0; i < this.comensales.length; i++) {
            if (this.comensales[i].ci == mComensal.ci) {
              comensalExiste = true;
            }
          }
          if (!comensalExiste) {
            comensalesRef.push(mComensal);
          }
        }
        this.guardarComensalFecha();
        toastr.success('Datos guardados con exito!');
      } else {
        toastr.error('Por favor ingrese la fecha de registro.');
      }
    },
    buscadorComensal(comensalR) {
      var ciComensal = this.buscador
      return comensalR.filter((item) => {
        return item.ci.match(ciComensal) || item.nombres.toUpperCase().match(ciComensal.toUpperCase()) || item.apellidos.toUpperCase().match(ciComensal.toUpperCase());
      });
    },
    buscadorComensalFecha(comensalFechaR) {
      var fechaHistorial = this.fechaHistorial
      var fechaHistorialFin = this.fechaHistorialFin
      return comensalFechaR.filter((item) => {
        return (item.fecha >= fechaHistorial && item.fecha <= fechaHistorialFin) || item.fecha == fechaHistorial;

      });
    }

  }

}
</script>

<style lang="css">
.row-section1 {float:left; width:100%; background: #2d6b2b;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #05200a, #05200a);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #031206, #1b822e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.row-section1 h3{float:left; width:100%; color:#fff; margin-bottom:10px; font-size: 12px;}
.row-section1 h3 span{font-family: 'Libre Baskerville', serif; display:block; font-size:25px; text-transform:none; margin-bottom:20px; margin-top:0px;font-weight:700;}
.row-section1 h2{float:left; width:100%; color:#fff; margin-bottom:30px; font-size: 14px;}
.row-section1 h2 span{font-family: 'Libre Baskerville', serif; display:block; font-size:45px; text-transform:none; margin-bottom:20px; margin-top:30px;font-weight:700;}
.row-section1 h2 a{color:#16bf43;}
.row-section1 .row-block{background:#fff; padding:20px; margin-bottom:50px;}
.row-section1 .row-block ul{margin:0; padding:0;}
.row-section1 .row-block ul li{list-style:none; margin-bottom:20px;}
.row-section1 .row-block ul li:last-child{margin-bottom:0;}
.row-section1 .row-block ul li:hover{cursor:grabbing;}
.row-section1 .row-block .media{border:1px solid #d5dbdd; padding:5px 20px; border-radius: 5px; box-shadow:0px 2px 1px rgba(0,0,0,0.04); background:#fff;}
.row-section1 .media .media-left img{width:75px;}
.row-section1 .media .media-body p{padding: 0 15px; margin:0px; font-size:14px;}
.row-section1 .media .media-body h4 {color: #6b456a; font-size: 18px; font-weight: 600; margin-bottom: 0; padding-left: 14px; margin-top:12px;}
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
