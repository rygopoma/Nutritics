<template lang="html">
  <div class=""     style="background:#1c2a1b;">
    <div class="container-fluid py-5"
    style="background:#1c2a1b;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;">

      <div class="row py-5">
          <div class="col-md-12 text-white text-center">
            <h1>Aliment<span class="fa fa-apple" style="font-size:30px"></span>s</h1>
            <!-- <hr class="bg"> -->
          </div>
          <!-- <section class="info-section p-0">
          	<div class="container">

          		<div class="three-panel-block mt-5">
          			<div class="row">
          				<div class="col-lg-5 col-md-6 col-sm-6">
          					<div class="service-block-overlay text-center mb-5 p-lg-3">
          						<i class="fa fa-laptop box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
          						<h3>Responsive Design</h3>
          						<p class="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
          					</div>
          				</div>
          				<div class="col-lg-7 col-md-6 col-sm-6">
          					<div class="service-block-overlay text-center mb-5 p-lg-3">
          						<i class="fa fa-calendar box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
          						<h3>Integrated Calendar</h3>
          						<p class="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
          					</div>
          				</div>
          			</div>
          		</div>
          	</div>
          </section> -->
          <form v-on:submit.prevent="" class=" col-md-5 pr-3">
                <div class="row divRygo py-3">

                <div class="col-6  text-left">
                  <h5 class="btn btn-info " v-on:click="agregarNuevo"><span class="fa fa-plus-square"></span> Nuevo Alimento</h5>
                </div>
                <div class="col-6 text-right">
                  <button class="btn btn-danger" v-on:click="exportPdf" type="button" name="button"> PDF <span class="fa fa-download"></span></button>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="group" v-on:dblclick="actualizarNombre">

                    <input v-model="nuevoAlimento.Nombre"  v-on:keyup.enter="agregarNombre" id="nombre" type="text" name="nombre" class="form-control" placeholder="Nombre del alimento..." value="">
                    <label for="nombre">Nombre del alimento</label>
                  </div>
                </div>
                <div class="col-md-12">
                <div class="row r-nutricion" id="valNut" style="display:none">
                  <div class="col-md-12 text-center ">
                    <h3 class="">Valor Nutricional</h3>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="group">
                      <input v-model="nuevoAlimento.Cantidad" v-on:keyup="editarAlimento" id="cantidad" type="number" name="cantidad" class="form-control" placeholder="Cantidad en Gramos..." value="">
                      <label for="cantidad">Cantidad en Gramos</label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div class="group">
                      <input v-model="nuevoAlimento.Energia" v-on:keyup="editarAlimento" type="number" name="energiaKcal" class="form-control" placeholder="Energia Kcal." value="">
                      <label for="energiaKcal">Energia Kcal.</label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div class="group">
                      <input v-model="nuevoAlimento.Proteina" v-on:keyup="editarAlimento" type="number" name="proteina" class="form-control" placeholder="Proteina" value="">
                      <label for="proteina">Proteina</label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div class="group">
                      <input v-model="nuevoAlimento.Grasa" v-on:keyup="editarAlimento" type="number" name="grasa" class="form-control" placeholder="Grasa" value="">
                      <label for="grasa">Grasa</label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div class="group">
                      <input v-model="nuevoAlimento.Carbohidrato" v-on:keyup="editarAlimento" type="number" name="carbohidrato" class="form-control" placeholder="Carbohidrato" value="">
                      <label for="carbohidrato">Carbohidrato</label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div class="group">
                      <input v-model="nuevoAlimento.Fibra" v-on:keyup="editarAlimento" type="number" name="fibra" class="form-control" placeholder="Fibra" value="">
                      <label for="fibra">Fibra</label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div class="group">
                      <input v-model="nuevoAlimento.Calcio" v-on:keyup="editarAlimento" type="number" name="calcio" class="form-control" placeholder="Calcio" value="">
                      <label for="calcio">Calcio</label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div class="group">
                      <input v-model="nuevoAlimento.Fosforo" v-on:keyup="editarAlimento" type="number" name="fosforo" class="form-control" placeholder="Fosforo" value="">
                      <label for="fosforo">Fosforo</label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div class="group">
                      <input v-model="nuevoAlimento.Hierro" v-on:keyup="editarAlimento" type="number" name="hierro" class="form-control" placeholder="Hierro" value="">
                      <label for="hierro">Hierro</label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div class="group">
                      <input v-model="nuevoAlimento.VitaminaA" v-on:keyup="editarAlimento" type="number" name="vitaminaA" class="form-control" placeholder="Vitamina A" value="">
                      <label for="vitaminaA">Vitamina [A] </label>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div class="group">
                      <input v-model="nuevoAlimento.VitaminaC" v-on:keyup="editarAlimento" type="number" name="vitaminaC" class="form-control" placeholder="Vitamina C" value="">
                      <label for="vitaminaC">Vitamina [C]</label>
                    </div>
                  </div>

                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group text-center" style="display:none">
                    <!-- <a href="{{url('almacen/alimento')}}" class="btn btn-success">Volver</a> -->
                    <button class="btn btn-danger" type="reset" >Cancelar</button>
                    <button id="#" class="btn btn-primary" type="submit" >Guardar</button>
                  </div>
                </div>
            </div>
          </div>
          <hr>
          </form>
          <div class="col-md-7">
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
                      <table class="table table-md" id="datos">
                        <thead class="bg-success">
                          <!-- <th>Id</th> -->
                          <th>Nombre</th>
                          <th>Cantidad</th>
                          <th>Energia Kcal</th>
                          <th>Proteina</th>
                          <th>Grasa</th>
                          <th>Opciones</th>
                        </thead>
                          <tr class="table-success" v-for="item in even(alimentos)">
                            <!-- <td>{{item['.key']}}</td> -->
                            <td>{{item.Nombre}}</td>
                            <td>{{item.Cantidad}}</td>
                            <td>{{item.Energia}}</td>
                            <td>{{item.Proteina}}</td>
                            <td>{{item.Grasa}}</td>
                            <td>
                              <!-- <a href=""><button class="btn btn-info" type="button" name="button">Editar</button></a> -->
                              <!-- <button  v-on:click="verAlimento(item)" class="btn btn-success" type="button" name="button"><span class="fa fa-eye"></span></button> -->
                              <button  v-on:click="actualizarAlimento(item)" class="btn btn-info" type="button" name="button"><span class="fa fa-edit"></span></button>
                              <button  v-on:click="eliminarAlimento(item)" class="btn btn-danger" type="button" name="button"> <span class="fa fa-trash-o"> </span> </button>
                              <!-- <a href="#" data-target="#modal-delete-{{$alim->idalimento}}" data-toggle="modal"><button class="btn btn-danger" type="button" name="button">Eliminar</button></a> -->
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
    <!-- Aumento de input -->

  </div>

</template>

<script>
import toastr from 'toastr'
import {
  alimentosRef
} from '../conexion';
export default {
  name: 'Alimentos',

  firebase: {
    alimentos: alimentosRef
  },
  data() {
    return {
      buscador: '',
      nuevoAlimento: {
        Nombre: '',
        Cantidad: '',
        Energia: '',
        Proteina: '',
        Grasa: '',
        Carbohidrato: '',
        Fibra: '',
        Calcio: '',
        Fosforo: '',
        Hierro: '',
        VitaminaA: '',
        VitaminaC: ''
      }
    }
  },
  methods: {
    agregarNuevo() {
      this.nuevoAlimento.Nombre = '';
      this.nuevoAlimento.Cantidad = '';
      this.nuevoAlimento.Energia = '';
      this.nuevoAlimento.Proteina = '';
      this.nuevoAlimento.Grasa = '';
      this.nuevoAlimento.Carbohidrato = '';
      this.nuevoAlimento.Fibra = '';
      this.nuevoAlimento.Calcio = '';
      this.nuevoAlimento.Fosforo = '';
      this.nuevoAlimento.Hierro = '';
      this.nuevoAlimento.VitaminaA = '';
      this.nuevoAlimento.VitaminaC = '';

      document.getElementById('valNut').style.display = 'none';

      document.getElementById('nombre').disabled = false;

    },
    agregarAlimento() {
      var alimentoExiste = false;
      for (var i = 0; i < this.alimentos.length; i++) {
        var nomAlimento = this.alimentos[i].Nombre;
        alert(nomAlimento);
        if (nomAlimento.toUpperCase() === this.nuevoAlimento.Nombre.toUpperCase()) {
          alimentoExiste = true;
        }
      }
      if (!alimentoExiste) {
        alimentosRef.push(this.nuevoAlimento);
        this.nuevoAlimento.Nombre = '';
        this.nuevoAlimento.Cantidad = '';
        this.nuevoAlimento.Energia = '';
        this.nuevoAlimento.Proteina = '';
        this.nuevoAlimento.Grasa = '';
        this.nuevoAlimento.Carbohidrato = '';
        this.nuevoAlimento.Fibra = '';
        this.nuevoAlimento.Calcio = '';
        this.nuevoAlimento.Fosforo = '';
        this.nuevoAlimento.Hierro = '';
        this.nuevoAlimento.VitaminaA = '';
        this.nuevoAlimento.VitaminaC = '';
        toastr.success('Registro exitoso!')
      } else {
        toastr.error('Nombre de alimento ya existe!')
      }
    },
    agregarNombre() {
      var alimentoExiste = false;
      for (var i = 0; i < this.alimentos.length; i++) {
        if (this.alimentos[i].Nombre.toUpperCase() == this.nuevoAlimento.Nombre.toUpperCase()) {
          alimentoExiste = true;
        }
      }
      if (!alimentoExiste) {
        alimentosRef.push(this.nuevoAlimento);

        document.getElementById('valNut').style.display = '';
        toastr.success('Llene los datos de ' + this.nuevoAlimento.Nombre + '')

        document.getElementById('nombre').disabled = true;
      } else {
        toastr.error('Nombre "' + this.nuevoAlimento.Nombre + '" de alimento ya existe!')
        this.nuevoAlimento.Nombre = "";
      }

    },
    actualizarNombre() {
      document.getElementById('nombre').disabled = false;
    },
    editarAlimento() {
      var credencialesCorrectos = false;
      for (var i = 0; i < this.alimentos.length; i++) {
        if (this.alimentos[i].Nombre == this.nuevoAlimento.Nombre) {
          const idAlimento = this.alimentos[i]['.key'];

          credencialesCorrectos = true;

          alimentosRef.child(idAlimento).update({
            Cantidad: this.nuevoAlimento.Cantidad,
            Energia: this.nuevoAlimento.Energia,
            Proteina: this.nuevoAlimento.Proteina,
            Grasa: this.nuevoAlimento.Grasa,
            Carbohidrato: this.nuevoAlimento.Carbohidrato,
            Fibra: this.nuevoAlimento.Fibra,
            Calcio: this.nuevoAlimento.Calcio,
            Fosforo: this.nuevoAlimento.Fosforo,
            Hierro: this.nuevoAlimento.Hierro,
            VitaminaA: this.nuevoAlimento.VitaminaA,
            VitaminaC: this.nuevoAlimento.VitaminaC
          });
          // toastr.success('','Editando..',{timeOut: 0.001})

        }
      }
      if (credencialesCorrectos == false) {
        toastr.error('Credenciales incorrectos.', 'Error!');

      }
    },
    actualizarAlimento(item) {
      for (var i = 0; i < this.alimentos.length; i++) {
        if (this.alimentos[i]['.key'] == item['.key']) {

          this.nuevoAlimento.Nombre = this.alimentos[i].Nombre;
          this.nuevoAlimento.Cantidad = this.alimentos[i].Cantidad;
          this.nuevoAlimento.Energia = this.alimentos[i].Energia;
          this.nuevoAlimento.Proteina = this.alimentos[i].Proteina;
          this.nuevoAlimento.Grasa = this.alimentos[i].Grasa;
          this.nuevoAlimento.Carbohidrato = this.alimentos[i].Carbohidrato;
          this.nuevoAlimento.Fibra = this.alimentos[i].Fibra;
          this.nuevoAlimento.Calcio = this.alimentos[i].Calcio;
          this.nuevoAlimento.Fosforo = this.alimentos[i].Fosforo;
          this.nuevoAlimento.Hierro = this.alimentos[i].Hierro;
          this.nuevoAlimento.VitaminaA = this.alimentos[i].VitaminaA;
          this.nuevoAlimento.VitaminaC = this.alimentos[i].VitaminaC;
          document.getElementById('valNut').style.display = '';
          document.getElementById('nombre').disabled = true;
          document.getElementById('cantidad').focus();
        }
      }
    },
    eliminarAlimento(item) {
      alimentosRef.child(item['.key']).remove();

      this.nuevoAlimento.Nombre = '';
      this.nuevoAlimento.Cantidad = '';
      this.nuevoAlimento.Energia = '';
      this.nuevoAlimento.Proteina = '';
      this.nuevoAlimento.Grasa = '';
      this.nuevoAlimento.Carbohidrato = '';
      this.nuevoAlimento.Fibra = '';
      this.nuevoAlimento.Calcio = '';
      this.nuevoAlimento.Fosforo = '';
      this.nuevoAlimento.Hierro = '';
      this.nuevoAlimento.VitaminaA = '';
      this.nuevoAlimento.VitaminaC = '';

      document.getElementById('valNut').style.display = 'none';

      document.getElementById('nombre').disabled = false;

      toastr.error('Alimento ' + item.Nombre, 'ELIMINADO')

    },
    even(alimentosR) {
      var nombus = this.buscador
      return alimentosR.filter((item) => {
        return item.Nombre.toUpperCase().match(nombus.toUpperCase());
      });
    },
    exportPdf() {
      var vm = this
      var columns = [{
          title: "Nombre",
          dataKey: "Nombre"
        },
        {
          title: "Cantidad",
          dataKey: "Cantidad"
        }
      ];
      var doc = new jsPDF();
      doc.setFontSize(25);
      doc.text('Alimentos', 90, 12);
      //  doc.textAlign('Alimentos',{align:"center"},0,10);
      doc.autoTable(columns, vm.alimentos);
      doc.save('tableTodos.pdf');
    }
  }
}
</script>

<style lang="css">
/*empiezo de scroll*/



/*fin de scroll*/

/*  Magic Happens Here */
.group input:placeholder-shown + label {
  opacity:0;
  transform: translateY(5%);
  top:-23px;
  left: 0px;
}

/* Other CSS to make it look cool */

.group input {
  margin:15px 0;
}
.group label {
  font-size:17px;
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


.group input:focus {
  outline:0;
  border-color:#52a1eb;
}

.group input:focus + label {
  border-color:#52a1eb;
}

/*rygo css*/
.r-nutricion {
  color:#6d0890;
}
.r-nutricion h3{
  color:#8f1bb9;
  background: #d7e7d4;
  padding: 10px;
  margin-top: 10px;
}
.r-nutricion h3:after{content:" "; width:200px; height:3px; background:#b324e6; display:block; margin-top:5px; border-radius:3px; margin-left:auto;margin-right:auto}
</style>
