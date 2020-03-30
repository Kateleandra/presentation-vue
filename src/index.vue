<template>
  <div class="body">
    <header>
      <Header :titleHeader="titleHeader"></Header>
    </header>
    <section class="about-me">
      <p>Formada em Análise e desenvolvimento de sistemas, atualmente sou desenvolvedora
        front end.
        Busco me aprimorar a cada dia no mercado de TI, com isso enho me apaixonado a cada dia com a usabilidade/ux/ui e sua importância no qual gosto de palestrar. Estou sempre a procura de oportunidades para aprender coisas novas e me atualizar.
        Participante ativa de comunidades de desenvolvimento de diversos temas, principalmente front end.
      </p>
    </section>
    <section class="professional">
     <h2>{{titlePrincipal}}</h2>
      <div v-for="occupation in occupations" :key="occupation.id">
        <Card :title="occupation.title" :description="occupation.description"></Card>
      </div>
    </section>
    <section class="skill">
      <CircleSkill :skill="skill" v-for="skill in skills" :key="skill.id" />
    </section>
  </div>
</template>

<script>
import Card from "./components/card"
import Header from "./components/header"
import CircleSkill from './components/circle'
import { getOccupations } from "./services/getProfessional/index";

export default {
  name: 'Index',
  components: {
    Card,
    Header,
    CircleSkill
  },
   data: function() {
    return {
      occupations: [],
      titleHeader: "Olá, Sou a Kate Leandra!",
      titlePrincipal: "Competências profissionais",
      skills: [
        "HTML",
        "CSS",
        "VUEjs",
        "REACTjs"
        ]
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

<style lang="scss">
.body{
  max-width: 1000px;
  width: 100%;
  height: 100px;
}
.professional{
  min-width: 100%;
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  margin: 2rem auto 0 auto;
    h2{
      color: rgb(134, 131, 131);
    }
}
.about-me{
  min-width: 100%;
  display: flex;
  justify-content: center;
  p{
    color: rgb(134, 131, 131);
    font-size: 1.2rem;
  }
}
.skill{
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  flex-wrap: wrap;
}

</style>
