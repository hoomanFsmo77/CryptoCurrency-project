import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import {ref} from "vue";


const sliderData={
    data(){
        return {
            newsList:[
                {id:1,href:'#',content:'Lum dolor sit amet, consectetur adipisicing elit.'},
                {id:2,href:'#',content:'Lorem ipsum dolor sit amet, constetur adisicing elit.'},
                {id:3,href:'#',content:'Lorem ipsum dolor sit amet, coadip icing elit.'},
                {id:4,href:'#',content:'Lorem ipsum , consectetur adipisicing elit.'},
                {id:5,href:'#',content:'Lorem idolor sit amet, consectetur adipicing elit.'}
            ]

        }
    },
    components:{
        Carousel,
        Slide,
        Pagination,
        Navigation,
    }
}
const sliderConfig = () => {
    const myCarousel = ref(null);

    const next=()=>{
        myCarousel.value.next()
    }
    const prev=()=>{
        myCarousel.value.prev()
    }
    return {myCarousel,next,prev}
}



export {sliderData,sliderConfig}