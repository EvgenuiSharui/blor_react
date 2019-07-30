
  import React from 'react';
  import Swiper from 'react-id-swiper';

  const FadeEffect = () => {
    const params = {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
      <Swiper {...params}>
        <div><img src="images/11.jpg" alt=""/></div>
        <div><img src="images/10.jpg" alt=""/></div>
        <div><img src="images/9.jpg" alt=""/></div>
        <div><img src="images/8.jpg" alt=""/></div>
        <div>Slide #5</div>
      </Swiper>
    )
  };

  export default FadeEffect;
    
  