<template>
  <Header/>
  <TrendingNews/>
  <Article/>
  <Main/>
</template>

<script>
/////////// style
import '../style/App.scss';
//////////// components
import Header from "./components/Header.vue";
import TrendingNews from "./components/TrendingNews.vue";
import Article from "./components/Article.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  setup(){

  },
  components:{
      Header,TrendingNews,Article,Main
  }

}
</script>
