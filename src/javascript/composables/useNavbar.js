import {ref, onMounted, reactive} from "vue";


export default (emit)=>{
    let open=ref([])
    const collapse=ref(false)
    const effect=ref(false)
    const show=ref(false)
    const main_menu=document.getElementById('main_menu')

    const showMenu = () => {
        const menu_items=document.querySelector('.menu_items')
        if(window.innerWidth < 1200){
          menu_items.style.display='none'
        }else{
          menu_items.style.display='block'
        }
    }

    const events = {
        mouseenter:function (e) {
            if(window.innerWidth > 1200){
                e.target.children[1].style.opacity='1'
                e.target.children[1].style.visibility='visible'
            }
        },
        mouseleave:function (e) {
            if(window.innerWidth > 1200){
                e.target.children[1].style.opacity='0'
                e.target.children[1].style.visibility='hidden'
            }
        },
        click:function (e) {
            if(window.innerWidth < 1200){
                if(e.target.tagName==='A'){
                    e.target.nextElementSibling.classList.toggle('open-menu')
                }else if(e.target.tagName==='LI'){
                    e.target.children[1].classList.toggle('open-menu')
                }
            }
        },
        scroll:function () {
            // if(window.scrollY > 300){
            //     main_menu.previousElementSibling.style.opacity='0'
            //     main_menu.children[0].classList.replace('p-2','p-0')
            //     if(document.body.classList.contains('dark') ){
            //         main_menu.style.backgroundColor='rgb(25,26,31)'
            //     }else{
            //         main_menu.style.backgroundColor='#fff'
            //     }
            //     effect.value=true
            // }else{
            //     if(document.body.classList.contains('dark') ){
            //         main_menu.style.backgroundColor='#2C2C2C'
            //     }else{
            //         main_menu.style.backgroundColor='#fff'
            //     }
            //     main_menu.previousElementSibling.style.opacity='1'
            //     main_menu.children[0].classList.replace('p-0','p-2')
            //     effect.value=false
            // }

        }
    }
    onMounted(()=>{
        window.addEventListener('scroll',events.scroll)
        showMenu()
    })

    return {
        events,open,collapse,effect,show,showMenu
    }
}