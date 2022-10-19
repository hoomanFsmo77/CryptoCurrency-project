export  default ()=>({
    collapse:false,
    effect:false,
    scrollTrigger:{
        ['@scroll.window'](){
            if(window.scrollY > 300){
                this.$el.previousElementSibling.style.opacity='0'
                this.$el.children[0].classList.replace('p-2','p-0')

                if(document.body.classList.contains('dark') ){
                    this.$el.style.backgroundColor='rgb(25,26,31)'
                }else{
                    this.$el.style.backgroundColor='#fff'
                }
                this.effect=true
            }else{
                if(document.body.classList.contains('dark') ){
                    this.$el.style.backgroundColor='#2C2C2C'
                }else{
                    this.$el.style.backgroundColor='#fff'
                }
                this.$el.previousElementSibling.style.opacity='1'
                this.$el.children[0].classList.replace('p-0','p-2')
                this.effect=false
            }

        }
    }

})

