import { timers } from "jquery";

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
                            <div class="shadow"></div>



                            <div class="voice_part absolute p-3 align-center ">
                               
                                <div class='play pointer d-flex align-center relative justify-center w-10'>
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                    </svg>
                                    <svg class="absolute pause p-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
                                    </svg>

                                    <audio class="absolute" id="audio">
                                        <source src="">
                                    </audio>
                                
                                </div>
                                <div class="relative d-flex align-center w-40">
                                    <input type="range" class="w-100" value="0">
                                    <span class="progress absolute "></span>
                                </div>
                                <div class="timer mx-3 d-flex gap-1">
                                        <span class="text-muted">
                                            00:00
                                        </span>
                                        /
                                        <span class="text-muted">
                                            00:00
                                        </span>
                                </div>
                                <div class="volume mx-2 d-flex align-center relative justify-center w-10 pointer h-100">

                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
                                    <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
                                </svg>
                                    <svg  class="absolute mute p-1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                                        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                                        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                                        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                                    </svg>
                                    
                                </div>
                                <div class="relative d-flex align-center w-10">
                                    <input type="range" value="0" class="w-100" >
                                    <span class="progress absolute w-90"></span>
                                </div>
                            </div>
                   


                        </div>
                    </div>
                    <div class="crd_body mt-4">
                        <a slot="title" href="#" class="btn-link card_title btn-bold fw-6">
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
let main=null
class Highlight extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.append(template.content.cloneNode(true))
        main=this
        this.isPlayed=false
        this.isMuted=true
    }
    connectedCallback(){
        this.setImage=this.getAttribute('img-src')
        this.category=this.getAttribute('category')
        this.author=this.getAttribute('author')
        this.date=this.getAttribute('date')
        this.userImage=this.getAttribute('user-img')
        this.checkFilm=this.getAttribute('is-film')
        this.checkVoice=this.getAttribute('is-voice')
        this.shadowRoot.querySelector('.play').addEventListener('click',this.playHandler)
        this.shadowRoot.querySelector('.volume').addEventListener('click',this.volumHandler)
    
    }
    playHandler(){
        let audio=this.querySelector('#audio')
        if(this.isPlayed){
            this.children[1].style.display='none'
            this.children[0].style.display='block'
            audio.pause()
            main.realTimeHandler(audio)
            main.inputHandler(audio)
            this.isPlayed=false
        }else{
            this.children[0].style.display='none'
            this.children[1].style.display='block'
            audio.play()
            main.calculateAudioDuration(audio)
            main.realTimeHandler(audio)
            main.inputHandler(audio)
            this.isPlayed=true
        }
    }
    inputHandler(audio){
        let input=this.previousElementSibling.shadowRoot.querySelectorAll('input')[0]

        setInterval(()=>{
            input.value=((audio.currentTime/audio.duration)*100).toFixed(2)
        },1000)

    }
    realTimeHandler(audio){
        var timer=setInterval(()=>{
            let min=Math.floor(audio.currentTime/60)
            let sec=Math.floor(audio.currentTime%60)

            if(min < 10){
                if(sec<10){
                    this.previousElementSibling.shadowRoot.querySelector('.timer').children[0].innerHTML=`0${min}:0${sec}`
                }else{
                    this.previousElementSibling.shadowRoot.querySelector('.timer').children[0].innerHTML=`0${min}:${sec}`
                }
            }else{
                if(sec<10){
                    this.previousElementSibling.shadowRoot.querySelector('.timer').children[0].innerHTML=`${min}:0${sec}`
                }else{
                    this.previousElementSibling.shadowRoot.querySelector('.timer').children[0].innerHTML=`${min}:${sec}`
                }
            }
        },1000)
    }
    calculateAudioDuration(audio){
        let minutes=Math.floor(audio.duration/60)
        let second=Math.floor(audio.duration%60)
        if(minutes < 10){
            if(second<10){
                this.previousElementSibling.shadowRoot.querySelector('.timer').children[1].innerHTML=`0${minutes}:0${second}`
            }else{
                this.previousElementSibling.shadowRoot.querySelector('.timer').children[1].innerHTML=`0${minutes}:${second}`
            }
        }else{
            if(second<10){
                this.previousElementSibling.shadowRoot.querySelector('.timer').children[1].innerHTML=`${minutes}:0${second}`
            }else{
                this.previousElementSibling.shadowRoot.querySelector('.timer').children[1].innerHTML=`${minutes}:${second}`
            }
        }
    }
    volumHandler(){
        let audio=main.previousElementSibling.shadowRoot.querySelector('#audio')
      
        if(this.isMuted){
            this.children[1].style.display='none'
            this.children[0].style.display='block'
            main.previousElementSibling.shadowRoot.querySelectorAll('input')[1].value=0
            audio.volume=0
            this.isMuted=false
        }else{
            this.children[0].style.display='none'
            this.children[1].style.display='block'
            main.previousElementSibling.shadowRoot.querySelectorAll('input')[1].value=100
            audio.volume=1
            this.isMuted=true
        }
    }

    changeValueHandler(e){
        let audio=main.previousElementSibling.shadowRoot.querySelector('#audio')
        audio.currentTime=audio.duration * (e.target.value/100)

    }
    volumChangeHandler(e){
        let audio=main.previousElementSibling.shadowRoot.querySelector('#audio')
        audio.volume=e.target.value/100
        if(e.target.value < 1){
            main.previousElementSibling.shadowRoot.querySelector('.volume').children[0].style.display='block'
            main.previousElementSibling.shadowRoot.querySelector('.volume').children[1].style.display='none'
        }else if(e.target.value > 0){
            main.previousElementSibling.shadowRoot.querySelector('.volume').children[1].style.display='block'
            main.previousElementSibling.shadowRoot.querySelector('.volume').children[0].style.display='none'
        }
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
            this.shadowRoot.querySelector('.voice_part').style.display='flex'
            this.shadowRoot.querySelector('.shadow').style.display='block'
            this.shadowRoot.querySelector('#audio').children[0].src=this.getAttribute('audio-link')
            this.shadowRoot.querySelectorAll('input')[0].addEventListener('input',this.changeValueHandler)
            this.shadowRoot.querySelectorAll('input')[1].addEventListener('input',this.volumChangeHandler)


        }
    }

}

export  default Highlight