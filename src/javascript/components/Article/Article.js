let template=document.createElement('template')
template.innerHTML=`
            <link rel="stylesheet" href="./css/components.css">
            <div class="article_card w-100 radius-3 pointer relative">
                <div class="article_bg"></div>
                <div class="article_overlay d-flex flex-column align-start justify-end p-9">
                    <span class="feature  justify-center align-center">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span class=" category fw-6">Cardano</span>
                    <h1 class="lh-1">
                        <a href="#" class=" btn-link btn-stretch text-light mb-4 ">
                            <slot name="title"></slot>
                        </a>
                    </h1>
                    <p class=" text-light mb-5">
                       <slot name="description"></slot>
                    </p>
                    <h4 class="text-light fw-4 d-flex align-center">
                        <img src="" alt="" width="40" class="mr-3">
                        <a href="#" class="btn-link text-light">
                            By <slot name="author"></slot>
                        </a>
                        <span class="mx-3">
                                            •
                        </span>
                        <slot name="date"></slot>
                        <span class="mx-3">
                                            •
                        </span>
                        <slot name="time"></slot>
                    </h4>
                </div>
            </div>
`
class Article extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
    connectedCallback(){
        this.checkFeature(this.getAttribute('has-feature'))
        this.setImage(this.getAttribute('img-src'))
        this.setCategory(this.getAttribute('category'))
        this.setHeight(this.getAttribute('height'))
        this.setUserImage(this.getAttribute('user-src'))
        this.checkSize(this.getAttribute('is-small'))
    }
    checkFeature(value){
        if(value==='false'){
            this.shadowRoot.querySelector('.feature').style.display='none'
        }else{
            this.shadowRoot.querySelector('.feature').style.display='flex'
        }
    }
    setImage(src){
        this.shadowRoot.querySelector('.article_bg').style.backgroundImage=`url(${src})`
    }
    setCategory(cg){
        this.shadowRoot.querySelector('.category').innerHTML=cg
        if(cg==='Cardano'){
            this.shadowRoot.querySelector('.category').classList.add('cat-blue')
        }else if(cg==='NFT'){
            this.shadowRoot.querySelector('.category').classList.add('cat-info')
        }else if(cg==='Cybercrime'){
            this.shadowRoot.querySelector('.category').classList.add('cat-dark')
        }
    }
    setHeight(height){
        this.shadowRoot.querySelector('.article_card').style.height=`${height}`
    }
    setUserImage(src){
        if(!isNaN(src)){
            this.shadowRoot.querySelector('img').style.display='none'
        }else{
            this.shadowRoot.querySelector('img').src=src

        }
    }
    checkSize(value){
        if(value==='true'){
            this.shadowRoot.querySelector('.article_card').classList.add('small')
        }
    }

}

export  default  Article

