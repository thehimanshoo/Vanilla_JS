/*
                        jQuery Effects
                           -----------------

            show()
            hide()
            toggle()
            fade()
            fadeToggle()
            slide()
            slideToggle()  
            animate()
            clearQueue()
            delay()
            dequeue()
            fadeToggle()
            fadeIn()
            fadeOut()
            fadeTo()
            slideUp()
            slideDown()
            stop() etc...       
*/


$(function () {

    // ______________ jQuery Effects [show()] ______________
    $("#show").click(function show() {
        $("#showImg").show();
    });


    // ______________ jQuery Effects [hide()] ______________
    $("#hide").click(function hide() {
        $("#hideImg").hide();
    });


    // ______________ jQuery Effects [toggle()] ______________
    $("#toggle").click(function toggle() {
        $("#toggleImg").toggle();
    });


    // ______________ jQuery Effects [fade()] ______________
    $("#fade").click(function fade() {
        $("#fadeImg").fade();
    });


    // ______________ jQuery Effects [finish()] ______________
    $(document).ready(function() {
        $("#finishImg").animate({height : "150"}, 3000);
        $("#finishImg").animate({width : "150"}, 3000);
        
        $("#finish").click(function() {
            $("#finishImg").finish();
        });
    })


    // ______________ jQuery Effects [slide()] ______________
    $("#slide").click(function slide() {
        $("#slideImg").slide();
    });


    // ______________ jQuery Effects [slideToggle()] ______________
    $("#slideToggle").click(function slideToggle() {
        $("#slideToggleImg").slideToggle();
    });


    // ______________ jQuery Effects [fadeToggle()] ______________
    $("#fadeToggle").click(function fadeToggle() {
        $("#fadeToggleImg").fadeToggle();
    });


    // ______________ jQuery Effects [clearQueue()] ______________
    $(document).ready(function() {
        $("#clearQueueImg").animate({height : "150"}, 3000);
        $("#clearQueueImg").animate({width : "150"}, 3000);
        
        $("#clearQueue").click(function() {
            $("#clearQueueImg").stop();
        });
    })


    // ______________ jQuery Effects [delay()] ______________
    $("#delay").click(function delay() {
        $("#delayImg").delay("slow").fadeIn();
        $("#delayImg").delay("fast").fadeOut();
    });


    // ______________ jQuery Effects [dequeue()] ______________
    $(document).ready(function(){
        $("#dequeue").click(function(){
          var img = $("#dequeueImg");  
          img.animate({height: 300}, "slow");
          img.animate({width: 300}, "slow");
          img.queue(function(){
            img.css("background-color", "red");  
            img.dequeue();
          });
          img.animate({height: 100}, "slow");
          img.animate({width: 100}, "slow");
        });
      });


    // ______________ jQuery Effects [animate()] ______________
    $("#animate").click(function animate() {
        $("#animateImg").animate({height: "150px"},150);
        $("#animateImg").animate({width: "150px"},150);
    });


    // ______________ jQuery Effects [fadeIn()] ______________
    $("#fadeIn").click(function fadeIn() {
        $("#fadeInImg").fadeIn();
    });


    // ______________ jQuery Effects [fadeOut()] ______________
    $("#fadeOut").click(function fadeOut() {
        $("#fadeOutImg").fadeOut();
    });


    // ______________ jQuery Effects [fadeTo()] ______________
    $("#fadeTo").click(function fadeTo() {
        $("#fadeToImg").fadeTo(1000,0.1);
    });


    // ______________ jQuery Effects [slideUp()] ______________
    $("#slideUp").click(function slideUp() {
        $("#slideUpImg").slideUp();
    });


    // ______________ jQuery Effects [slideDown()] ______________
    $("#slideDown").click(function slideDown() {
        if($("#slideDownImg").slideUp()){
            $("#slideDownImg").slideDown();
            alert("first SlideUp to apply SlideDown effect");
        }
    });


    // ______________ jQuery Effects [stop()] ______________
    $(document).ready(function() {
        $("#stopImg").animate({height : "150"}, 3000);
        $("#stopImg").animate({width : "150"}, 3000);
        
        $("#stop").click(function() {
            $("#stopImg").stop();
        });
    })
});