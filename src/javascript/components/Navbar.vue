<template>
  <nav id="main_menu"  :class="effect && 'active'" :style="collapse && {borderBottom: '1px solid #ccc'}" >
    <div class="container d-flex justify-between p-2 ">
      <div class="brand_logo d-flex align-center py-4">
        <img src="../../assets/title_logo.png" alt="" width="50">
        <h1 class="ml-5 fw-4 fs-3">MultiCoin</h1>
      </div>
      <div class="menu_items"  v-show="collapse">
          <ul class="d-flex flex-xlg-column align-center gap-5 m-0 p-0  " >

            <li class="relative h-100 pointer main_menu_item" @mouseenter="events.mouseenter" @mouseleave="events.mouseleave" @click.stop="events.click">
              <a class="menu_item blue_hover d-flex justify-xlg-between align-center h-100 gap-1 text-primary gap-1" href="#">
                            <span class="d-flex align-center">
                               <i class="fa-solid fa-circle fs-1 mr-2"></i>
                                News
                            </span>
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <div class="sub_menu absolute p-4  grid-4 menu_pic"   >
                <ul class="d-flex flex-column align-center m-0 p-0">
                  <li class="text-center mb-2 text-muted">
                    <img src="../../assets/crypto_news_logo.png" alt="" width="40">
                    <h3 class="text-center fw-4 border-muted yellow_hover">Crypto News</h3>
                  </li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Bitcoin News</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Bitcoin Price Analysis</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Ethereum News</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Cardano News</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Ripple News</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Stablecoin News</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">CBDC News</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Defi News</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">NFT News</a></li>
                </ul>
                <ul class="d-flex flex-column align-center">
                  <li class="text-center mb-2 text-muted">
                    <img src="../../assets/security_coin.png" alt="" width="40">
                    <h3 class="text-center fw-4 border-muted yellow_hover">Regulatory News</h3>
                  </li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Regulation</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Legal</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Cybercrime</a></li>
                </ul>
                <ul class="d-flex flex-column align-center">
                  <li class="text-center mb-2 text-muted">
                    <img src="../../assets/industry.png" alt="" width="40">
                    <h3 class="text-center fw-4 border-muted yellow_hover">Industry News</h3>
                  </li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Exchanges</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Mining</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Data Service</a></li>
                </ul>
                <ul class="d-flex flex-column align-center">
                  <li class="text-center mb-2 text-muted">
                    <img src="../../assets/technology.png" alt="" width="40">
                    <h4 class="text-center fw-4 border-muted yellow_hover">Technology News</h4>
                  </li>
                  <li class="mb-2  fs-09 fw-4 py-1 "><a class="text-light yellow_hover" href="#">Enterprise</a></li>
                  <li class="mb-2  fs-09 fw-4 py-1 text-center"><a class="text-light yellow_hover" href="#">Blockchain Application</a></li>
                </ul>

              </div>
            </li>



            <li class="relative h-100 pointer main_menu_item"    @mouseenter="events.mouseenter" @mouseleave="events.mouseleave" @click.stop="events.click">
              <a class="menu_item blue_hover h-100 d-flex align-center gap-1 justify-xlg-between" href="#">
                Pages
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <div class="sub_menu absolute py-3" >
                <ul class="m-0 p-0">
                  <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">About</a></li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Contact</a></li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Realtime Market Price</a></li>
                  <li class="px-3 py-2   rotate relative double_sub_menu" @mouseenter="events.mouseenter" @mouseleave="events.mouseleave" @click.stop="events.click">
                    <a class="fs-09 blue_hover d-flex justify-between align-center w-100" href="#">
                                        <span>
                                            Shop
                                            <span class="badge bg-info">New</span>
                                        </span>
                      <i class="bi bi-plus"></i>
                    </a>
                    <ul class="absolute p-0 m-0 "  >
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Shop Grid<span class="badge bg-info">New</span></a></li>
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Shop Detail<span class="badge bg-info">New</span></a></li>
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Checkout<span class="badge bg-info">New</span></a></li>
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Card<span class="badge bg-info">New</span></a></li>
                    </ul>
                  </li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Sign in</a></li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Sign up</a></li>
                  <li class="divider"></li>
                  <li class="px-3 py-2   double_sub_menu relative" @mouseenter="events.mouseenter" @mouseleave="events.mouseleave" @click.stop="events.click">
                    <a class="fs-09 rotate blue_hover d-flex justify-between align-center" href="#">
                      Dropdown levels
                      <i class="bi bi-plus"></i>
                    </a>
                    <ul class="absolute p-0 m-0" >
                      <li class="px-3 py-2 double_sub_menu relative" @mouseenter="events.mouseenter" @mouseleave="events.mouseleave" @click.stop="events.click">
                        <a class="fs-09 rotate d-flex justify-between align-center w-100 blue_hover" href="#">
                          Dropdown item 1
                          <i class="bi bi-plus"></i>
                        </a>
                        <ul class="absolute p-0 m-0"   >
                          <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Dropdown item 1</a></li>
                          <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Dropdown item 2<span class="badge bg-info">New</span></a></li>
                        </ul>

                      </li>
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Dropdown item 2<span class="badge bg-info">New</span></a></li>
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Dropdown item 3</a></li>
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Dropdown item 4<span class="badge bg-info">New</span></a></li>
                    </ul>


                  </li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#"><i class="bi bi-life-preserver mr-2 fs-2 text-warning"></i>Support </a></li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#"><i class="bi bi-card-text mr-2 fs-2 text-info"></i>Documentation</a></li>
                  <li class="divider"></li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#"><i class="bi bi-toggle-off mr-2 fs-2 text-primary"></i>Rtl Demo</a></li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#"><i class="bi bi-cloud-download-fill mr-2 fs-2 text-success"></i>Buy MultiCoin!</a></li>
                </ul>
              </div>
            </li>



            <li class="relative h-100 pointer main_menu_item"   @mouseenter="events.mouseenter" @mouseleave="events.mouseleave" @click.stop="events.click">
              <a  class="menu_item blue_hover h-100 d-flex align-center gap-1 justify-xlg-between" href="#">
                Post
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <div class="sub_menu absolute py-3" >
                <ul class="m-0 p-0">
                  <li class="px-3 py-2 blue_hover"><a class="fs-09 d-flex align-center gap-2" href="#"><img width="20" src="../../assets/btc.png" alt="">Bitcoin lorem lorem</a></li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09 d-flex align-center gap-2" href="#"><img width="20" src="../../assets/eth.png" alt="">Ethereum lorem ipsum</a></li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09 d-flex align-center gap-2" href="#"><img width="20" src="../../assets/crd.png" alt="">Cardano lorem</a></li>
                  <li class="divider"></li>
                  <li class="px-3 py-2   rotate relative double_sub_menu" @mouseenter="events.mouseenter" @mouseleave="events.mouseleave" @click.stop="events.click">
                    <a class="fs-09 blue_hover d-flex justify-between align-center w-100" href="#">
                                        <span class="d-flex align-center gap-1 fs-09 justify-start">
                                            <img width="20" src="../../assets/meta.png" alt="">
                                            Meta-verse
                                            <span class="badge bg-info">New</span>
                                        </span>
                      <i class="bi bi-plus"></i>
                    </a>

                    <ul class="absolute p-0 m-0"  >
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Post 4-1<span class="badge bg-info">New</span></a></li>
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Post 4-2<span class="badge bg-info">New</span></a></li>
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Post 4-3<span class="badge bg-info">New</span></a></li>
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Post 4-4<span class="badge bg-info">New</span></a></li>
                    </ul>
                  </li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09 d-flex align-center gap-2" href="#"><img width="20" src="../../assets/nft.png" alt="">NFT</a></li>
                  <li class="px-3 py-2 blue_hover"><a class="fs-09 d-flex align-center gap-2" href="#"><img width="20" src="../../assets/rip.png" alt="">Ripple Court</a></li>
                  <li class="divider"></li>
                  <li class="px-3 py-2   double_sub_menu relative" @mouseenter="events.mouseenter" @mouseleave="events.mouseleave" @click.stop="events.click">
                    <a class="fs-09 rotate blue_hover d-flex justify-between align-center" href="#">
                                        <span class="align-center d-flex  gap-2">
                                            <img width="20" src="../../assets/sol.png" alt="">
                                            Solana
                                        </span>

                      <i class="bi bi-plus"></i>
                    </a>
                    <ul class="absolute p-0 m-0"   >
                      <li class="px-3 py-2 double_sub_menu relative" >
                        <a class="fs-09  d-flex justify-between align-center w-100 blue_hover" href="#">
                          Post 7-1
                        </a>
                      </li>
                      <li class="px-3 py-2 blue_hover"><a class="fs-09" href="#">Post 7-2<span class="badge bg-info">New</span></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>

            <li class="relative h-100 pointer main_menu_item"  @mouseenter="events.mouseenter" @mouseleave="events.mouseleave" @click.stop="events.click">
              <a class="menu_item blue_hover h-100 d-flex align-center gap-1 justify-xlg-between" href="#">
                Blockchain
                <i class="fa-solid fa-angle-down"></i>
              </a>
              <div class="sub_menu absolute p-3 "   >
                <div class="d-grid grid-4 gap-2">
                  <div class="d-flex flex-column">
                    <img src="https://image.blockchain.news:443/thumbnails/4C3EF3BD4BA60607BCBF06F940C3E5B81605A0AF63807D2681A43392C5E515F1.jpg" alt="" width="230" class="radius-1">
                    <h4 class="my-2">
                      <a href="#" class="btn-link">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h4>
                    <h5 class="text-muted fw-4">
                      <a href="#" class="btn-link text-muted">
                        Lorem Ipsum
                      </a>
                      <span class="mx-3">
                                            •
                                        </span>
                      SEP 07, 2022
                    </h5>

                  </div>
                  <div class="d-flex flex-column">
                    <img src="https://image.blockchain.news:443/thumbnails/5E79FE1219EA146E40D2BF3DD3CA7F5533BAEB04A67A74DE7CB4A523AF92A12F.jpg" width="230" alt="" class="radius-1">
                    <h4 class="my-2">
                      <a href="#" class="btn-link">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h4>
                    <h5 class="text-muted fw-4">
                      <a href="#" class="btn-link text-muted">
                        Lorem Ipsum
                      </a>
                      <span class="mx-3">
                                            •
                                        </span>
                      SEP 07, 2022
                    </h5>

                  </div>
                  <div class="d-flex flex-column">
                    <img src="https://image.blockchain.news:443/thumbnails/1462F2B1DE5BE4512D3C6B30D249A7B94912AE339FDBCE1FF992B40241E20CCD.jpg" width="230" class="radius-1" alt="">
                    <h4 class="my-2">
                      <a href="#" class="btn-link">Lorem ipsum dolor sit amet, consectetur.</a>
                    </h4>
                    <h5 class="text-muted fw-4">
                      <a href="#" class="btn-link text-muted">
                        Lorem Ipsum
                      </a>
                      <span class="mx-3">
                                            •
                                        </span>
                      SEP 07, 2022
                    </h5>


                  </div>
                  <div class="bg-primary-op2 radius-1 d-flex flex-column p-2 premium">
                    <h5 class="text-muted text-center">MultiCoin</h5>
                    <h1 class="text-center fw-4 fs-3">Premium Membership!</h1>
                    <p class="text-center fs-09 text-muted">
                      Become a Member Today!
                    </p>
                    <div class="d-flex justify-center my-6 w-100">
                      <a href="#" class="btn bg-warning border-dark w-80 btn-sm">View pricing plans</a>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-center my-2 tag_container">
                  <h4 class="text-muted">Trending Tags:</h4>
                  <a href="#" class="mx-2"><span class="tag_blue">Bitcoin</span></a>
                  <a href="#" class="mx-2"><span class="tag_success">Cardano</span></a>
                  <a href="#" class="mx-2"><span class="tag_info">NFT</span></a>
                  <a href="#" class="mx-2"><span class="tag_warning">Ethereum</span></a>
                  <a href="#" class="mx-2"><span class="tag_success">Meta-verse</span></a>
                  <a href="#" class="mx-2"><span class="tag_info">Ripple</span></a>
                  <a href="#" class="mx-2"><span class="tag_blue">Solano</span></a>
                  <a href="#" class="mx-2"><span class="tag_warning">Light-coin</span></a>
                </div>

              </div>
            </li>


            <li class="relative h-100 main_menu_item">
              <a class="menu_item blue_hover h-100 d-flex align-center " href="#">
                Dashboard
              </a>
            </li>
          </ul>
        </div>

      <div class="canvas_part d-flex align-center gap-1">
        <div @click="collapse=!collapse" class="d-none d-xlg-flex gap-2 hamburger_menu ml-3 align-center">
          <h4 class="text-muted d-sm-none">Menu</h4>
          <div class="canvas_menu blue_hover pointer d-flex flex-column align-end" >
            <span class="w-100 bg-muted"></span>
            <span class="w-100 bg-muted"></span>
            <span class="w-100 bg-muted"></span>
            <span class="w-100 bg-muted"></span>
          </div>
        </div>
        <a href="#" class="btn bg-info border-dark text-light btn-sm d-md-none">Subscribe!</a>
        <div class="relative">
          <i class="bi bi-search fs-3 mx-4 pointer blue_hover" @click="show=!show" ></i>
          <div class="absolute search_bar  justify-center align-center"  v-show="show"  >
            <form action="" class="d-flex gap-1">
              <input type="text" class="border-success" placeholder="Search...">
              <button class="btn btn-sm bg-success border-dark text-light" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div class="canvas_menu blue_hover pointer d-flex flex-column align-end" @click="canvasTrigger" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>
  <Canvas @close="closeCanvas($event)" :appear="appear"/>
</template>

<script>
import '../../style/components/Navbar.scss'
import useNavbar from "../composables/useNavbar.js";
import Canvas from "./Canvas.vue";
import {watch,ref} from "vue";

export default {
  name: "Navbar",
  data(){
    return{
      appear:false
    }
  },
  methods:{
    canvasTrigger(){
      this.appear=!this.appear
    },
    closeCanvas(e){
      this.appear=e
    }
  },
  setup(props,context){
    const {emit}=context
    const {events,open,collapse,effect,show,showMenu}=useNavbar(emit)


    return {events,open,collapse,effect,show,showMenu}
  },
  components:{
    Canvas
  }
}
</script>

<style scoped>

</style>