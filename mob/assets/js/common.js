/* 객체화 선언 */

$(document).ready(function(){
      //1. header top language mouse enter event
      var language = (function(){
            var target = $('.language');
            $('.languageWrap').on('mouseenter', function(){
                  $(target).slideDown();
                  $(this).addClass('active');
            }).on('mouseleave', function(){
                  console.log("on");
                  $(target).slideUp();
                  $(this).removeClass('active');
            });
      }());
      //2. pc ver gnb mouse enter event
      var pcGnb = (function(){
            var hoverTarget = $('.gnb > li');
            $(hoverTarget).on('mouseenter focus', function(){
                  $(this).addClass('on');
                  $('.dimed-back').css({'display' : 'block'});
                  $('.gnb2depth').css({'display' : 'block'});
            }).on('mouseleave focusout', function(){
                  $(this).removeClass('on');
                  $('.gnb2depth').css({'display' : 'none'});
                  $('.dimed-back').css({'display' : 'none'});
            });
      }());
      //3. pc mainvisual slide
      var mainVisual = (function(){
            var swiper = new Swiper('.visualContainer', {
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  },
                  pagination: {
                        el: '.swiper-pagination',
                  },
                  loop: true,
                  speed:800,
                  autoplay: true,
            });
      }());
      //4. main searcing tab
      var searchingTabs = (function(){
            $('.tabContent').hide();
            $('.tabContent:first-child').show();
            $('.tabs .tabLink:first-child').addClass('active');

            $('ul.hotelTab li').on('click', function(){
                  $('ul.hotelTab li').removeClass('active');
                  $(this).addClass('active');
                  $('.tabContent').hide();
                  var activeTab = $(this).attr('data-tab');
                  $('#' + activeTab).fadeIn();
            });
      }());
      //5. check in out javascript
      var check = (function(){
            var dateInputs = document.querySelectorAll('input[type=date].checkinout');
            dateInputs && dateInputs.forEach( function(element) {
                  element.onchange = function() {
                        if ( this.value != '' ) {
                              var date = this.value.split('-').join('/');
                              this.parentElement.childNodes[0].data = new Date(date).toLocaleDateString();
                        }
                        else {
                              this.parentElement.childNodes[0].data = this.parentElement.dataset.text;
                        }
                  };
            });
      })();
      //6. check night click event
      var choiceReports = (function(){
            $('.dropBox').on('click', function(){
                  $(this).find('.options').slideToggle();
            });
      }());
      //7.life style mouseenter mouseleave event
      var lifeStyle = (function(){
            $('.lifeContainer li').on('mouseenter focus', function(){
                  $(this).find('.hover').fadeIn();
            });
            $('.hover').on('mouseleave foucsout', function(){
                  $(this).fadeOut();
            });
            $('.lifeContainer').on('mouseleave foucsout', function(){
                  $('li .hover').fadeOut();
            });
      }());
      //8. subpage navigation mouseenter mouseleave event
      var subNavi = (function(){
            var target = $('.navdepth');
            $('.navdepth').on('mouseenter', function(){
                  if($(target).children('.nav2depth')){
                        $('.nav2depth').slideDown();
                  }else{
                        $('.nav2depth').css({'display' : 'none'});
                  }
            });
            $('.nav2depth').mouseleave(function(){
                  $(this).slideUp();
            });
      }());
      //9.sub page gallery tab
      var galleryTabs = (function(){
            $('.tabContent').hide();
            $('.tabContent:first-child').show();
            $('.tabs .tabLink:first-child').addClass('active');

            $('ul.galleryTab li').on('click', function(){
                  $('ul.galleryTab li').removeClass('active');
                  $(this).addClass('active');
                  $('.tabContent').hide();
                  var activeTab = $(this).attr('data-tab');
                  $('#' + activeTab).fadeIn();
            });
      }());
      //10. sub gallery slider
      var wedding = (function(){
            var weddingSlide = new Swiper('.weddingContainer', {
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  },
                  speed:800,
                  loop: true,
                  autoplay: true,
            });
      }());
      //11.main gallery slider
      var pcGallery = (function () {
            var galleryTop = new Swiper('.gallery-top', {
                  navigation: {
                        nextEl: '.gallery-button-next',
                        prevEl: '.gallery-button-prev',
                  },
                  spaceBetween: 15,
                  loop:false,
                  autoplay: true,
                  speed:600,
            });
            var galleryText = new Swiper ('.gallery-text',{
                  navigation: {
                        nextEl: '.gallery-button-next',
                        prevEl: '.gallery-button-prev',
                  },
                  loop:false,
                  autoplay:false,
                  speed:600,
            });
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                  grabCursor: false,
                  slideToClickedSlide: false,
                  touchRatio:0,
            });
            galleryThumbs.on('tap click', function () {
                  galleryTop.slideTo(galleryThumbs.clickedIndex);
                  galleryText.slideTo(galleryThumbs.clickedIndex)
            });
      }());
      //11-2. main gallery thumbnail hover js
      $('.gallery-thumbs .swiper-slide').on('mouseenter focus', function(){
            $(this).find('.thumbhover').show();
      }).on('mouseleave blur', function(){
            $(this).find('.thumbhover').hide();
      });
      // * mobile ver javascript start *
      //1. gnb
      var mobGnb = (function(){
            $('.navTop .hamburger').on('click', function(){
                  $('.mobNav').toggleClass('on');
            });
      }());
      var mobDepth = (function(){
            $('.mobGnb li').on('click', function(){
                  $(this).find('a').toggleClass('active');
                  $(this).find('.mob2depth').slideToggle();
            });
      }());
      //1-2. gnb - language menu
      var mobileLanguage = (function(){
            $('.mobLang > p').on('click', function(){
                  $('.mobLang').find('.language').slideToggle();
            });
      }());
      //2. mobile main visual
      var mobVisual = (function(){
            var mobSlide = new Swiper('.mobVisual', {
                  loop: true,
                  speed:800,
                  autoplay: true,
                  slidesPerView:1,
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  },
                  pagination: {
                        el: '.swiper-pagination',
                  },
                  breakpoints: {
                        720: {
                              slidesPerView: 1
                        }
                  }
            });
      }());
      //3. mobile main gallery slider
      var mobVertical = (function () {
            var galleryTop = new Swiper('.verticalContainer', {
                  navigation: {
                        nextEl: '.vertical-button-next',
                        prevEl: '.vertical-button-prev',
                  },
                  spaceBetween: 10,
                  loop:true,
                  autoplay: true,
                  speed:800,
            });
            var galleryThumbs = new Swiper('.verticalThumbs', {
                  spaceBetween: 10,
                  grabCursor: true,
                  slidesPerView: 10,
                  slideToClickedSlide: true
            });
            galleryThumbs.on('tap click', function () {
                  galleryTop.slideTo(galleryThumbs.clickedIndex);
            });
      }());
      //4.mobile main hotel service slider
      var mobService = (function(){
            var mobHotel = new Swiper('.serviceContainer', {
                  pagination: {
                        el: '.service-pagination',
                        clickable : true
                  },
                  loop: true,
                  speed:800,
                  autoplay: true,
            });
      }());
      //5. mobile sub gallery slider + tab
      var galleryTabs = (function(){
            $('.tabContent').hide();
            $('.tabContent:first-child').show();
            $('.galleryTab li:first-child').addClass('active');

            $('ul.galleryTab li').on('click', function(){
                  $('ul.galleryTab li').removeClass('active');
                  $(this).addClass('active');
                  $('.tabContent').hide();
                  var activeTab = $(this).attr('data-tab');
                  $('#' + activeTab).fadeIn();
            });
      }());
      var mobGallery = (function(){
            var gallerys = new Swiper ('.mgContainer', {
                  navigation: {
                        nextEl: '.mg-button-next',
                        prevEl: '.mg-button-prev',
                  },
                  loop:true,
                  autoplay: true,
                  speed:800,
            });
      }());
      //6. faq list button click js
      var dropdown = (function(){
            $('.defaultValue').on('click', function(){
                  console.log('클릭');
                  $('.options').slideToggle('.active');
            });
      }());
      //7. faq.html popup modal
      var onlineviewModal = (function(){
            var clickTarget = $('.view_input > input');
            $(clickTarget).on('click', function(){
                  console.log("히?");
                  $('.popup_area').css({'display':'block'});
                  $('.popup').css({'display':'block'});
            });
            $('.popup_close').on('click', function(){
                  $('.popup_area').css({'display':'none'});
                  $('.popup').css({'display':'none'});
            });
            $('.popup_button').on('click', function(){
                  $('.popup_area').css({'display':'none'});
                  $('.popup').css({'display':'none'});
            });
      }());
      //8.faqwrite.html popup modal
      var write = (function(){
            var clickTarget = $('.view_input > input');
            $(clickTarget).on('click', function(){
                  console.log("히?");
                  $('.popup_area').css({'display':'block'});
                  $('.popup').css({'display':'block'});
            });
            $('.popup_close').on('click', function(){
                  $('.popup_area').css({'display':'none'});
                  $('.popup').css({'display':'none'});
            });
            $('.popup_button').on('click', function(){
                  $('.popup_area').css({'display':'none'});
                  $('.popup').css({'display':'none'});
            });
      }());
});//end