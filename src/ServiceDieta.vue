<template lang="html">
  <div class="">
    <div class="container-fluid py-3">
      <div class="row">
        <div class="col-6 text-right">
          <pre>
            {{$data}}
          </pre>
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
        tipoDeDieta:[{nombre:'Blanda'},{nombre:'Hiposodica'},{nombre:'Corriente'},{nombre:'Hiperproteica'}],
        // dietas:[]
      }
    },
    methods:{

    },
    created() {
      this.$http.post('/api', this.tipoDeDieta, {
       emulateJSON: true
    })
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
