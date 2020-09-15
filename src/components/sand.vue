<template>
  <div class="sand">
  <div class="card bg-warning" @click="setactive">
    <h1> {{ spellData.name }} </h1>
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

<style>

</style>