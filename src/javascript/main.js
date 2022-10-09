import Alpine from "alpinejs";
import persist from '@alpinejs/persist';
import canvas from './components/Canvas/Alpine.canvas.js';
import canvasMenu from './components/Canvas/Alpine.canvas.menu.js'
import menu from './components/Menu/Alpine.menu.js';
import $ from 'jquery';
import 'slick-carousel';
import '../images/title_logo_sm.png'
import '../images/title_logo.png';
import '../images/crypto_news_logo.png';
import '../images/security_coin.png';
import '../images/industry.png';
import '../images/technology.png'
import '../images/btc.png';
import '../images/eth.png';
import '../images/crd.png';
import '../images/meta.png';
import '../images/nft.png';
import '../images/rip.png';
import '../images/sol.png';
import '../images/man.svg';
import '../scss/main.scss';
import '../scss/responsive.scss';
/////////////////////////////////////////////////////////////////////////////////////////
$('.single-item').slick({
    nextArrow: $('.prev_arrow'),
    prevArrow:$('.next_arrow'),
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
window.Alpine=Alpine
Alpine.plugin(persist)
Alpine.data('canvasMenu',canvasMenu)
Alpine.data('canvas',canvas)
Alpine.data('menu',menu)
Alpine.start()
