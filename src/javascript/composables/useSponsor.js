import {ref,reactive} from "vue";
export default ()=>{
    let sponsorNewsData=reactive([
        {
            id:1,
            img:'https://v2.cimg.co/news/90914/227703/responsive-images/shiba-inu___media_library_original_600_337.jpg',
            authorName:'hooman',
            icon:'./assets/man.svg',
            date:'DEC 28, 2022',
            catName:'Bitcoin',
            catType:'cat-blue',
            title:'Lorem ipsum dolor sit amet, conetur adicing.'
        },
        {
            id:2,
            img:'https://v2.cimg.co/news/90955/227782/responsive-images/image0-18___media_library_original_600_365.jpg',
            authorName:'hooman',
            icon:'./assets/man-1.svg',
            date:'DEC 28, 2022',
            catName:'NFT',
            catType:'cat-info',
            title:'Lorem ipsum dolor sit amet, conetur adicing.'
        },
        {
            id:3,
            img:'https://v2.cimg.co/news/90940/227741/responsive-images/tether___media_library_original_600_337.jpeg',
            authorName:'hooman',
            icon:'./assets/man-2.svg',
            date:'DEC 28, 2022',
            catName:'Cybercrime',
            catType:'cat-dark',
            title:'Lorem ipsum dolor sit amet, conetur adicing.'
        },
        {
            id:4,
            img:'https://v2.cimg.co/news/90917/227710/responsive-images/binance-logo___media_library_original_600_400.jpeg',
            authorName:'hooman',
            icon:'./assets/man-3.svg',
            date:'DEC 28, 2022',
            catName:'Binance',
            catType:'cat-success',
            title:'Lorem ipsum dolor sit amet, conetur adicing.'
        },
        {
            id:5,
            img:'https://v2.cimg.co/news/90886/227680/responsive-images/adobestock-484969704-editorial-use-only___media_library_original_600_400.jpeg',
            authorName:'hooman',
            icon:'./assets/man-3.svg',
            date:'DEC 28, 2022',
            catName:'Corona',
            catType:'cat-warning',
            title:'Lorem ipsum dolor sit amet, conetur adicing.'
        },
        {
            id:6,
            img:'https://v2.cimg.co/news/90954/227781/responsive-images/adobestock-pixarno-1-1-media-library-original-1200-800___media_library_original_600_400.jpg',
            authorName:'hooman',
            icon:'./assets/girl.svg',
            date:'DEC 28, 2022',
            catName:'Economy',
            catType:'cat-info',
            title:'Lorem ipsum dolor sit amet, conetur adicing.'
        },
        {
            id:7,
            img:'https://v2.cimg.co/news/90732/227246/responsive-images/adobestock-rh2010-1___media_library_original_600_400.jpeg',
            authorName:'hooman',
            icon:'./assets/girl-1.svg',
            date:'DEC 28, 2022',
            catName:'Meta-verse',
            catType:'cat-warning',
            title:'Lorem ipsum dolor sit amet, conetur adicing.'
        },

    ])
    const myCarousel2 = ref(null);

    const next=()=>{
        myCarousel2.value.next()
    }
    const prev=()=>{
        myCarousel2.value.prev()
    }

    return{
        sponsorNewsData,myCarousel2,next,prev
    }
}

