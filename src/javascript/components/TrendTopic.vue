<template>
  <div class="topic w-100 radius-1 pointer relative d-flex align-center justify-center o-hidden my-3">
    <div class="topic-overlay h-100 w-100 radius-1" :style="{background:`linear-gradient(rgba(0,0,0,0.5),rgb(0,0,0,0.5)), url(${imgSrc}) center center/cover`}"></div>
    <div class="absolute w-100 h-100 d-flex align-center justify-center">
      <a href="#" class=" btn-link text-light  btn-stretch">{{title}}</a>
    </div>
  </div>

</template>

<script>
import '../../style/components/Sidebar.scss'

export default {
  name: "TrendTopic",
  props:['imgSrc','title']
}
</script>

