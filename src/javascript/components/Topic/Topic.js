let template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="./css/components.css">
    <div class="topic w-100 radius-1 pointer relative d-flex align-center justify-center o-hidden my-3">
           <div class="topic-overlay h-100 w-100 radius-1"></div>
           <div class="absolute w-100 h-100 d-flex align-center justify-center">
                 <a href="#" class=" btn-link text-light  btn-stretch"></a>
           </div>
    </div>

`

class Topic extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.append(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector('.topic-overlay').style.background=`linear-gradient(rgba(0,0,0,0.5),rgb(0,0,0,0.5)), url(${this.getAttribute('img-src')}) center center/cover`
        this.shadowRoot.querySelector('.btn-link').innerHTML=this.getAttribute('title')

    }
}

export default Topic