<template>
  <div>
    <header>
      <Header :titleHeader="titleHeader"></Header>
    </header>
   <section class="professional">
    <div v-for="occupation in occupations" :key="occupation.id">
      <Card :title="occupation.title">
      </Card>
    </div>
   </section>
  </div>
</template>

<script>
import Card from "./components/card"
import Header from "./components/header"
import { getOccupations } from "./services/getProfessional/index";

export default {
  name: 'Index',
  components: {
    Card,
    Header
  },
   data: function() {
    return {
      occupations: [],
      titleHeader: "Competências profissionais"
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
.professional{
    display: flex;
    flex-direction: column;
    max-width: 900px;
    height: 100px;
    width: 100%;
    margin: 2rem auto 0 auto;
}
</style>
