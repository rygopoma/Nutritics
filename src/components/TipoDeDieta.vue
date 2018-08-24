<template lang="html">
  <div class="p-5">
    <div class="container-fluid py-3">
      <div class="row">
        <div class="col-6">
          <h1>Lista de dietas</h1>
          <button v-on:click.prevent="solicitudDeDieta" type="button" name="button" class="btn btn-info">Solicitud de datos</button>
          <ul class="list-group">
            <li v-for="item in dietas" class="list-group-item">
              {{item.name}}
            </li>
          </ul>
        </div>
        <div class="col-6">
          <button  v-on:click.prevent="envioDeDieta"  type="button" name="button" class="btn btn-danger">Envio de datos</button>

          {{tipoDeDieta}}

        </div>
      </div>
      <pre>
      </pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        tipoDeDieta:{name:'Blanda'},
        dietas:[]
      }
    },
    methods:{
      solicitudDeDieta(){
        this.$http.get('http://localhost:3000/dietas')
        .then(function(response){
          console.log(response);

          this.dietas=response.body
        });
      },
      envioDeDieta(){
        console.log(this.tipoDeDieta);

        this.$http.post('http://localhost:3000/dietas',this.tipoDeDieta, {
         emulateJSON: false
       });

     },
     hola(){
       alert("hola");
     }

    },
    created() {
      // this.$http.get('https://nutriticss.firebaseapp.com/#/tipoDeDieta')
      // .then(function(response){
      //   this.dietas=response
      // });
        // .then(res => console.log(res));
    }
  }
</script>

<style lang="css">

</style>
