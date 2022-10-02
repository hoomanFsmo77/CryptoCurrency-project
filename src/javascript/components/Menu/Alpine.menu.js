export  default ()=>({
    open:false,
    menuTrigger:{
        ['@mouseenter'](){
            this.open=true
        },
        ['@mouseleave'](){
            this.open=false
        }
    },
    showSubMenu:{
        ['x-show'](){
            return this.open
        }
    }
})