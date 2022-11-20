<template>
  <section id="trending_news">
    <div class="container">
      <div class="main_content w-100 d-flex align-center  justify-between p-2 radius-1 ">
        <span class="tag_blue bg-primary text-light pointer ">Trending:</span>
        <div class="d-flex align-center gap-2 w-100 o-hidden ml-2">
          <div class=" o-hidden single-item">
            <carousel :wrapAround="true" :autoplay="4000" ref="myCarousel">
              <slide v-for="item in newsList" :key="item.id">
                <div >
                  <a :href="item.href" class="btn-link text-muted" v-text="item.content"></a>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
        <div class="d-flex gap-1">
          <span class="arrow prev_arrow bg-blue-hover " @click="prev">
                    <i class="bi bi-chevron-left"></i>
                </span>
          <span class="arrow next_arrow bg-blue-hover  "  @click="next" >
                    <i class="bi bi-chevron-right"></i>
                </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '../../../style/components/TrendingNews.scss';
import 'vue3-carousel/dist/carousel.css'
import {sliderData,sliderConfig} from "../../composables/useCarousel.js";




export default {
  name: "Trending_News",
  mixins:[sliderData],
  setup(){
    const {prev,next,myCarousel}=sliderConfig()
    return {myCarousel,next,prev}
  }
}
</script>
