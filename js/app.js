$(function () { 

    var controller = new ScrollMagic.Controller();

    var octaviaArrivesTween = gsap.from("#blue-octavia", { x:-1500, duration: 1});

    var scrollPreview = gsap.timeline()
        //.from("#blue-octavia", { x:-1500, duration: 1})
        .to("#short-description", {opacity: 0, y:100, duration: 0.4})
        .from("#property-1", {opacity: 0, y:-100, duration: 1})
        .to("#property-1", {opacity: 0, y:100, duration: 0.4})
        .from("#property-2", {opacity: 0, y:-100, duration: 1})
        .to("#property-2", {opacity: 0, y:100, duration: 0.4})
        .from("#property-3", {opacity: 0, y:-100, duration: 1})
        .to("#property-3", {opacity: 0, y:100, duration: 0.4})
        .from("#property-4", {opacity: 0, y:-100, duration: 1})
        .to("#property-4", {opacity: 0, y:100, duration: 0.4})
        .from("#live-like-you", {opacity: 0, y:-100, duration: 1.5})
        .to("#octavia-button", {opacity: 1, duration: 0})
        .to("#blue-octavia", { x:1500, duration: 2});
    
    var octaviaArrives = new ScrollMagic.Scene({
        triggerElement: '#trigger',
        duration: 1000,
        triggerHook: 0.45
    })
    .setTween(octaviaArrivesTween)
    //.addIndicators()
    .addTo(controller);

    var octaviaPewview = new ScrollMagic.Scene({
        triggerElement: '#trigger',
        duration: 4000,
        triggerHook: 0,
    })
    .setTween(scrollPreview)
    .setPin('#trigger')
    //.addIndicators()
    .addTo(controller);


    

});