$( document ).ready(function() {
  
  const flowersSlider = new Swiper('.flowers-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 6,
  
    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    //настройки адаптива
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 6,
      }
    }
  });
  
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 1,
  
    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://images.unsplash.com/photo-1597720301887-dc3e3bd15daf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        opts : {
          caption : 'First caption',
          thumb   : 'https://images.unsplash.com/photo-1597720301887-dc3e3bd15daf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        }
      },
      {
        src  : 'https://images.unsplash.com/photo-1607620510353-472b58f965c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://images.unsplash.com/photo-1607620510353-472b58f965c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

  $("#review-2").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://images.unsplash.com/photo-1591963944277-fe153988e471?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
        opts : {
          caption : 'First caption',
          thumb   : 'https://images.unsplash.com/photo-1591963944277-fe153988e471?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80'
        }
      },
      {
        src  : 'https://images.unsplash.com/photo-1591963943995-78194c158aea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://images.unsplash.com/photo-1591963943995-78194c158aea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

  $("#review-3").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80',
        opts : {
          caption : 'First caption',
          thumb   : 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80'
        }
      },
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

});