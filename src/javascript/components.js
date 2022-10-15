import Article from "./components/Article/Article.js";
import Highlight from "./components/Highlight/Highlight.js";
import Topic from "./components/Topic/Topic.js";
import Post from "./components/Post/Post.js";
import SponsoreCard from "./components/Sponsore/Sponsore.card.js";
import '../scss/components.scss';
window.customElements.define('site-article',Article)
window.customElements.define('highlight-card',Highlight)
window.customElements.define('trend-topic',Topic)
window.customElements.define('recent-post',Post)
window.customElements.define('sponsore-news',SponsoreCard)
