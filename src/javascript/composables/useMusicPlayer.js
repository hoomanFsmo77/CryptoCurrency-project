export default {
    props:['userImg','date','author','imgSrc','category','isVoice','audioLink','isFilm'],
    data(){
        return{
            isPlayed:false,
            isMuted:true
        }
    },
    methods:{
        volumeChangeHandler(e){
            let audio=this.$refs.audio
            let volume=this.$refs.volume
            audio.volume=e.target.value/100
            if(e.target.value < 1){
                volume.children[0].style.display='block'
                volume.children[1].style.display='none'
            }else if(e.target.value > 0){
                volume.children[1].style.display='block'
                volume.children[0].style.display='none'
            }
        },
        changeValueHandler(e){
            let audio=this.$refs.audio
            audio.currentTime=audio.duration * (e.target.value/100)
        },
        playHandler(e){
            let audio=this.$refs.audio
            let play_icon=this.$refs.play_icon
            let pause_icon=this.$refs.pause_icon
            let input=this.$refs.second_input
            let mute_icon=this.$refs.mute_icon
            let volume_icon=this.$refs.volume_icon
            if(this.isPlayed){
                pause_icon.style.display='none'
                play_icon.style.display='block'
                audio.pause()
                this.realTimeHandler(audio)
                this.inputHandler(audio)
                input.value='0'
                volume_icon.style.display='none'
                mute_icon.style.display='block'
                this.isPlayed=false
            }else{
                play_icon.style.display='none'
                pause_icon.style.display='block'
                audio.play()
                input.value='100'
                mute_icon.style.display='none'
                volume_icon.style.display='block'
                this.calculateAudioDuration(audio)
                this.realTimeHandler(audio)
                this.inputHandler(audio)
                this.isPlayed=true
            }

        },
        volumeHandler(e){
            let audio=this.$refs.audio
            let input=this.$refs.second_input
            let mute_icon=this.$refs.mute_icon
            let volume_icon=this.$refs.volume_icon
            if(this.isMuted){
                volume_icon.style.display='none'
                mute_icon.style.display='block'
                input.value='0'
                audio.volume=0
                this.isMuted=false
            }else{
                mute_icon.style.display='none'
                volume_icon.style.display='block'
                input.value='100'
                audio.volume=1
                this.isMuted=true
            }
        },
        realTimeHandler(audio){
            let timerElement=this.$refs.timer
            var timer=setInterval(()=>{
                let min=Math.floor(audio.currentTime/60)
                let sec=Math.floor(audio.currentTime%60)
                if(min < 10){
                    if(sec<10){
                        timerElement.children[0].innerHTML=`0${min}:0${sec}`
                    }else{
                        timerElement.children[0].innerHTML=`0${min}:${sec}`
                    }
                }else{
                    if(sec<10){
                        timerElement.children[0].innerHTML=`${min}:0${sec}`
                    }else{
                        timerElement.children[0].innerHTML=`${min}:${sec}`
                    }
                }
            },1000)

        },
        inputHandler(audio){
            let input=this.$refs.first_input
            setInterval(()=>{
                input.value=((audio.currentTime/audio.duration)*100).toFixed(2)
            },1000)

        },
        calculateAudioDuration(audio){
            let timer=this.$refs.timer
            let minutes=Math.floor(audio.duration/60)
            let second=Math.floor(audio.duration%60)
            if(minutes < 10){
                if(second<10){
                    timer.children[1].innerHTML=`0${minutes}:0${second}`
                }else{
                    timer.children[1].innerHTML=`0${minutes}:${second}`
                }
            }else{
                if(second<10){
                    timer.children[1].innerHTML=`${minutes}:0${second}`
                }else{
                    timer.children[1].innerHTML=`${minutes}:${second}`
                }
            }
        }
    }

}