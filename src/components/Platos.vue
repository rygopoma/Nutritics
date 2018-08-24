<template lang="html" >
  <div class="container-fluid py-5"
style="background:#1c2a1b;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height:100%;">

    <div class="row py-5">
      <div class="col-md-12 text-white text-center">
        <h1>Platos <span class="fa fa-cutlery"></span></h1>
        <!-- <hr class="bg-success"> -->
      </div>
      <!-- <img src="../assets/FrutasFondo.jpg" alt=""> -->
      <div class="col-md-6 mb-2">
        <div class="row divRygo py-3">
          <div class="col-6  text-left">
            <h5 class="btn btn-info " v-on:click="agregarNuevo"><span class="fa fa-plus-square"></span> Nuevo plato</h5>
          </div>
          <div class="col-6 text-right">
            <button class="btn btn-danger" v-on:click="" type="button" name="button"> PDF <span class="fa fa-download"></span></button>
          </div>
          <div class="col-sm-12 col-xs-12">
            <div class="group">
              <input v-model="modelPlato.nombre"  v-on:keyup.enter="crearPlatoNombre" id="nombre" type="text" name="nombre" class="form-control" placeholder="Nombre del plato" value="">
              <label for="nombre">Nombre del plato</label>
            </div>
          </div>

          <div class="col-md-12">
            <div class="row"  id="detallePlato" style="display:none">
              <div class="col-sm-6 col-xs-12">
                <div class="group">
                  <select v-model="modelPlato.tipoDeDieta"  v-on:keyup.enter="editarPlato" v-on:click="editarPlato" name="tipoDieta" class="form-control">
                    <option value="Hidrica" selected>Hidrica</option>
                    <option value="Liquida">Liquida</option>
                    <option value="Blanda">Blanda</option>
                    <option value="Hipo Sodica">Hipo Sodica</option>
                    <option value="Corriente">Corriente</option>
                    <option value="Diabetico">Diabetico</option>
                    <option value="Hiperproteica">Hiperproteica</option>
                  </select>
                  <label>Tipo Dieta</label>
                </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                <div class="group">
                  <select v-model="modelPlato.tipoDePlato" v-on:keyup.enter="editarPlato" v-on:click="editarPlato" name="" class="form-control">
                    <option value="Desayuno" selected>Desayuno</option>
                    <option value="Almuerzo">Almuerzo</option>
                    <option value="Cena">Cena</option>
                  </select>
                  <label>Tipo de Plato</label>
                </div>
              </div>
              <div class="col-sm-12 col-xs-12" id="btnAgregarAlimentos">
                <button v-on:click="mostrarDetalleAlimentos" class="btn btn-success" type="button" name="button">Agregar alimentos</button>
              </div>
              <!-- <div class="col-sm-12 col-xs-12">
              <div class="group">
              <input  id="imagen" type="file" name="imagen" class="form-control" >
              <label for="imagen">Imagen </label>
            </div>
          </div> -->
          <hr>
          <div class="col-sm-12 col-xs-12 r-nutricion2 text-center" style="display:none" id="detalleAlimentos">
            <h3>Detalle de alimentos</h3>
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                <div class="group">
                  <select v-model="modelAlimentoPlato.idAlimento" name="pidalimento"  class=" form-control" id="ptAlimento" data-live-search="true">
                    <option
                    v-for="alimento in alimentos"
                    :value="(alimento['.key'])">{{alimento.Nombre}}</option>
                  </select>
                  <label>Alimento</label>

                </div>
              </div>

              <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                <div class="group">
                  <input v-model="modelAlimentoPlato.cantidad" v-on:keyup.enter="crearAlimentoPlato" type="number" name="acantidad" id="acantidad" class="form-control" placeholder="Cantidad por porcion en Gramos">
                  <!-- <label for="cantidad">Cantidad por porcion en Gramos</label> -->
                </div>
              </div>

              <div class="col-12">
                <div class="form-group">
                  <button v-on:click="crearAlimentoPlato" type="button" id="bt_add" class="btn btn-success">Agregar</button>
                </div>
              </div>

              <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 responsive">
                <table id="detalles" class="table table-responsive table-sm table-hover table-bordered">
                  <thead style="background-color:#5bd676" class="">
                    <th>Opc.</th>
                    <th>Alimento</th>
                    <th>Cant. [g]</th>
                    <th>Kcal [g]</th>
                    <th>Prot [g]</th>
                    <th>Grasa [g]</th>
                    <th>CHO [g]</th>
                    <th>Fibra [g]</th>
                    <th>Ca [mg]</th>
                    <th>P [mg]</th>
                    <th>Fe [mg]</th>
                    <th>Vit. A [ug]</th>
                    <th>Vit. C [mg]</th>
                  </thead>
                  <tfoot class="table-success">
                  <!-- <tfoot style="background-color:#0a300a; color:white"> -->
                    <th colspan="2"><h5 style="margin:0px"><strong>Total Val. Nutricional</strong></h5></th>
                    <th><h4 style="margin:0px" id="cantTotal">{{this.modelPlato.totalCantidad}}</h4></th>
                    <th><h4 style="margin:0px" id="kcalTotal">{{this.modelPlato.totalEnergia}}</h4></th>
                    <th><h4 style="margin:0px" id="protTotal">{{this.modelPlato.totalProteina}}</h4></th>
                    <th><h4 style="margin:0px" id="grasaTotal">{{this.modelPlato.totalGrasa}}</h4></th>
                    <th><h4 style="margin:0px" id="choTotal">{{this.modelPlato.totalCarbohidrato}}</h4></th>
                    <th><h4 style="margin:0px" id="fibraTotal">{{this.modelPlato.totalFibra}}</h4></th>
                    <th><h4 style="margin:0px" id="caTotal">{{this.modelPlato.totalCalcio}}</h4></th>
                    <th><h4 style="margin:0px" id="pTotal">{{this.modelPlato.totalFosforo}}</h4></th>
                    <th><h4 style="margin:0px" id="feTotal">{{this.modelPlato.totalHierro}}</h4></th>
                    <th><h4 style="margin:0px" id="vitAtotal">{{this.modelPlato.totalVitaminaA}}</h4></th>
                    <th><h4 style="margin:0px" id="vitCtotal">{{this.modelPlato.totalVitaminaC}}</h4></th>
                  </tfoot>
                  <tbody class="table-light" v-for="item in listaAlimentosDelPlato(alimentoPlato)">
                    <td><button type="button" class="btn btn-danger border border-danger rounded-circle" v-on:click="eliminarAlimento(item)">X</button></td>
                    <td>{{item.nombre}}</td>
                    <td>{{item.cantidad}}</td>
                    <td>{{item.kcalCantidad}}</td>
                    <td>{{item.protCantidad}}</td>
                    <td>{{item.grasaCantidad}}</td>
                    <td>{{item.choCantidad}}</td>
                    <td>{{item.fibraCantidad}}</td>
                    <td>{{item.caCantidad}}</td>
                    <td>{{item.pCantidad}}</td>
                    <td>{{item.feCantidad}}</td>
                    <td>{{item.vitACantidad}}</td>
                    <td>{{item.vitCCantidad}}</td>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

      <div class="col-md-6 px-3">
        <div class="row divRygo py-3" >
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
            <div class="group">
              <input v-model="buscador"  type="text" name="" class="form-control" placeholder="Buscar por nombre" value="">
              <label for="">Buscar por nombre</label>
            </div>
          </div>

          <hr>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="table-responsive" >
              <div class=" panel-body body-panel" style="height:400px">
                <table class="table table-md table-hover" id="datos">
                  <thead class="bg-success">
                    <!-- <th>Id</th> -->
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Dieta</th>
                    <th>Tipo</th>
                    <th>Editar</th>
                    <th>Activo</th>
                  </thead>
                  <tr class="table-light" v-for="item in even(platos)">
                    <!-- <td>{{item['.key']}}</td> -->
                    <td>{{item.nombre}}</td>
                    <td>{{item.totalCantidad}}</td>
                    <td>{{item.tipoDeDieta}}</td>
                    <td>{{item.tipoDePlato}}</td>

                    <td>
                      <!-- <a href=""><button class="btn btn-info" type="button" name="button">Editar</button></a> -->
                      <!-- <button  v-on:click="" class="btn btn-success" type="button" name="button"><span class="fa fa-eye"></span></button> -->

                      <button  v-on:click="actualizarPlato(item)" class="btn btn-info" type="button" name="button"><span class="fa fa-edit"></span></button>
                      <!-- <button  v-on:click="eliminarPlato(item)" class="btn btn-danger" type="button" name="button"> <span class="fa fa-trash-o"> </span> </button> -->
                      <!-- <a href="#" data-target="#modal-delete-{{$alim->idalimento}}" data-toggle="modal"><button class="btn btn-danger" type="button" name="button">Eliminar</button></a> -->
                    </td>

                    <td>
                      <label class="custom-control custom-checkbox">
                        <input type="checkbox" v-on:click="activoPlato(item)" class="custom-control-input">
                        <span class="custom-control-indicator"></span>
                      </label>
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
</template>

<script>
import toastr from 'toastr'

import {
  alimentosRef
} from '../conexion';
import {
  alimentoPlatoRef
} from '../conexion';
import {
  platoRef
} from '../conexion';
import {
  tipoDeDietaRef
} from '../conexion';

export default {
  name: 'Platos',
  firebase: {
    alimentos: alimentosRef,
    alimentoPlato: alimentoPlatoRef,
    platos: platoRef,
    tipoDeDietas: tipoDeDietaRef
  },
  data() {
    return {

      buscador: '',
      modelPlato: {
        id: '',
        nombre: '',
        activo: false,
        tipoDeDieta: '',
        tipoDePlato: '',
        totalCantidad: 0,
        totalEnergia: 0,
        totalProteina: 0,
        totalGrasa: 0,
        totalCarbohidrato: 0,
        totalFibra: 0,
        totalCalcio: 0,
        totalFosforo: 0,
        totalHierro: 0,
        totalVitaminaA: 0,
        totalVitaminaC: 0
      },
      modelAlimentoPlato: {
        id: '',
        idPlato: '',
        idAlimento: '',
        cantidad: '',
        nombre: '',
        kcalCantidad: 0,
        protCantidad: 0,
        grasaCantidad: 0,
        choCantidad: 0,
        fibraCantidad: 0,
        caCantidad: 0,
        pCantidad: 0,
        feCantidad: 0,
        vitACantidad: 0,
        vitCCantidad: 0
      }

    }
  },
  methods: {
    crearPlatoNombre() {
      var platoExiste = false;
      for (var i = 0; i < this.platos.length; i++) {
        if (this.platos[i].nombre.toUpperCase() == this.modelPlato.nombre.toUpperCase()) {
          platoExiste = true;
        }
      }
      if (!platoExiste) {
        platoRef.push(this.modelPlato);

        document.getElementById('detallePlato').style.display = '';
        toastr.success('Llene los datos de ' + this.modelPlato.nombre + '')

        document.getElementById('nombre').disabled = true;
      } else {
        toastr.error('Nombre "' + this.modelPlato.nombre + '" de plato ya existe!')
        this.modelPlato.nombre = "";
      }
    },
    editarPlato() {
      var credencialesCorrectos = false;
      for (var i = 0; i < this.platos.length; i++) {
        if (this.platos[i].nombre == this.modelPlato.nombre) {
          this.modelPlato.id = this.platos[i]['.key'];

          credencialesCorrectos = true;

          platoRef.child(this.modelPlato.id).update({
            tipoDeDieta: this.modelPlato.tipoDeDieta,
            tipoDePlato: this.modelPlato.tipoDePlato
          });

        }
      }
      if (credencialesCorrectos == false) {
        toastr.error('No existe Plato.', 'Error!');

      }
    },
    crearAlimentoPlato() {
      this.modelAlimentoPlato.idPlato = this.modelPlato.id;
      if (this.modelAlimentoPlato.idAlimento != '' && this.modelAlimentoPlato.cantidad != '') {
        for (var i = 0; i < this.alimentos.length; i++) {

          if (this.alimentos[i]['.key'] == this.modelAlimentoPlato.idAlimento) {
            this.modelAlimentoPlato.nombre = this.alimentos[i].Nombre;
            this.modelAlimentoPlato.kcalCantidad = ((this.alimentos[i].Energia / this.alimentos[i].Cantidad) * this.modelAlimentoPlato.cantidad).toFixed(2);
            this.modelAlimentoPlato.protCantidad = ((this.alimentos[i].Proteina / this.alimentos[i].Cantidad) * this.modelAlimentoPlato.cantidad).toFixed(2);
            this.modelAlimentoPlato.grasaCantidad = ((this.alimentos[i].Grasa / this.alimentos[i].Cantidad) * this.modelAlimentoPlato.cantidad).toFixed(2);
            this.modelAlimentoPlato.choCantidad = ((this.alimentos[i].Carbohidrato / this.alimentos[i].Cantidad) * this.modelAlimentoPlato.cantidad).toFixed(2);
            this.modelAlimentoPlato.fibraCantidad = ((this.alimentos[i].Fibra / this.alimentos[i].Cantidad) * this.modelAlimentoPlato.cantidad).toFixed(2);
            this.modelAlimentoPlato.caCantidad = ((this.alimentos[i].Calcio / this.alimentos[i].Cantidad) * this.modelAlimentoPlato.cantidad).toFixed(2);
            this.modelAlimentoPlato.pCantidad = ((this.alimentos[i].Fosforo / this.alimentos[i].Cantidad) * this.modelAlimentoPlato.cantidad).toFixed(2);
            this.modelAlimentoPlato.feCantidad = ((this.alimentos[i].Hierro / this.alimentos[i].Cantidad) * this.modelAlimentoPlato.cantidad).toFixed(2);
            this.modelAlimentoPlato.vitACantidad = ((this.alimentos[i].VitaminaA / this.alimentos[i].Cantidad) * this.modelAlimentoPlato.cantidad).toFixed(2);
            this.modelAlimentoPlato.vitCCantidad = ((this.alimentos[i].VitaminaC / this.alimentos[i].Cantidad) * this.modelAlimentoPlato.cantidad).toFixed(2);

            this.modelPlato.totalCantidad = (parseFloat(this.modelPlato.totalCantidad) + parseFloat(this.modelAlimentoPlato.cantidad)).toFixed(2);
            this.modelPlato.totalEnergia = (parseFloat(this.modelPlato.totalEnergia) + parseFloat(this.modelAlimentoPlato.kcalCantidad)).toFixed(2);
            this.modelPlato.totalProteina = (parseFloat(this.modelPlato.totalProteina) + parseFloat(this.modelAlimentoPlato.protCantidad)).toFixed(2);
            this.modelPlato.totalGrasa = (parseFloat(this.modelPlato.totalGrasa) + parseFloat(this.modelAlimentoPlato.grasaCantidad)).toFixed(2);
            this.modelPlato.totalCarbohidrato = (parseFloat(this.modelPlato.totalCarbohidrato) + parseFloat(this.modelAlimentoPlato.choCantidad)).toFixed(2);
            this.modelPlato.totalFibra = (parseFloat(this.modelPlato.totalFibra) + parseFloat(this.modelAlimentoPlato.fibraCantidad)).toFixed(2);
            this.modelPlato.totalCalcio = (parseFloat(this.modelPlato.totalCalcio) + parseFloat(this.modelAlimentoPlato.caCantidad)).toFixed(2);
            this.modelPlato.totalFosforo = (parseFloat(this.modelPlato.totalFosforo) + parseFloat(this.modelAlimentoPlato.pCantidad)).toFixed(2);
            this.modelPlato.totalHierro = (parseFloat(this.modelPlato.totalHierro) + parseFloat(this.modelAlimentoPlato.feCantidad)).toFixed(2);
            this.modelPlato.totalVitaminaA = (parseFloat(this.modelPlato.totalVitaminaA) + parseFloat(this.modelAlimentoPlato.vitACantidad)).toFixed(2);
            this.modelPlato.totalVitaminaC = (parseFloat(this.modelPlato.totalVitaminaC) + parseFloat(this.modelAlimentoPlato.vitCCantidad)).toFixed(2);

            platoRef.child(this.modelPlato.id).update({

              totalCantidad: this.modelPlato.totalCantidad,
              totalEnergia: this.modelPlato.totalEnergia,
              totalProteina: this.modelPlato.totalProteina,
              totalGrasa: this.modelPlato.totalGrasa,
              totalCarbohidrato: this.modelPlato.totalCarbohidrato,
              totalFibra: this.modelPlato.totalFibra,
              totalCalcio: this.modelPlato.totalCalcio,
              totalFosforo: this.modelPlato.totalFosforo,
              totalHierro: this.modelPlato.totalHierro,
              totalVitaminaA: this.modelPlato.totalVitaminaA,
              totalVitaminaC: this.modelPlato.totalVitaminaC
            });

          }
        }


        alimentoPlatoRef.push(this.modelAlimentoPlato);
        toastr.success('Alimento ' + this.modelAlimentoPlato.nombre + ' agregado con exito.')
        document.getElementById('ptAlimento').focus();
        // this.modelAlimentoPlato.idPlato;
        this.modelAlimentoPlato.idAlimento = '';
        this.modelAlimentoPlato.cantidad = '';
        this.modelAlimentoPlato.kcalCantidad = 0;
        this.modelAlimentoPlato.protCantidad = 0;
        this.modelAlimentoPlato.grasaCantidad = 0;
        this.modelAlimentoPlato.choCantidad = 0;
        this.modelAlimentoPlato.fibraCantidad = 0;
        this.modelAlimentoPlato.caCantidad = 0;
        this.modelAlimentoPlato.pCantidad = 0;
        this.modelAlimentoPlato.feCantidad = 0;
        this.modelAlimentoPlato.vitACantidad = 0;
        this.modelAlimentoPlato.vitCCantidad = 0;
      } else {
        toastr.warning('Por favor llene los campos de Alimento y Cantidad para agregar un alimento.', 'DATOS VACIOS')
      }
    },
    listaAlimentosDelPlato(alimentosPlato) {
      var idPlatito = this.modelPlato.id
      return alimentosPlato.filter((item) => {
        return item.idPlato.match(idPlatito);
      });
    },
    eliminarAlimento(item) {
      alimentoPlatoRef.child(item['.key']).remove();

      this.modelPlato.totalCantidad = (parseFloat(this.modelPlato.totalCantidad) - parseFloat(item.cantidad)).toFixed(2);
      this.modelPlato.totalEnergia = (parseFloat(this.modelPlato.totalEnergia) - parseFloat(item.kcalCantidad)).toFixed(2);
      this.modelPlato.totalProteina = (parseFloat(this.modelPlato.totalProteina) - parseFloat(item.protCantidad)).toFixed(2);
      this.modelPlato.totalGrasa = (parseFloat(this.modelPlato.totalGrasa) - parseFloat(item.grasaCantidad)).toFixed(2);
      this.modelPlato.totalCarbohidrato = (parseFloat(this.modelPlato.totalCarbohidrato) - parseFloat(item.choCantidad)).toFixed(2);
      this.modelPlato.totalFibra = (parseFloat(this.modelPlato.totalFibra) - parseFloat(item.fibraCantidad)).toFixed(2);
      this.modelPlato.totalCalcio = (parseFloat(this.modelPlato.totalCalcio) - parseFloat(item.caCantidad)).toFixed(2);
      this.modelPlato.totalFosforo = (parseFloat(this.modelPlato.totalFosforo) - parseFloat(item.pCantidad)).toFixed(2);
      this.modelPlato.totalHierro = (parseFloat(this.modelPlato.totalHierro) - parseFloat(item.feCantidad)).toFixed(2);
      this.modelPlato.totalVitaminaA = (parseFloat(this.modelPlato.totalVitaminaA) - parseFloat(item.vitACantidad)).toFixed(2);
      this.modelPlato.totalVitaminaC = (parseFloat(this.modelPlato.totalVitaminaC) - parseFloat(item.vitCCantidad)).toFixed(2);

      platoRef.child(this.modelPlato.id).update({

        totalCantidad: this.modelPlato.totalCantidad,
        totalEnergia: this.modelPlato.totalEnergia,
        totalProteina: this.modelPlato.totalProteina,
        totalGrasa: this.modelPlato.totalGrasa,
        totalCarbohidrato: this.modelPlato.totalCarbohidrato,
        totalFibra: this.modelPlato.totalFibra,
        totalCalcio: this.modelPlato.totalCalcio,
        totalFosforo: this.modelPlato.totalFosforo,
        totalHierro: this.modelPlato.totalHierro,
        totalVitaminaA: this.modelPlato.totalVitaminaA,
        totalVitaminaC: this.modelPlato.totalVitaminaC
      });
      toastr.error('Alimento ' + item.nombre, 'ELIMINADO')
    },
    agregarNuevo() {
      this.modelPlato.nombre = '';
      this.modelPlato.tipoDePlato = '';
      this.modelPlato.tipoDeDieta = '';

      document.getElementById('detallePlato').style.display = 'none';
      document.getElementById('detalleAlimentos').style.display = 'none';
      document.getElementById('btnAgregarAlimentos').style.display = '';

      document.getElementById('nombre').disabled = false;

    },
    even(platosR) {
      var nombus = this.buscador
      return platosR.filter((item) => {
        return item.nombre.toUpperCase().match(nombus.toUpperCase());
      });
    },
    actualizarPlato(item) {
      for (var i = 0; i < this.platos.length; i++) {
        if (this.platos[i]['.key'] == item['.key']) {

          this.modelPlato.id = this.platos[i]['.key'];
          this.modelPlato.nombre = this.platos[i].nombre;
          this.modelPlato.tipoDeDieta = this.platos[i].tipoDeDieta;
          this.modelPlato.tipoDePlato = this.platos[i].tipoDePlato;
          this.modelPlato.nombre = this.platos[i].nombre;
          this.modelPlato.totalCantidad = this.platos[i].totalCantidad;
          this.modelPlato.totalEnergia = this.platos[i].totalEnergia;
          this.modelPlato.totalProteina = this.platos[i].totalProteina;
          this.modelPlato.totalGrasa = this.platos[i].totalGrasa;
          this.modelPlato.totalCarbohidrato = this.platos[i].totalCarbohidrato;
          this.modelPlato.totalFibra = this.platos[i].totalFibra;
          this.modelPlato.totalCalcio = this.platos[i].totalCalcio;
          this.modelPlato.totalFosforo = this.platos[i].totalFosforo;
          this.modelPlato.totalHierro = this.platos[i].totalHierro;
          this.modelPlato.totalVitaminaA = this.platos[i].totalVitaminaA;
          this.modelPlato.totalVitaminaC = this.platos[i].totalVitaminaC;
          document.getElementById('detallePlato').style.display = '';
          document.getElementById('detalleAlimentos').style.display = '';
          document.getElementById('nombre').disabled = true;
          //  document.getElementById('cantidad').focus();
        }
      }
    },
    eliminarPlato(item) {
      platoRef.child(item['.key']).remove();
      this.modelPlato.id = '';
      this.modelPlato.nombre = '';
      this.modelPlato.tipoDeDieta = '';
      this.modelPlato.tipoDePlato = '';
      this.modelPlato.totalCantidad = '';
      this.modelPlato.totalEnergia = '';
      this.modelPlato.totalProteina = '';
      this.modelPlato.totalGrasa = '';
      this.modelPlato.totalCarbohidrato = '';
      this.modelPlato.totalFibra = '';
      this.modelPlato.totalCalcio = '';
      this.modelPlato.totalFosforo = '';
      this.modelPlato.totalHierro = '';
      this.modelPlato.totalVitaminaA = '';
      this.modelPlato.totalVitaminaC = '';

      for (var i = 0; i < this.alimentoPlato.length; i++) {
        console.log(this.alimentoPlato[i].idPlato + ' ' + this.alimentoPlato[i].nombre + ' ' + this.alimentoPlato[i].cantidad);
        if (this.alimentoPlato[i].idPlato == item['.key']) {
          alimentoPlatoRef.child(this.alimentoPlato[i]['.key']).remove();

        }
      }
      document.getElementById('detallePlato').style.display = 'none';
      document.getElementById('detalleAlimentos').style.display = 'none';
      document.getElementById('btnAgregarAlimentos').style.display = '';

      document.getElementById('nombre').disabled = false;
      toastr.error('Alimento ' + item.nombre, 'ELIMINADO')

    },
    mostrarDetalleAlimentos() {
      if (this.modelPlato.tipoDeDieta != '' && this.modelPlato.tipoDePlato) {
        document.getElementById('detalleAlimentos').style.display = '';
        document.getElementById('btnAgregarAlimentos').style.display = 'none';
      } else {
        toastr.warning('Por favor llene los campos de Tipo Dieta y Tipo Plato para agregar un alimento.', 'DATOS VACIOS')
      }
    },
    activoPlato() {}
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
