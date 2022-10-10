let template=document.createElement('template')
template.innerHTML=`
                <link rel="stylesheet" href="./css/components.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
                <div class="highlight_card">
                    <div class="card_header relative">
                        <img src="" alt="" class="w-100 radius-2">
                        <div class="card_overlay absolute top-0 left-0 w-100 h-100 d-flex align-end">
                            <span class="card_category m-5 pointer"><a href="#">Technology</a></span>
                            <div class="video_part absolute top-0 m-5 p-3 ">
                                <i class="bi bi-camera-video-fill text-light fs-2"></i>
                            </div>
                            
                            <div class="voice_part absolute">
                            
                            </div>
                   
                        </div>
                    </div>
                    <div class="crd_body mt-4">
                        <a slot="title" href="#" class="btn-link card_title  fw-6">
                            <slot name="title"></slot>
                        </a>
                        <p class="text-muted mx-0 fs-09 fw-5">
                           <slot name="description"></slot>
                        </p>
                        <div class="w-100 mt-3 d-flex align-center">
                            <img class="user_image" src="" width="40" alt="">
                            <span class="text-muted fs-09 ml-5 fw-5">
                                 <a href="#" class="btn-link text-muted author_name"></a>
                                <span class="mx-3">
                                            •
                                </span>
                                <span class="card_date"></span>
                            </span>
                        </div>
                    </div>
                </div>


`
class Highlight extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.append(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.setImage=this.getAttribute('img-src')
        this.category=this.getAttribute('category')
        this.author=this.getAttribute('author')
        this.date=this.getAttribute('date')
        this.userImage=this.getAttribute('user-img')
        this.checkFilm=this.getAttribute('is-film')
        this.checkVoice=this.getAttribute('is-voice')

    }
    set setImage(value){
        this.shadowRoot.querySelector('.card_header img').src=value
    }
    set category(value){
        this.shadowRoot.querySelector('.card_category').innerHTML=value
        if(value==='Technology'){
            this.shadowRoot.querySelector('.card_category').classList.add('cat-warning')
        }else if(value==='Games'){
            this.shadowRoot.querySelector('.card_category').classList.add('cat-success')
        }else if(value==='Bitcoin'){
            this.shadowRoot.querySelector('.card_category').classList.add('cat-blue')
        }else if(value==='Economy'){
            this.shadowRoot.querySelector('.card_category').classList.add('cat-dark')
        }
    }
    set author(value){
        this.shadowRoot.querySelector('.author_name').innerHTML=`By ${value}`
    }
    set date(value){
        this.shadowRoot.querySelector('.card_date').innerHTML=value
    }
    set userImage(value){
        this.shadowRoot.querySelector('.user_image').src=value
    }
    set checkFilm(value){
        if(value==='yes'){
            this.shadowRoot.querySelector('.video_part').style.display='block'
        }
    }
    set checkVoice(value){
        if(value==='yes'){
            this.shadowRoot.querySelector('.voice_part').style.display='block'
        }
    }
}

export  default Highlight