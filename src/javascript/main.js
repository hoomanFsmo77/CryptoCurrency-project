import Alpine from "alpinejs";
import persist from '@alpinejs/persist';
import canvas from './components/Canvas/Alpine.canvas.js';
import canvasMenu from './components/Canvas/Alpine.canvas.menu.js'
import menu from './components/Menu/Alpine.menu.js'
import '../images/title_logo_sm.png'
import '../images/title_logo.png';
import '../scss/main.scss';
import '../scss/responsive.scss';
/////////////////////////////////////////////////////////////////////////////////////////
window.Alpine=Alpine
Alpine.plugin(persist)
Alpine.data('canvasMenu',canvasMenu)
Alpine.data('canvas',canvas)
Alpine.data('menu',menu)
Alpine.start()