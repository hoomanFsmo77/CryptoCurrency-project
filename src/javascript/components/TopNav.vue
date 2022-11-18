<template>
  <nav id="top_nav" class="d-block d-lg-none">
    <div class="container px-1 pb-1 d-flex justify-between align-center">
      <div class="left_side">
        <ul class="d-flex gap-2 m-0 p-0">
          <li class="p-3 relative "><span class="absolute top-0 left-0 w-100 "></span><a class="" href="#">About</a></li>
          <li class="p-3 relative"><span class="absolute top-0 left-0 w-100 "></span><a class="" href="#">Forum</a></li>
          <li class="p-3 relative"><span class="absolute top-0 left-0 w-100 "></span><a class="" href="#">Buy now!</a></li>
          <li class="p-3 relative"><span class="absolute top-0 left-0 w-100 "></span><a class="" href="#">Login/Join</a></li>
        </ul>
      </div>
      <div class="d-flex gap-4 align-center right_side">

        <div class="dark_switcher relative" @click="darkTrigger">
          <i  @click.stop="darkTrigger"   :style="isRight && {left:'29px',animation:'rotate 130ms linear 80ms'}" class="fa-solid fa-sun" :class="isRight && 'changeToMoon'"></i>
        </div>
        <ul class="d-flex gap-2 m-0 p-0">
          <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-vimeo-v"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import '../../style/components/TopNav.scss'
import useTopNav from "../composables/useTopNav.js";



export default {
  name: "TopNav",
  setup(props,context){
    const {emit}=context
    const {isRight,darkTrigger}=useTopNav(emit)

    return {darkTrigger,isRight}
  }
}
</script>

