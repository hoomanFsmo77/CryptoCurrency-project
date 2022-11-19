<template>

  <div class="highlight_card">
    <div class="card_header relative">
      <img :src="imgSrc" alt="" class="w-100 radius-2">
      <div class="card_overlay absolute top-0 left-0 w-100 h-100 d-flex align-end">
        <a href="#">
          <span class="card_category m-5 pointer" :class="category==='Technology' ? 'cat-warning' : category==='Games' ? 'cat-success' : category==='Bitcoin' ? 'cat-blue' : category==='Economy' ? 'cat-dark' : ''">{{category}}</span>
        </a>
        <div class="video_part absolute top-0 m-5 p-3 ">
          <i class="bi bi-camera-video-fill text-light fs-2"></i>
        </div>
        <div v-if="isVoice" :style="isVoice && {display:'block'}" class="shadow"></div>
        <div v-if="isVoice" :style="isVoice && {display:'flex'}" class="voice_part absolute px-1 py-2 align-center ">

          <div class='play pointer d-flex align-center relative justify-center w-10 mr-1' @click="playHandler($event)">

            <svg ref="play_icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill"
                 viewBox="0 0 16 16">
              <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
            <svg ref="pause_icon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                 class="bi bi-pause-circle-fill absolute pause p-1" viewBox="0 0 16 16">
              <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
            </svg>

            <audio class="absolute" id="audio" ref="audio">
              <source  :src="audioLink">
            </audio>

          </div>
          <div class="relative d-flex align-center w-40">
            <input ref="first_input" type="range" class="w-100" value="0" @input="changeValueHandler($event)">
            <span class="progress absolute "></span>
          </div>
          <div ref="timer" class="timer mx-1 d-flex gap-1">
                                        <span class="text-muted">
                                            00:00
                                        </span>
            /
            <span class="text-muted">
                                            00:00
                                        </span>
          </div>
          <div @click="volumeHandler($event)" ref="volume" class="volume p-1 d-flex align-center relative justify-center w-10 pointer h-100">

            <svg ref="mute_icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                 class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
              <path
                  d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
            </svg>
            <svg ref="volume_icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                 class="bi bi-volume-up-fill absolute mute p-1" viewBox="0 0 16 16">
              <path
                  d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
              <path
                  d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
              <path
                  d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
            </svg>

          </div>
          <div class="relative d-flex align-center w-10">
            <input ref="second_input" type="range" value="0" class="w-100" @input="volumeChangeHandler($event)">
            <span class="progress absolute "></span>
          </div>
        </div>

      </div>
    </div>
    <div class="crd_body mt-4">
      <a slot="title" href="#" class="btn-link card_title  fw-6">
        <slot name="title"></slot>
      </a>
      <p class="text-muted mx-0 fs-09 fw-5">
        <slot name="description"></slot>
      </p>
      <div class="w-100 mt-3 d-flex align-center">
        <img class="user_image" :src="userImg" width="40" alt="">
        <span class="text-muted fs-09 ml-5 fw-5">
                                 <a href="#" class="btn-link text-muted author_name">{{author}}</a>
                                <span class="mx-3">
                                            •
                                </span>
                                <span class="card_date">{{date}}</span>
                            </span>
      </div>
    </div>
  </div>
</template>

<script>
import '../../style/components/HighlightCard.scss'
import useMusicPlayer from "../composables/useMusicPlayer.js";

export default {
  name: "HighlightCard",
  mixins:[useMusicPlayer]
}
</script>

<style scoped>

</style>