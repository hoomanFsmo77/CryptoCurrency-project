let temp=document.createElement('template')
temp.innerHTML=`
<link rel="stylesheet" href="./css/components.css">
                <div class="post w-100 my-4 d-flex py-2 pointer relative align-center gap-2">
                    <img class="w-50 radius-1" src="" alt="">
                    <div>
                        <a href="#" class="btn-link btn-stretch fw-7 mb-3">
                           <slot name="title"></slot>
                        </a>
                        <span class="text-muted w-100 d-block mt-3 fs-09"></span>
                    </div>
                </div>

`
let root=null
class Post extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
        let {shadowRoot:main}=this
        root=main
    }
    connectedCallback(){
       this.image=this.getAttribute('img-src')
        this.date=this.getAttribute('date')
    }
    set image(src){
        root.querySelector('img').src=src
    }
    set date(date){
        root.querySelector('span').innerHTML=date
    }
}


export  default Post