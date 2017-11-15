$(function() { // wait for document ready
  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tween = TweenMax.to("#pinned-target1", 1, {
    rotation: 360,
    ease: Linear.easeNone
  });

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#projects", duration: 300}).setTween(tween).setPin("#pinned-target1", {pushFollowers: false}).addIndicators(). // add indicators (requires plugin)
  addTo(controller);
});
