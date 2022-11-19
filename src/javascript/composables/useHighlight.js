import HighlightCard from "../components/HighlightCard.vue";

export default {
    components:{HighlightCard},
    data(){
        return{
            highlight_info:[
                {
                    id:1,
                    userImg:'./assets/man.svg',
                    date:'AUG 22, 2022',
                    author:'hooman',
                    imgSrc:'https://v2.cimg.co/news/71179/65561/responsive-images/adobestock-479298600___media_library_original_600_399.jpg',
                    category:'Technology',
                    title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto!'
                    ,
                    description:'Lorem ipsum dolor sit amet, cotur adipisicing elit. Alias asperiores consequuntur, dolor eaque eos ex fugit itaque nea quis, reprehende.'
                },
                {
                    id:2,
                    isFilm:true,
                    userImg:'./assets/man-1.svg',
                    date:'SEP 07, 2022',
                    author:'Thomas',
                    imgSrc:'https://v2.cimg.co/news/71181/65562/responsive-images/webp-net-resizeimage___media_library_original_600_399.jpg',
                    category:'Games',
                    title:'Lorem ipsum dolor sit amet, consetur adipisic elit.'
                    ,
                    description:'Lorem ipsum dolor sit amctetur adipisicing elit. Alias asperiores consequuntur, dolor eaque eos ex fugit itaque neque obcaecati possimus quia quis, reprehende.'
                },
                {
                    id:3,
                    userImg:'./assets/man-2.svg',
                    date:'DEC 01, 2022',
                    author:'Watson',
                    imgSrc:'https://v2.cimg.co/news/70038/60960/responsive-images/adobestock-sergei-simanovic-1-1___media_library_original_600_400.jpg',
                    category:'Bitcoin',
                    title:'Lorem ipsum dolor sit amet,lorem lorem consetur adipisic elit.'
                    ,
                    description:'Lorem ipsum dolor sit amctetur adipisicing elit. Alias asperiores consequuntur, dolor eaque eos ex fugit itaque neque obreprehende.'
                },
                {
                    id:4,
                    userImg:'./assets/girl.svg',
                    date:'JUL 15, 2022',
                    author:'Ashton',
                    imgSrc:'https://v2.cimg.co/news/68454/54647/responsive-images/adobestock-390495625___media_library_original_600_391.jpg',
                    category:'Economy',
                    title:'Lorem ipsum dolor sit amet,lorem .'
                    ,
                    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor expedita illo odio quo tenetur voluptas voluptatem. Eligendi, maxime, quibusdam!'
                },
                {
                    id:5,
                    isVoice:true,
                    audioLink:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                    userImg:'./assets/man-3.svg',
                    date:'DEC 01, 2022',
                    author:'Dexter',
                    imgSrc:'https://v2.cimg.co/news/68989/57041/responsive-images/adobestock-94708831___media_library_original_600_400.jpg',
                    category:'Bitcoin',
                    title:'Lorem ipsum dolor sit amet,lorem lo adipisic elit.'
                    ,
                    description:'Lorem ipsum dolor sit amctetur adipisicing elit. Alias asperiores consequuntur, dolor eaque eos ex .'
                },
                {
                    id:6,
                    userImg:'./assets/girl-1.svg',
                    date:'JUN 22, 2022',
                    author:'Debra',
                    imgSrc:'https://v2.cimg.co/news/69744/60296/responsive-images/adobestock-180523453___media_library_original_600_389.jpg',
                    category:'Games',
                    title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto!'
                    ,
                    description:'Lorem ipsum dolor sit amet, cotur adipisicing elit. Alias asperiores consequuntur, dolor eaque eos ex fugit itaque nea quis, reprehende.'
                },
            ]
        }
    }
}