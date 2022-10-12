import Article from "./components/Article/Article.js";
import Highlight from "./components/Highlight/Highlight.js";
import Topic from "./components/Topic/Topic.js";
import '../scss/components.scss';
window.customElements.define('site-article',Article)
window.customElements.define('highlight-card',Highlight)
window.customElements.define('trend-topic',Topic)
