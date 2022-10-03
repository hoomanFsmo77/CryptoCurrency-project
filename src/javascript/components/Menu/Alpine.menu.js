export  default ()=>({
    open:false,
    menuTrigger:{
        ['@mouseenter'](){
            if(window.innerWidth > 1200){
                this.open=true
            }
        },
        ['@mouseleave'](){
            if(window.innerWidth > 1200){
                this.open=false
            }
        },
        ['@click.stop'](){
            if(window.innerWidth < 1200){
                this.open=!this.open
            }

        }
    },
    showSubMenu:{
        ['x-show'](){
            return this.open
        }
    }
})