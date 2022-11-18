<template>
  <header>
    <TopNav />
    <Navbar />
  </header>
</template>

<script>
import TopNav from "./TopNav.vue";
import Navbar from "./Navbar.vue";
import {ref} from "vue";


export default {
  name: "Header",
  methods:{

  },
  setup(){



  },
  components:{
    TopNav,
    Navbar
  }
}
</script>

<style scoped>

</style>