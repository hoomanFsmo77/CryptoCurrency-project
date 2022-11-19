<template>
  <section id="article" class="mt-6 p-1">
    <div class="container d-grid grid-2 grid-lg-1 gap-2">
      <article-card v-for="item in article_info"
                    :has-feature="item.feature"  :category="item.category"
                    :img-src="item.img"
                    :height="item.height" :user-src="item.userSrc" :grid="item?.grid"
      >
        <template v-slot:title><span >{{item.title}}</span></template>
        <template v-if="item.description" v-slot:description><span> {{item?.description}}</span></template>
        <template v-slot:author><span >{{item.author}}</span></template>
        <template v-slot:date><span >{{item.date}}</span></template>
        <template v-if="item.time" v-slot:time><span >{{item?.time}}</span></template>
      </article-card>

      <div >
      </div>
    </div>
  </section>
</template>

<script>
import '../../style/components/Article.scss'
import '../../assets/man.svg'
import useArticle from "../composables/useArticle.js";

export default {
  name: "Article",
  mixins:[useArticle]
}
</script>

<style scoped>

</style>