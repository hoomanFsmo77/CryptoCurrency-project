import $ from "jquery";
export  default  {
    nextArrow: $('.spon_next'),
    prevArrow:$('.spon_prev'),
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 3,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 830,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerPadding: '40px',
            }
        }
    ]
}