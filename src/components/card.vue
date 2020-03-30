<template>
  <div class="card">
    <div>
      <img class="imgCard" src="@/assets/img/Code-Optimization.png">
      <h3>{{title}}</h3>
    </div>
    <div>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {
  },
  props: {
    title: {
      type: String,
      default: () => ""
    },
    description: {
      type: String,
      default: () => ""
    },
  }
}
</script>

<style lang="scss">
.card {
  min-width: 150%;
  width: 100%;
  min-height: 200px;
  margin-top: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 0 2rem rgba(0,0,0,.3);
  background: #ffffff;
  div{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:flex-start;
    align-items: center;
    align-content: center;
  p{
    padding: 1rem;
  }
  }
  img{
    max-width: 80px;
  }
  h3{
    text-transform:capitalize;
  }
}
</style>
