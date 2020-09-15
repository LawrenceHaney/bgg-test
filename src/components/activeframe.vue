<template>
  <div id="spell-detials">
    <div class="card bg-secondary">
      <h1 class="text-bold">{{ spell.name }}</h1>
      <h4 class="text-italic"> {{spell.desc[0] + spell.desc[1]}}</h4>
      <button type="button" class="btn btn-primary" @click="addspell"> add spell</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "spell-details",
  computed:{
    spell(){
      return this.$store.state.focused
    },
    
  },
  methods: {
    addspell(){
      this.$store.dispatch("addsand")
    }
  }
}
</script>

<style>

</style>