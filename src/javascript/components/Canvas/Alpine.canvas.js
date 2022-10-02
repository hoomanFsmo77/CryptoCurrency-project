export  default  ()=>({
    show:null,
    trigger:{
        ['@canvas.window'](){
            this.show=this.$event.detail.appear
        }
    },
    overlayTrigger:{
        ['x-show'](){
            return this.show
        },
        ['@click'](){
            this.show=false;
            this.$dispatch('menu',{show:this.show})
        }
    },
    showCanvas:{
      [':style'](){
          if(this.show){
              return {transform:'translateX(0)'}
          }else{
              return {transform:'translateX(1000)'}
          }
      }
    },
    closeCanvas:{
        ['@click'](){
            this.show=false;
            this.$dispatch('menu',{show:this.show})
        }
    }

})