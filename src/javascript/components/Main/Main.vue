<template>
  <section id="main" class="mt-12">
    <div class="container gap-2">
     <Highlight/>
     <Sidebar/>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="section_divider mb-5"></div>
    </div>
  </section>
</template>

<script>
import Highlight from "./Highlight.vue";
import Sidebar from "../Sidebar/Sidebar.vue";
import '../../../style/components/Main.scss'

export default {
  name: "Main",
  components:{Highlight,Sidebar}
}
</script>
