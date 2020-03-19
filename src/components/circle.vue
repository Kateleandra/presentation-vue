<template>
  <div class="circle-skill">
    <p>{{skill}}</p>
  </div>
</template>

<script>
export default {
  name: 'CircleSkill',
  components: {
  },
  props: {
    skill:{
      type: String,
      default: () => ""
    }
  }
}
</script>

<style lang="scss">
.circle-skill{
  border: 5px solid;
  border-color: #DAA520 #DAA520 #808080 ;
  margin-right: 51px;
  min-width: 100px;
  min-height: 100px;
  border-radius: 50px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
