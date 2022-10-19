function dark_data  ()  {
    return {
        isRight:this.$persist(false),
        init(){
            this.$dispatch('dark',{isRight:this.isRight})
        },
        trigger_1:{
            ['@click'](){
                this.isRight=!this.isRight;
                this.$dispatch('dark',{isRight:this.isRight})
                if(!this.isRight){
                    document.getElementById('main_menu').style.backgroundColor='#fff'
                }else{
                    document.getElementById('main_menu').style.backgroundColor='#2C2C2C'
                }
            }
        },
        trigger_2:{
            ['@click.stop'](){
                this.isRight=!this.isRight;
                this.$dispatch('dark',{isRight:this.isRight})
                if(!this.isRight){
                    document.getElementById('main_menu').style.backgroundColor='#fff'
                }else{
                    document.getElementById('main_menu').style.backgroundColor='#2C2C2C'

                }
            }
        }
    }
}


export {dark_data}