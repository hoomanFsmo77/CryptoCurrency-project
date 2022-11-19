<template>
  <div class="post w-100 my-4 d-flex py-2 pointer relative align-center gap-2">
    <img class="w-50 radius-1" :src="imgSrc" alt="">
    <div>
      <a href="#" class="btn-link btn-stretch fw-7 mb-3">
        <slot name="title"></slot>
      </a>
      <span class="text-muted w-100 d-block mt-3 fs-09">{{date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentPost",
  props:['imgSrc','date']
}
</script>

<style scoped>

</style>