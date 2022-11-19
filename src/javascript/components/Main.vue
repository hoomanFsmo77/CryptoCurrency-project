<template>
  <section id="main" class="mt-12">
    <div class="container gap-2">
     <Highlight/>
     <Sidebar/>
    </div>
  </section>
</template>

<script>
import Highlight from "./Highlight.vue";
import Sidebar from "./Sidebar.vue";
import '../../style/components/Main.scss'

export default {
  name: "Main",
  components:{Highlight,Sidebar}
}
</script>
