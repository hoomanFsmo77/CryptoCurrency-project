import Alpine from "alpinejs";
import persist from '@alpinejs/persist';
import '../images/title_logo_sm.png'
import '../images/title_logo.png';
import '../scss/main.scss';
import '../scss/responsive.scss';
/////////////////////////////////////////////////////////////////////////////////////////
window.Alpine=Alpine
Alpine.plugin(persist)
Alpine.start()
