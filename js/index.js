new WOW().init()
$(document).ready(function(){
    $(".sou2als_1").owlCarousel({
      items:1,
      lazyLoad:true,
      loop:true,
      margin:10,
      dots: true,
      nav: true,
      navText: ["<span class='carousel-nav-left'><img src='./image/Groupe 66@2x.png'/></span>","<span class='carousel-nav-right'><img src='./image/Groupe 66@2x.png'/></span>"]
  
    });

   
    $(".block-header_top.mobible .icne_mune ").on("click", function () {
      $(this).toggleClass("logo_mune_icone");
      $(".block-header_top.mobible .block-bootn").toggleClass("muneaffeche")
     })
    
  
   
     
     $("#nunewebb a").click(function(){
      $( "#nunewebb a" ).removeClass( "brodr" )
      $(this).addClass("brodr");
    });

});


