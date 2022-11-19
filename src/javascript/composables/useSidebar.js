import {reactive} from "vue";

export default ()=>{
    let trendInfo=reactive([
        {id:1,imgSrc:'https://v2.cimg.co/news/90594/226946/responsive-images/adobestock-32635219___media_library_original_600_400.jpeg',title:'Cybercrime'},
        {id:2,imgSrc:'https://v2.cimg.co/news/90494/226781/responsive-images/adobestock-gguy-1___media_library_original_600_400.jpeg',title:'Coinbase'},
        {id:3,imgSrc:'https://v2.cimg.co/news/90598/226948/responsive-images/adobestock-jhvephoto-1___media_library_original_600_372.jpeg',title:'Corona'},
        {id:4,imgSrc:'https://v2.cimg.co/news/90457/226733/responsive-images/adobestock-ugiss-1___media_library_original_600_400.jpeg',title:'Government policy'},
        {id:5,imgSrc:'https://v2.cimg.co/news/90319/226424/responsive-images/adobestock-179531844___media_library_original_600_312.jpeg',title:'Ethereum'}
    ])
    let recentPostInfo=reactive([
        {id:1,imgSrc:'https://v2.cimg.co/news/90930/227737/responsive-images/xrp-price-prediction-3-reasons-why-xrp-can-hit-5-in-2023___media_library_original_600_400.jpg',date:'May 17, 2022',title:'Lorem ipsum dolor sit amet, consectetur.'},
        {id:2,imgSrc:'https://v2.cimg.co/news/90954/227781/responsive-images/adobestock-pixarno-1-1-media-library-original-1200-800___media_library_original_600_400.jpg',date:'May 17, 2022',title:'Lorem ipsum dolor sit amet, consectetur.'},
        {id:3,imgSrc:'https://v2.cimg.co/news/90884/227676/responsive-images/tama-nft-cards___media_library_original_600_413.jpg',date:'May 17, 2022',title:'Lorem ipsum dolor sit amet, consectetur.'},
        {id:4,imgSrc:'https://v2.cimg.co/news/90886/227680/responsive-images/adobestock-484969704-editorial-use-only___media_library_original_600_400.jpeg',date:'May 17, 2022',title:'Lorem ipsum dolor sit amet, consectetur.'},
        {id:5,imgSrc:'https://v2.cimg.co/news/70601/63115/responsive-images/adobestock-480408666___media_library_original_600_400.jpg',date:'May 17, 2022',title:'Lorem ipsum dolor sit amet, consectetur.'},
    ])
    return {trendInfo,recentPostInfo}

}