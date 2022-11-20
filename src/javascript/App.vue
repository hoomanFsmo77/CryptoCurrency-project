<template>
  <Header/>
  <TrendingNews/>
  <Article/>
  <Main/>
  <Sponsor/>
  <Footer/>
  <ScrollTop/>
</template>

<script>
/////////// style
import '../style/App.scss';
//////////// components
import Header from "./components/Header/Header.vue";
import TrendingNews from "./components/Header/TrendingNews.vue";
import Article from "./components/Article/Article.vue";
import Main from "./components/Main/Main.vue";
import Sponsor from "./components/Sponsor/Sponsor.vue";
import Footer from "./components/Footer.vue";
import ScrollTop from "./components/ScrollTop.vue";

export default {
  name: "App",
  setup(){

  },
  components:{
      Header,TrendingNews,Article,Main,Sponsor,Footer,ScrollTop
  }

}
</script>
