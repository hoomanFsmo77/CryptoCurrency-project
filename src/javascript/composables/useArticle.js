import ArticleCard from "../components/ArticleCard.vue";

export default {
    data(){
        return{
            article_info:[
                {
                    id:1,
                    feature:true,
                    category:'Cardano',
                    img:'https://v2.cimg.co/news/90170/226068/responsive-images/michael-fortsch-6ciqxsggam-unsplash___media_library_original_600_400.jpg',
                    height:'560px',
                    userSrc:'./assets/man.svg',
                    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda consequuntur cumque.',
                    title:'Lorem ipsum dolor sit amet, consec adipisici.',
                    author:'hooman',
                    date:'SEP 07, 2022',
                    time:'5 min read'
                },
                {
                    id:2,
                    feature:false,
                    category:'NFT',
                    img:'https://v2.cimg.co/news/89395/224374/responsive-images/nft-g3b1347f55-640___media_library_original_600_337.jpg',
                    height:'275px',
                    userSrc:'',
                    isSmall:true,
                    title:'Lorem ipsum dolor sit amet, consec adipisici.',
                    author:'Thomas',
                    date:'AUG 01, 2022',
                },
                {
                    id:3,
                    feature:false,
                    category:'Cybercrime',
                    img:'https://v2.cimg.co/news/90083/225800/responsive-images/adobestock-213931104___media_library_original_600_397.jpeg',
                    height:'275px',
                    userSrc:'',
                    isSmall:true,
                    title:'Lorem ipsum dolor sit amet, consec adipisici.',
                    author:'Thomas',
                    date:'AUG 01, 2022',
                    grid:true
                }
            ]
        }
    },
    components:{ArticleCard},
}