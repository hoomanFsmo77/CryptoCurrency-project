export  default ()=>({
    collapse:false,
    effect:false,
    scrollTrigger:{
        ['@scroll.window'](){
            if(window.scrollY > 300){
                this.$el.previousElementSibling.style.opacity='0'
                this.$el.children[0].classList.replace('p-2','p-0')
                this.effect=true
            }else{
                this.$el.previousElementSibling.style.opacity='1'
                this.$el.children[0].classList.replace('p-0','p-2')
                this.effect=false
            }

        }
    }

})

