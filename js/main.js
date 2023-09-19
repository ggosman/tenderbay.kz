// BURGER MENU

$(document).ready(function () {
   $('.header_burger').click(function (event) {
      $('.header_burger,.nav').toggleClass('active');
      $('.header__arrow-img-img').toggleClass('header__arrow-img-img-img');
      $('body').toggleClass('lock');
   });
});

$(document).ready(function () {
   $('.header__arrow-first').click(function (event) {
      $('.header__arrow-img-img-first').toggleClass('header__arrow-img-img-rotate-first');
   });
});

$(document).ready(function () {
   $('.header__arrow-second').click(function (event) {
      $('.header__arrow-img-img-second').toggleClass('header__arrow-img-img-rotate-second');
   });
});

// HEADER

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
   $('.header__arrow-first').click(function (e) {
      e.preventDefault();
      $('.first__visible').toggleClass("first__visible-new");
   });

   $('.header__arrow-second').click(function (e) {
      e.preventDefault();
      $('.second__visible').toggleClass("second__visible-new");
   });

} else {
   $('.header__arrow-first').hover(function (e) {
      e.preventDefault();
      $('.first__visible').toggleClass("first__visible-new");
   });

   $('.header__arrow-second').hover(function (e) {
      e.preventDefault();
      $('.second__visible').toggleClass("second__visible-new");
   });
}


// SWIPER

var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3.8,
   spaceBetween: 16,
   slidesPerGroup: 4,
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      type: "fraction",
   },
});

// ТАЙМЕР ОБРАТНОГО ОТСЧЕТА

// let timer = document.querySelectorAll('.time')

// for (let buttonItem of timer) {

//    function counts() {

//       let date = new Date('Jan 1 2023 00:00:00')
//       let date = new Date(document.querySelector('.time').dataset.time)
//       console.log(date);

//       let now = new Date();
//       let gap = date - now;


//       document.getElementsByClassName('time').innerHTML = now;

//       let days = Math.floor(gap / 1000 / 60 / 60 / 24);
//       let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
//       let minuts = Math.floor(gap / 1000 / 60) % 60;
//       let seconds = Math.floor(gap / 1000) % 60;

//       document.getElementsByClassName('d').innerText = days + ':';
//       document.getElementsByClassName('h').innerText = hours + ':';
//       document.getElementsByClassName('m').innerText = minuts + ':';
//       document.getElementsByClassName('s').innerText = seconds;
//    }

//    setInterval(counts, 1000);

//    counts();
// }


function timer(elem) {
   const finish = new Date(elem.dataset.finish);
   const timer = setInterval(timer_tick, 1000);

   function timer_tick() {
      var diff = finish - Date.now();
      diff = Math.floor(diff / 1000);
      if (diff <= -1) {
         clearInterval(timer)
         $(elem).css("color", "#8C213A");
         return false;
      }

      //секунды
      var s = diff % 60;
      $(elem).find(".seconds_1").html(Math.floor(s / 10));
      $(elem).find(".seconds_2").html(s % 10);

      //минуты
      var m = Math.floor(diff / 60) % 60;
      $(elem).find(".minutes_1").html(Math.floor(m / 10));
      $(elem).find(".minutes_2").html(m % 10);
      //часы

      var h = Math.floor(diff / 3600) % 24;
      $(elem).find(".hours_1").html(Math.floor(h / 10));
      $(elem).find(".hours_2").html(h % 10);
      //дни
      var d = Math.floor(diff / 3600 / 24);
      $(elem).find(".days_1").html(Math.floor(d / 10));
      $(elem).find(".days_2").html(d % 10);
   }
}


$(".timer").each(function () {
   timer(this)
});

// ПРИКРЕПЛЕНИЕ ФАЙЛА

$(document).ready(function () {
   $('input[type="file"]').change(function () {
      var value = $("input[type='file']").val();
      $('.js-value').text(value);
   });
});