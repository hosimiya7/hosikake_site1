$(document).ready(function() {

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
  });

  // アコーディオンメニュー
  $(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_07 .accordion_one .accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });
  });

  // スライダー
  const items = document.querySelectorAll('.slider-item');
    const itemCount = items.length;
    const nextItem = document.querySelector('.next');
    const previousItem = document.querySelector('.previous');
    let count = 0;

    function showNextItem() {
      items[count].classList.remove('active');

      if(count < itemCount - 1) {
        count++;
      } else {
        count = 0;
      }

      items[count].classList.add('active');
      console.log(count);
    }

    function showPreviousItem() {
      items[count].classList.remove('active');

      if(count > 0) {
        count--;
      } else {
        count = itemCount - 1;
      }

      items[count].classList.add('active');
      console.log(count);
    }

    function keyPress(e) {
      e = e || window.event;

      if (e.keyCode == '37') {
        showPreviousItem();
      } else if (e.keyCode == '39') {
        showNextItem();
      }
    }

    nextItem.addEventListener('click', showNextItem);
    previousItem.addEventListener('click', showPreviousItem);
    document.addEventListener('keydown', keyPress);

});