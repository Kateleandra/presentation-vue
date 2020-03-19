<template>
  <div class="titleHeader">
    <img class="imgHeader" src="@/assets/img/kate.png">
    <h1>{{titleHeader}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    titleHeader: {
      type: String,
      default: () => ""
    },
  }
}
</script>

<style lang="scss">

.titleHeader{
  h1{
    color: rgb(134, 131, 131);
  }
}
.imgHeader{
  max-width: 30%;
}
</style>
