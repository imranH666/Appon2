
$('.banner-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  

  $('.screenshort-main').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });





  $('.feedback-display').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.feed-profile'
  });
  $('.feed-profile').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.feedback-display',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  








  
