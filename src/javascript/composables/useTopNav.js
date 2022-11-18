import {ref,reactive} from "vue";
import {onMounted} from "vue";

export default (emit)=>{
    const isRight=localStorage.getItem('_theme_x') ? ref(JSON.parse(localStorage.getItem('_theme_x')))  : ref(false)

    onMounted(()=>{
        document.body.className=isRight.value ? 'dark' : ''
    })

    const darkTrigger = () => {
        isRight.value=!isRight.value;
        localStorage.setItem('_theme_x',JSON.stringify(isRight.value))
        document.body.className=isRight.value ? 'dark' : ''
    }


    return {
        isRight,darkTrigger
    }
}
