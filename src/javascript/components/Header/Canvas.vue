<template>
  <div  >
    <div  v-show="appear" @click="closeCanvas" class="overlay" ></div>
    <div  class="p-4 d-flex flex-column" :class="appear ? 'open' : 'close'"   id="canvas" >
      <div class="w-100 d-flex justify-end px-3 py-1">
        <i @click="closeCanvas" class="bi bi-x-lg fs-3 pointer blue_hover"></i>
      </div>
      <div class="d-flex align-center">
        <img src="../../../assets/title_logo.png" alt="" width="40">
        <h1 class="ml-5 fw-4 fs-3">MultiCoin</h1>
      </div>
      <div>
        <p class="text-muted fs-09">
          The next-generation blog, news, and magazine theme for you to start your experience in Blockchain world!
        </p>
      </div>
      <div class="mt-4">
        <ul class="d-flex flex-column m-0 p-0">
          <li class="mb-3 p-2 blue_hover pointer"><a  href="#">Home</a></li>
          <li class="mb-3 p-2 blue_hover pointer"><a  href="#">About</a></li>
          <li class="mb-3 p-2 blue_hover pointer"><a  href="#">Our Journal</a></li>
          <li class="mb-3 p-2 blue_hover pointer"><a  href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="mt-2 bg-primary-op2 p-2 d-f flex-column w-100 premium ">
        <h5 class="text-muted text-center">MultiCoin</h5>
        <h1 class="text-center fw-4 fs-3">Save on Premium Membership!</h1>
        <p class="text-center fs-09 text-muted">
          Get the insights report trusted by experts around the globe. Become a Member Today!
        </p>
        <div class="d-flex justify-center my-6 w-100">
          <a href="#" class="btn bg-warning border-dark w-60 ">View pricing plans</a>
        </div>
      </div>
      <div class="my-3">
        <h4 class="text-muted fw-6">Germany, Berlin(HQ)</h4>
        <h5 class="text-muted fw-4">Lorem ipsum dolor sit amet, consectetur.</h5>
        <h5 class="text-muted fw-4">Call: 123-456-7890</h5>
        <h5 class="text-muted fw-4">hoomanmousavi77@gmail.com</h5>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../style/components/Canvas.scss';


export default {
  props:['appear'],
  data(){
    return{

    }
  },
  methods:{
    closeCanvas(){
      this.$props.appear=false
      this.$emit('close',false)
    }
  },
  name: "Canvas"
}
</script>

<style scoped>

</style>