<template>
  <div class="titleHeader">
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

<style>

.titleHeader{
  
}

</style>
