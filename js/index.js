

  $(document).ready(function() {
    var $imgList = $('.sqrs>div');
    var nImgCount = $imgList.children().length;
    var nDuration = 1000;
    var bAuto = true;
    var nIndex = 0;

  	
    td();
    te1();
    tu();
    tg();
    te2();
    tl();
    dd();
    ee1();
    uu();
    gg();
    ee2();
    ll();


  
    if(bAuto == true) {
    setInterval(autoSlide, nDuration);
    }
  function autoSlide(){
    var next = (++nIndex% nImgCount);
    $($imgList.get(next-1)).fadeOut(0);
    $($imgList.get(next)).fadeIn(0);
  }
});  


function td(){
  $('.pd').animate({
    left: '-=25px', top: '+=25px'
  }, 1200, function(){
    $('.pd').animate({
      left: '+=25px', top: '-=25px'
    }, 1200, td);
  });
}
function te1(){
  $('.pe1').animate({
    left: '-=25px', top: '+=25px'
  }, 1200, function(){
    $('.pe1').animate({
      left: '+=25px', top: '-=25px'
    }, 1200, te1);
  });
}
function tu(){
  $('.pu').animate({
    left: '-=25px', top: '+=25px'
  }, 1200, function(){
    $('.pu').animate({
      left: '+=25px', top: '-=25px'
    }, 1200, tu);
  });
}
function tg(){
  $('.pg').animate({
    left: '+=25px', top: '-=25px'
  }, 1200, function(){
    $('.pg').animate({
      left: '-=25px', top: '+=25px'
    }, 1200, tg);
  });
}
function te2(){
  $('.pe2').animate({
    left: '-=25px', top: '+=25px'
  }, 1200, function(){
    $('.pe2').animate({
      left: '+=25px', top: '-=25px'
    }, 1200, te2);
  });
}
function tl(){
  $('.pl').animate({
    left: '+=25px', top: '-=25px'
  }, 1200, function(){
    $('.pl').animate({
      left: '-=25px', top: '+=25px'
    }, 1200, tl);
  });
}

  function dd(){
  	$('.d')
  	.animate({
  		width: '+=50px', height: '-=50px'
  	}, 1200, function(){
  		$('.d')
  		.animate({
  			width: '-=50px', height: '+=50px'
  		}, 1200, dd);
  	});
  } 
  function ee2(){
    $('.e2')
    .animate({
      width: '+=50px', height: '-=50px'
    }, 1200, function(){
      $('.e2')
      .animate({
        width: '-=50px', height: '+=50px'
      }, 1200, ee2);
    });
  } 
  function uu(){
    $('.u')
    .animate({
      width: '+=50px', height: '-=50px'
    }, 1200, function(){
      $('.u')
      .animate({
        width: '-=50px', height: '+=50px'
      }, 1200, uu);
    });
  } 
   function gg(){
  	$('.g')
  	.animate({
  		width: '-=50px', height: '+=50px'
    }, 1200, function(){
      $('.g')
      .animate({
        width: '+=50px', height: '-=50px'
      }, 1200, gg);
  	});
  } 
  function ee1(){
    $('.e1')
    .animate({
       width: '+=50px', height: '-=50px'
    }, 1200, function(){
      $('.e1')
      .animate({
        width: '-=50px', height: '+=50px'
      }, 1200, ee1);
    });
  } 
  function ll(){
    $('.l')
    .animate({
      width: '-=50px', height: '+=50px'
    }, 1200, function(){
      $('.l')
      .animate({
        width: '+=50px', height: '-=50px'
      }, 1200, ll);
    });
  } 

