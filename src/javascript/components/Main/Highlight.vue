<template>
  <main>
    <div class="d-flex flex-column">
      <div class="d-flex align-center">
        <i class="bi bi-hourglass-bottom fs-5 mr-3"></i>
        <h1 class="fs-4 lh-1">Today's top highlights</h1>
      </div>
      <p class="text-muted m-0">
        Latest breaking news, pictures, videos, and special reports
      </p>
    </div>
    <div class="content_container w-100 h-100 d-grid grid-2 grid-xlg-1 my-5 gap-3">

      <highlight-card v-for="item in highlight_info" :key="item.id"
                      :user-img="item.userImg"
                      :date="item.date"
                      :author="item.author"
                      :img-src="item.imgSrc"
                      :category="item.category"
                      :is-voice="item?.isVoice"
                      :audio-link="item?.audioLink"
                      :is-film="item?.isFilm"
                >
        <template v-slot:title><span >{{item.title}}</span></template>
        <template v-slot:description><span>{{item.description}}</span></template>
      </highlight-card>
    </div>
    <div class="my-10 w-100 text-center d-flex justify-center">
      <button class="btn bg-primary text-light border-dark w-20 d-flex align-center justify-center gap-1">
        Load more post
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
        </svg>

      </button>
    </div>
  </main>
</template>

<script>
import useHighlight from "../../composables/useHighlight.js";
import '../../../assets/man-1.svg';
import '../../../assets/man-2.svg';
import '../../../assets/man-3.svg';
import '../../../assets/girl.svg';
import '../../../assets/girl-1.svg';


export default {
  name: "Highlight",
  mixins:[useHighlight]

}
</script>

<style scoped>

</style>