let temp=document.createElement('template')
temp.innerHTML=`
<link rel="stylesheet" href="./css/components.css">
            <div class="sponsored_item pointer mx-5">
                <div class="item_header w-100 relative">
                    <img class="w-100 radius-2"
                         src="" alt=""
                    >
                    <div class="img_overlay absolute w-100 h-100 top-0 left-0 d-flex align-end justify-start">
                        <a href="#">
                            <span class="cat-blue m-4 d-flex align-center category">
                            Bitcoin
                            </span>
                        </a>
                    </div>
                </div>
                <div class="item_content mt-3">
                    <a href="#" class="btn-link">
                        <slot name="title"></slot>
                    </a>
                    <div class="w-100 mt-3 d-flex align-center">
                        <img class="user_image" src="" width="40" alt="">
                        <span class="text-muted fs-09 ml-5 fw-5">
                                 <a href="#" class="btn-link text-muted author_name  ">
                                      
                                 </a>
                                <span class="mx-3">
                                            •
                                </span>
                                <span class="date">
                                    
                                </span>
                            </span>
                    </div>
                </div>
            </div>
`


class SponsoreCard extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector('img').src=this.getAttribute('img')
        this.shadowRoot.querySelector('.author_name').innerHTML=this.getAttribute('author_name')
        this.shadowRoot.querySelector('.user_image').src=this.getAttribute('icon')
        this.shadowRoot.querySelector('.date').innerHTML=this.getAttribute('date')
        this.shadowRoot.querySelector('.category').innerHTML=this.getAttribute('cat-name')
        this.shadowRoot.querySelector('.category').classList.add(this.getAttribute('cat-type'))
    }
    get observedAttributes(){
        return ['img','author_name','icon','date','cat-name','cat-type']
    }
}

export default SponsoreCard