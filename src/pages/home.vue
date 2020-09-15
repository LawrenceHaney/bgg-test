<template>
  <section class="bg-seconday fluid-container">
    <div class="row">
      <div class="col-4">
    <spell v-for="(spell,index) in spells" :key="spell.id" :index="index" :spellData="spell" />
      </div>
      <div class="col-4">
        <activespell />
      </div>
      <div class="col-4">
        <sand v-for="(sand,index) in sandbox" :key="sandbox.id" :index="index" ::spellData="sandbox" />
      </div>
    </div>
  </section>
</template>

<script>
import spell from "../components/spell.vue"
import activespell from "../components/activeframe.vue"
import sand from "../components/sand.vue"
export default {
  name: "home",
components: {
  spell,
  activespell,
  sand
},

mounted(){
this.$store.dispatch("getspells")
this.$store.dispatch("getsand")
},
computed:{
  spells(){
    return this.$store.state.result
  },
  sandbox(){
    return this.$store.state.sand
  }
}

}
</script>

<style>
section{
  flex-grow: 1;
}

</style>