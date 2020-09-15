<template>
  <div class="spell">
    <div class="card m-1 bg-light" @click="setactive">
      <h3>{{spellData.name}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["spellData", "index"],
  data(){
    return{}
  },
  methods: {
    setactive(){
      this.$store.dispatch("setactivespell", this.spellData)
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
