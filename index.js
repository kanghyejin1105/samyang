$(document).ready(function(){
  $(".gnb_menu>li").mouseenter(function(){
    $(".bg_menu").addClass("move");
  });
  $(".gnb_menu>li").mouseleave(function(){
    $(".bg_menu").removeClass("move");
  });
  
  $(".tab_menu>li").click(function(){
    let list = $(this).index();
    $(".tab_menu_conts>li").stop().fadeOut();
    $(".tab_menu_conts>li").eq(list).stop().fadeIn();
  });

  $(".next").click(function(){
    $(".list").stop().animate({"margin-left":"-200%"},1000,function(){
      $(".list>li:first-child").appendTo(".list");
      $(".list").css({"margin-left":"-100%"});
    });
  });
  $(".prev").click(function(){
    $(".list").stop().animate({"margin-left":"0%"},1000,function(){
      $(".list>li:last-child").prependTo(".list");
      $(".list").css({"margin-left":"-100%"});
    });
  });

  $(".family").click(function(){
    $(".family_list").stop().slideDown(600);
  });

  $(".family").mouseleave(function(){
    $(".family_list").stop().slideUp(600);
  });
});