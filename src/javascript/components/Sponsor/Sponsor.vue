<template>
  <section id="sponsored" class="mt-8 pb-5">
    <div class="container">
      <div class="d-flex align-center gap-2 ">
        <i class="bi bi-megaphone fs-4"></i>
        <h1 class="fs-4">Sponsored News</h1>
      </div>
      <div class="mt-5 o-hidden w-100 relative">
        <div class="absolute spon_next p-3  align-center pointer bg-primary-op2 bg-blue-hover" @click="next">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>

        <div class="w-100  sponsore_container">
          <carousel  :settings="settings"  :breakpoints="breakpoints" ref="myCarousel2">
            <slide  v-for="item in sponsorNewsData" :key="item.id">
              <sponsor-news  :img="item.img" :author-name="item.authorName" :icon="item.icon" :date="item.date" :cat-name="item.catName" :cat-type="item.catType">
                <template v-slot:title>{{item.title}}</template>
              </sponsor-news>
            </slide>
          </carousel>
        </div>
        <div class="spon_prev absolute p-3  align-center pointer bg-primary-op2 bg-blue-hover" @click="prev">
          <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import SponsorNews from "./SponsorNews.vue";
import useSponsor from "../../composables/useSponsor.js";
import '../../../style/components/Sponsor.scss';
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css';

export default {
  name: "Sponsor",
  components:{SponsorNews,Carousel, Slide, Pagination, Navigation},
  data(){
    return{
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        wrapAround:true,
        autoplay:'5000'
      },
      breakpoints:{
        1150:{
          itemsToShow: 4
        },
        830:{
          itemsToShow: 3
        },
        500:{
          itemsToShow: 2
        }
      }
    }
  },
  setup(){
    const {sponsorNewsData,prev,next,myCarousel2}=useSponsor()
    return{sponsorNewsData,prev,next,myCarousel2}
  }
}
</script>