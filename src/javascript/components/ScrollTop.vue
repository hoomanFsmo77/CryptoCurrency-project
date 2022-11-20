<template>
  <Transition name="fade">
    <div v-if="show" class="scrollTop m-7 p-5 bg-primary-op2  align-center pointer bg-blue-hover" @click="scrollTop"  >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
      </svg>
    </div>
  </Transition>

</template>

<script>
export default {
  name: "ScrollTop",
  data(){
    return{
      show:false
    }
  },
  methods:{
    scrollTop(){
      window.scrollTo(0,0)
    }
  },
  mounted() {
    window.addEventListener('scroll',()=>{
      this.show = window.scrollY > 800;
    })
  }
}
</script>

<style scoped>
.scrollTop{
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 50%;
}
.fade-enter-active,.fade-leave-active{
  transition: all 400ms;
}
.fade-enter-from,.fade-leave-to{
  opacity: 0;
}
.fade-enter-to,.fade-leave-from{
  opacity: 1;
}
</style>