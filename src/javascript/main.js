import Alpine from "alpinejs";
import $ from "jquery";
import 'slick-carousel';
import persist from '@alpinejs/persist';
import canvas from './components/Canvas/Alpine.canvas.js';
import canvasMenu from './components/Canvas/Alpine.canvas.menu.js'
import menu from './components/Menu/Alpine.menu.js';
import effect from './components/Menu/Alpine.effect.js'
import slider from './components/Carousel/Carousel';
import sponsore from './components/Sponsore/Sponsore.slider';
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
import '../images/man-1.svg';
import '../images/man-2.svg';
import '../images/man-3.svg';
import '../images/girl.svg';
import '../images/girl-1.svg';
import '../images/ad.png';
import '../images/g-play.svg';
import '../images/app-store.svg'
import '../scss/main.scss';
import '../scss/responsive.scss';
/////////////////////////////////////////////////////////////////////////////////////////
$('.single-item').slick(slider);
$('.sponsore_container').slick(sponsore);
window.Alpine=Alpine
Alpine.plugin(persist)
Alpine.data('canvasMenu',canvasMenu)
Alpine.data('canvas',canvas)
Alpine.data('menu',menu)
Alpine.data('effect',effect)
Alpine.start()
