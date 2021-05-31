$(function() {
    //nicescroll plugin 
   $("body").niceScroll({
        cursorcolor:"#f7600e",
        cursorwidth:"10px",
        cursorborder: "1px solid #f7600e "
    });
    // Change header height 
    $("header").height($(window).height());
    // Scroll to features
    $(".header .arrow i").click(function(){
        $("html,body").animate({
            scrollTop: $(".features").offset().top
        },1000);
    });
    // scroll to hire us 
    $(".hire").click(function(){
        $("html,body").animate({
            scrollTop: $(".contact").offset().top
        },1000);
    });
    // show hidden images
    $(".show-more").click(function () { 
        if ( $(".show-more").text() === "Show More") {
            $(".our-work .hidden").fadeIn(2000);
            $(".show-more").text("Show less");
        } else if ( $(".show-more").text() === "Show less") {
            $(".our-work .hidden").fadeOut(1000);
            $(".show-more").text("Show More");
        }
     });
     // check testim 
     var leftArrow = $(".testim .fa-chevron-circle-left")
     var rightArrow = $(".testim .fa-chevron-circle-right");
     function checkClients() {
         if ($(".client:first").hasClass("active")) {
          leftArrow.fadeOut()    
         } else {
             leftArrow.fadeIn()
         }
         if ($(".client:last").hasClass("active")) {
            rightArrow.fadeOut()    
           } else {
               rightArrow.fadeIn()
           }
     }
     checkClients()
     $(".testim i").click(function () {
         if($(this).hasClass("fa-chevron-circle-right")) {
             $(".testim .active").fadeOut(100,function () {
                 $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                 checkClients()
             })
         } else {
            $(".testim .active").fadeOut(100,function () {
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                checkClients()
            }) 
         }
     })
});