// raindrop
jQuery(".container").raindrops({
    color: "#47d1d6",
    canvasHeight: 60
  });

  // 波紋
  $('.ripples').ripples({
    resolution: 400,
  });

  // ハンバーガーメニュー
  $(function(){
    $('.hamburger-menu-btn').on('click', function(){
      $('.hamburger-menu').toggleClass('is-active');
    });
    $('.humburger-menu-item-btn').on('click', function(){
      $('.hamburger-menu').toggleClass('is-active');
    });
  }());