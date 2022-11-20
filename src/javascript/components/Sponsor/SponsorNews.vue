<template>
  <div class="sponsored_item pointer mx-5">
    <div class="item_header w-100 relative">
      <img class="w-100 radius-2"
           :src="img" alt=""
      >
      <div class="img_overlay absolute w-100 h-100 top-0 left-0 d-flex align-end justify-start">
        <a href="#">
                            <span :class="catType" class="cat-blue m-4 d-flex align-center category">
                            {{catName}}
                            </span>
        </a>
      </div>
    </div>
    <div class="item_content mt-3">
      <a href="#" class="btn-link">
        <slot name="title"></slot>
      </a>
      <div class="w-100 mt-3 d-flex align-center">
        <img class="user_image" :src="icon" width="40" alt="">
        <span class="text-muted fs-09 ml-3 fw-5">
                                 <a href="#" class="btn-link text-muted author_name  ">
                                   {{authorName}}
                                 </a>
                                <span class="mx-3">
                                            •
                                </span>
                                <span class="date">
                                  {{date}}
                                </span>
                            </span>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../style/components/Sponsor.scss';

export default {
  props:['img','authorName','icon','date','catName','catType'],
  name: "SponsorNews"
}
</script>

<style scoped>

</style>