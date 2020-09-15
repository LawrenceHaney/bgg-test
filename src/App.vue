<template>
  <div id="app">
    <myheader />
    <home />
    <myfooter />
  </div>
</template>

<script>
import myheader from "./components/header.vue"
import myfooter from "./components/footer.vue"
import home from "./pages/home"


export default {
  name: 'App',
  components: {
    myheader,
    home,
    myfooter,

  }
}
</script>

<style>

</style>
