<template>
  <div class="article_card  w-100 radius-3 pointer relative" :class="isSmall && 'small'" :style="[{height:`${height}`},{gridColumnStart:grid && '2'}]">
    <div class="article_bg" :style="{backgroundImage:`url(${imgSrc})`}"></div>
    <div class="article_overlay d-flex flex-column align-start justify-end p-9">
                    <span :style="hasFeature ? {display:'flex'} : {display: 'none'}" class="feature  justify-center align-center">
                       <i class="bi bi-star-fill"></i>
                    </span>
      <span class=" category fw-6" :class="category==='Cardano' ? 'cat-blue' :category==='NFT' ? 'cat-info' : category==='Cybercrime' ? 'cat-dark' : ''">
        {{category}}
      </span>
      <h1 class="lh-1">
        <a href="#" class=" btn-link btn-stretch text-light mb-4 ">
          <slot name="title"></slot>
        </a>
      </h1>
      <p class=" text-light mb-5">
        <slot name="description"></slot>
      </p>
      <h4 class="text-light fw-4 d-flex align-center">
        <img :src="userSrc" :style="!isNaN(userSrc) && {display:'none'}" alt="" width="40" class="mr-3">
        <a href="#" class="btn-link text-light">
          By <slot name="author"></slot>
        </a>
        <span class="mx-3">
                                            •
                        </span>
        <slot name="date"></slot>
        <span class="mx-3">
                                            •
                        </span>
        <slot name="time"></slot>
      </h4>
    </div>
  </div>
</template>

<script>
import '../../style/components/Article.scss'

export default {
  props:['hasFeature','category','imgSrc','height','userSrc','isSmall','grid'],
  name: "ArticleCard"
}
</script>
