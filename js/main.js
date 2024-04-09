//Go to top
$(document).ready(function() {
    window.onscroll = function() {
      var scrollToTopButton = $("#go-to-top");
      if ($(window).scrollTop() > 20) {
        scrollToTopButton.fadeIn();
      } else {
        scrollToTopButton.fadeOut();
      }
    };

    $("#go-to-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
  });

// change img
function changeImg(id){
    let imgPath = document.getElementById(id).getAttribute('src');
    document.getElementById('img-main').setAttribute('src', imgPath);
}

//cart
function cong(id) {
  var value = document.getElementById(`text_so_luong-${id}`).value
  document.getElementById(`text_so_luong-${id}`).value = parseInt(value) + 1;
}
function tru(id) {
  var value = document.getElementById(`text_so_luong-${id}`).value
  if(parseInt(value) > 1)
  {
      document.getElementById(`text_so_luong-${id}`).value = parseInt(value) - 1;
  }
  
}

function xoa(id) {
  $(`.cart-body-row-${id}`).fadeOut();
}

const trungne = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.item-manager')
const panes = $$('.item-detail')
console.log(tabs)
tabs.forEach(function(tab, index) {
  const pane = panes[index]
  tab.onclick = function() {
      trungne('.item-manager.active').classList.remove('active')
      trungne('.item-detail.active').classList.remove('active')
      this.classList.add('active')
      pane.classList.add('active')
  }
})

$(document).ready(function(){
  $(window).resize(function() {
      if($(window).width() < 739) {
          $('.collapse').removeClass('show');
      }
      else
      {
          $('.collapse').addClass('show');
      }
  });
  // click mega menu
  $('.header_nav-list .header_nav-list-item a').click(function() {
      $('.header_nav-list-item a').removeClass('active');
      $(this).addClass('active');
  });
  $('.ng-has-child1 > a i').click(function(e){
      e.preventDefault();
      $('.ul-has-child1').toggle('slow');
      $('.cong').toggleClass('hidden');
      $('.tru').toggleClass('hidden');
  })
 
  $('.ng-has-child2 > a i').click(function(e){
      e.preventDefault();
  })
  $('#trigger-mobile').click(function(e){
      $('.mobile-main-menu').toggleClass('xyz');
      $('.overlay').toggleClass('hidden');
  })
  $('.overlay').click(function(e){
      $('.mobile-main-menu').toggleClass('xyz');
      $('.overlay').toggleClass('hidden');
  })
  // click thông tin đơn hàng trang pay
  $('.summary').click(function(){
      $('.summary-content').toggle('slow');
  })
})
function hienthi(id, name){
  $(`#${name}`).toggle('slow');
  $(`.cong${id}`).toggleClass('hidden');
  $(`.tru${id}`).toggleClass('hidden');
}
