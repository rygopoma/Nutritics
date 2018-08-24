<template lang="html">
  <div class="container-fluid">

    <div class="row">
      <section class="row-section1">
        <div class="container-fluid px-4">
          <div class="row pt-5">
            <h2 class="text-center m-0"><span>Gestionar menús comensales</span></h2>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-4 px-4">
              <div class="row">
                <div class="col-12 px-0">
                  <div class="row">

                    <div class="col-sm-12 col-md-12">
                      <div class="group">
                        <input v-model="fechaActual" class="form-control" type="date" placeholder="Fecha" name="" value="">
                        <label for="">Fecha</label>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="col-12 row-block mb-2 body-panel" style="height:450px;  background:green">
                  <ul>
                    <template v-for="item2 in comensalFecha">
                      <template v-if="item2.fecha==fechaActual">

                        <li v-for="item in comensales">
                          <template v-if="item['.key']==item2.idComensal">
                          <div class="media row text-center p-1" style="background:#b2c7dd">

                            <div class="col-sm-12 col-md-10 p-0 media-body" >
                              <h4>{{item.nombres}} {{item.apellidos}}</h4>
                              <hr class="m-1">
                              <p><strong>C.I.:</strong> {{item.ci}} </p>
                              <p><strong>Tipo de dieta:</strong> {{item.tipoDeDieta}} </p>
                            </div>
                            <div class="col-sm-12 col-md-2 media-right align-self-center p-0">
                              <button v-on:click="asignarComensal(item)" class="btn btn-success btn-lg btn-block" style="" type="button" name="button"><span class="fa fa-arrow-circle-right"></span></button>
                            </div>
                          </div>
                        </template>

                        </li>
                      </template>
                    </template>
                  </ul>
                </div>

              </div>
            </div>
            <div class="col-sm-12 col-md-4 px-4">
              <div class="row">
                <div class="col-12 px-0">
                  <div class="row">

                    <div class="col-sm-12 col-md-12">
                      <div class="group">
                        <select class="form-control" v-model="modelComensalPlato.tipoDePlato">
                          <option value="Desayuno" selected>Desayuno</option>
                          <option value="Almuerzo">Almuerzo</option>
                          <option value="Cena">Cena</option>
                        </select>
                        <label>Tipo de plato</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 row-block m-0 body-panel p-0" style="height:95px;">
                  <template v-if="plato.nombre!=''">
                    <ul>
                      <li>
                        <div class="media row text-center m-1 p-0 " style="background:#b8d043">

                          <div class="col-sm-12 col-md-12 media-body" >
                            <h4>{{plato.nombre}}</h4>
                            <hr class="m-1">
                            <p><strong>Tipo de dieta:</strong> {{plato.tipoDeDieta}} </p>
                            <p><strong>Tipo de pato:</strong> {{plato.tipoDePlato}} </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </template>
                  <template v-else="">
                    <ul>
                      <li>
                        <div class="media row text-center m-1 p-0 " style="">
                          <h1 style="font-size:35px">Asigne un plato...</h1>
                        </div>
                      </li>
                    </ul>
                  </template>
                </div>
                <div class="col-12 row-block  body-panel" style="height:360px; background:green;">
                  <ul>
                    <li v-for="item in comensalPlato">
                      <template v-if="item.fecha==fechaActual&&item.tipoDePlato==modelComensalPlato.tipoDePlato&&item.idPlato==modelComensalPlato.idPlato">

                        <template v-for="item2 in comensales">
                          <template v-if="item2['.key']==item.idComensal">
                          <div class="media row text-center p-1 " style="background:#b2c7dd">

                              <div class="col-sm-12 col-md-10 media-body" >
                                <h4>{{item2.nombres}} {{item2.apellidos}}</h4>
                                <hr class="m-1">
                                  <p><strong>C.I.:</strong> {{item2.ci}} </p>
                                  <p><strong>Tipo de dieta:</strong> {{item2.tipoDeDieta}} </p>
                              </div>
                              <div class="col-sm-2 col-md-2 p-0 media-left align-self-center">
                                <button v-on:click="eliminarComensalPlato(item)"  class="btn btn-danger" type="button" name="button"><span class="fa fa-times"></span></button>
                              </div>
                            </div>

                          </template>
                        </template>
                      </template>


                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 px-4">
              <div class="row">
                <div class="col-12 px-0">
                  <div class="row">

                    <div class="col-sm-12 col-md-12">
                      <div class="group">
                        <input v-model="buscadorPlatos" class="form-control" type="text" placeholder="Buscar plato..." name="" value="">
                        <label for="">Buscar plato</label>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="col-12 row-block mb-2 body-panel" style="height:450px">
                  <ul>
                    <li v-for="item in buscadorPlato(platos) ">
                      <template v-if="item.tipoDePlato==modelComensalPlato.tipoDePlato">
                        <div class="media row text-center p-1" style="background:#b8d043">
                          <div class="col-sm-2 col-md-2 p-0 media-left align-self-center">
                            <button v-on:click="asignarPlato(item)" class="btn btn-success btn-lg btn-block" type="button" name="button"><span class="fa fa-arrow-circle-left"></span></button>
                          </div>
                          <div class="col-10  media-body p-0">
                            <h4>{{item.nombre}}</h4>
                            <hr class="m-1">
                            <p><strong>Tipo de dieta:</strong> {{item.tipoDeDieta}} </p>
                            <p><strong>Tipo de plato:</strong> {{item.tipoDePlato}} </p>
                          </div>
                        </div>
                      </template>


                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="">
            <h3 class="text-center m-0"><span>Historial de datos <i class="fa fa-database"></i></span></h3>
            <div class="col-sm-12 col-md-6">
              <div class="group">
                <input v-model="listaComensalPlato.fecha" class="form-control" type="date" name="" value="">
                <label for="">Fecha</label>
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="group">
                <select class="form-control" v-model="listaComensalPlato.tipoDePlato">
                  <option value="Desayuno" selected>Desayuno</option>
                  <option value="Almuerzo">Almuerzo</option>
                  <option value="Cena">Cena</option>
                </select>
                <label>Tipo de plato</label>
              </div>
            </div>
            <div class="col-6">
              <button v-on:click="listarAlimentos" class="btn btn-primary" type="button" name="button">Listar alimentos</button>
            </div>
            <div class="col-6 text-right">
              <button class="btn btn-danger" v-on:click="exportPdf" type="button" name="button"> PDF <span class="fa fa-download"></span></button>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 py-3">
              <div class="table-responsive" >
                <div class=" panel-body body-panel" style="height:400px">
                    <table class="table table-md" id="datos">
                      <thead class="bg-success">
                        <!-- <th>Id</th> -->
                        <th>Nombre</th>
                        <th>Cantidad</th>
                      </thead>
                      <template v-for="item in totalCantidadAlimentosLista">
                        <tr class="table-success">
                          <td>{{item.nombre}}</td>
                          <td>{{item.cantidad}}</td>
                        </tr>
                      </template>
                    </table>
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
  comensalesRef,
  comensalFechaRef,
  platoRef,
  alimentosRef,
  alimentoFechaRef,
  comensalPlatoRef,
  alimentoPlatoRef
} from '../../conexion'
import toastr from 'toastr';
export default {
  firebase: {
    comensales: comensalesRef.orderByChild('nombre'),
    comensalFecha: comensalFechaRef,
    platos: platoRef.orderByChild('tipoDeDieta'),
    alimentos: alimentosRef,
    alimentoFecha: alimentoFechaRef,
    comensalPlato: comensalPlatoRef,
    alimentoPlato: alimentoPlatoRef
  },
  data() {
    return {
      plato: {
        id: '',
        nombre: '',
        tipoDeDieta: '',
        tipoDePlato: ''
      },
      fechaActual: '',
      fechaActual2: '2018-06-01',
      buscadorPlatos: '',
      fechaHistorial: '',
      fechaHistorialFin: '',
      buscador: '',
      comensalPlato: [],
      totalAlimentosPlato: [],
      listaComensalPlato: {
        fecha: '',
        tipoDePlato: 'Desayuno'
      },
      modelComensalPlato: {
        idComensal: '',
        idPlato: '',
        fecha: '',
        tipoDePlato: 'Desayuno'
      },
      modelAlimentoTotalPlato: {
        nombre: '',
        cantidad: ''
      },
      totalCantidadAlimentosLista: []
    }
  },
  methods: {
    buscadorPlato(platosR) {
      var plato = this.buscadorPlatos
      return platosR.filter((item) => {
        return item.nombre.toUpperCase().match(plato.toUpperCase()) ||
          item.tipoDeDieta.toUpperCase().match(plato.toUpperCase());
      });
    },
    asignarComensal(item) {
      if (this.plato.nombre != '') {
        this.modelComensalPlato.idComensal = item['.key'];
        this.modelComensalPlato.fecha = this.fechaActual;
        comensalPlatoRef.push(this.modelComensalPlato);
      } else {
        toastr.error('Por favor asigne un plato');
      }
    },
    asignarPlato(item) {
      this.modelComensalPlato.idPlato = item['.key'];
      this.plato.nombre = item.nombre;
      this.plato.tipoDeDieta = item.tipoDeDieta;
      this.plato.tipoDePlato = item.tipoDePlato;
    },
    eliminarComensalPlato(item) {
      comensalPlatoRef.child(item['.key']).remove();
    },
    listarAlimentos() {
      this.totalCantidadAlimentosLista = [];
      this.totalAlimentosPlato = [];
      var arrayConteo = 0;
      for (var i = 0; i < this.comensalPlato.length; i++) {
        if (this.comensalPlato[i].fecha == this.listaComensalPlato.fecha &&
          this.comensalPlato[i].tipoDePlato == this.listaComensalPlato.tipoDePlato) {
          for (var e = 0; e < this.alimentoPlato.length; e++) {
            if (this.alimentoPlato[e].idPlato == this.comensalPlato[i].idPlato) {
              for (var a = 0; a < this.alimentos.length; a++) {
                if (this.alimentos[a]['.key'] == this.alimentoPlato[e].idAlimento) {
                  var totalCantidadAlimentos = 0;
                  this.totalAlimentosPlato.push(this.alimentos[a].Nombre);
                  var conteo = 0;
                  for (var x = 0; x < this.totalAlimentosPlato.length; x++) {
                    if (this.totalAlimentosPlato[x] == this.alimentos[a].Nombre) {
                      conteo++;
                    }
                  }
                  if (conteo <= 1) {
                    var alimentoTotalPlato = new Object();
                    alimentoTotalPlato.nombre = this.alimentos[a].Nombre;
                    for (var b = 0; b < this.comensalPlato.length; b++) {
                      if (this.comensalPlato[b].fecha == this.listaComensalPlato.fecha &&
                        this.comensalPlato[b].tipoDePlato == this.listaComensalPlato.tipoDePlato) {

                        for (var c = 0; c < this.alimentoPlato.length; c++) {
                          if (this.alimentoPlato[c].idPlato == this.comensalPlato[b].idPlato) {
                            for (var d = 0; d < this.alimentos.length; d++) {
                              if (this.alimentos[d]['.key'] == this.alimentoPlato[c].idAlimento) {
                                if (this.alimentos[a].Nombre == this.alimentos[d].Nombre) {
                                  totalCantidadAlimentos = totalCantidadAlimentos + parseFloat(this.alimentoPlato[c].cantidad);

                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    alimentoTotalPlato.cantidad = totalCantidadAlimentos;
                    this.totalCantidadAlimentosLista.push(alimentoTotalPlato);
                    arrayConteo++;
                  }
                }
              }
            }
          }
        }
      }
    },
    exportPdf() {
      var vm = this
      var columns = [{
          title: "Nombre",
          dataKey: "nombre"
        },
        {
          title: "Cantidad [g]",
          dataKey: "cantidad"
        }
      ];
      var doc = new jsPDF();
      doc.setFontSize(25);
      doc.text('Lista de ingredientes comensales (' + (this.listaComensalPlato.tipoDePlato).toLowerCase() + ')', 15, 12);
      //  doc.textAlign('Alimentos',{align:"center"},0,10);
      doc.autoTable(columns, vm.totalCantidadAlimentosLista);
      doc.save('Lista de ingredientes comensales ' + this.listaComensalPlato.tipoDePlato + ' ' + this.listaComensalPlato.fecha + '.pdf');
    }
  },
  created() {
    var f = new Date();
    // this.fechaActual = (f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
    if (f.getMonth() + 1 < 10 && f.getDate() < 10) {
      this.fechaActual = (f.getFullYear() + "-0" + (f.getMonth() + 1) + "-0" + f.getDate());

    } else {
      if (f.getMonth() + 1 < 10) {
        this.fechaActual = (f.getFullYear() + "-0" + (f.getMonth() + 1) + "-" + f.getDate());
      } else {
        if (f.getDate() < 10) {
          this.fechaActual = (f.getFullYear() + "-" + (f.getMonth() + 1) + "-0" + f.getDate());
        }
      }
    }
    this.fechaActual2 = this.fechaActual;
    this.listaComensalPlato.fecha = this.fechaActual;
  }
}
</script>

<style lang="css">
.row-section1 {float:left; width:100%; background: #2d6b2b;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #05200a, #05200a);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #020812, #4c638f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.row-section1 h3{float:left; width:100%; color:#fff; margin-bottom:10px; font-size: 12px;}
.row-section1 h3 span{font-family: 'Libre Baskerville', serif; display:block; font-size:25px; text-transform:none; margin-bottom:20px; margin-top:0px;font-weight:700;}
.row-section1 h2{float:left; width:100%; color:#fff; margin-bottom:30px; font-size: 14px;}
.row-section1 h2 span{font-family: 'Libre Baskerville', serif; display:block; font-size:45px; text-transform:none; margin-bottom:20px; margin-top:30px;font-weight:700;}
.row-section1 h2 a{color:#16bf43;}
.row-section1 .row-block{background:#fff; padding:5px 20px; margin-bottom:50px;}
.row-section1 .row-block ul{margin:0; padding:0;}
.row-section1 .row-block ul li{list-style:none; margin-bottom:5px;}
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
.group select {
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


</style>
