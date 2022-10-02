export default ()=>({
    appear:false,
    trigger:{
        ['@click'](){
            this.appear=!this.appear;
            this.$dispatch('canvas',{appear:this.appear})
        },
        ['@menu.window'](){
            this.appear=this.$event.detail.show
        }
    }
})