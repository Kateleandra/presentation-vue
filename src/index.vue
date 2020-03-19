<template>
  <div>
   <p>teste</p>
   <section class="card">
     <Card />
       <div v-for="occupation in occupations" :key="occupation.id" class="professional">
      {{occupation.title}}
       </div>
   </section>
  </div>
</template>

<script>
import Card from "./components/card"
import { getOccupations } from "./services/getProfessional/index";

export default {
  name: 'Index',
  components: {
    Card
  },
   data: function() {
    return {
      occupations: [],
      }
    },

  mounted(){

   getOccupations()
    .then(response =>{
      const occupations = response
      const teste  = occupations.map(i=>{
        return i
      })
      this.occupations = teste;
      console.log("teste api", this.occupations)      
    })
  }, 
}
</script>

<style>

</style>
