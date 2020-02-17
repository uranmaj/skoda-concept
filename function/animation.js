$(function() {
    var controller = new ScrollMagic.Controller();

    var whiteToBlackNav = new gsap.to('.navbar a', 0.01, {
        css: {color: "black", fontWeight: "800"}
        
    });

    var blackToWhiteNav = new gsap.to('.navbar a', 0.01, {
        css: {color: "rgb(216, 216, 216)",fontWeight: "500"}
        
    });

    var whiteToBlackNavScene = new ScrollMagic.Scene({
        triggerElement: '.white-div',
        triggerHook: 0.18
    })
    .setTween(whiteToBlackNav)
    //.addIndicators()
    .addTo(controller);

    var blackToWhiteNavScene = new ScrollMagic.Scene({
        triggerElement: "#zadnjiSection",
        triggerHook: 0.18
    })
    .setTween(blackToWhiteNav)
    //.addIndicators()
    .addTo(controller)

    
    var scrollPreview = gsap.timeline()
        .from("#reveal1", {opacity: 0, y:100, duration: 1})
        .from("#reveal2", {opacity: 0, y:100, duration: 1})
        .from("#reveal3", {opacity: 0, y:100, duration: 1})


    var octaviaPewview = new ScrollMagic.Scene({
        triggerElement: '.octavia-side',
        duration: 1000,
        triggerHook: 0,
        
        
    })
    .setTween(scrollPreview)
    .setPin('.octavia-side')
    .addIndicators()
    .addTo(controller);



});

