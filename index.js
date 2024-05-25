const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

gsap.from(".nlink", {
  stagger: .2,
  y: 20,
  duration: 2,
  ease: Power3,
  opacity: 0

})

Shery.textAnimate("#heading h1", {
  style: 2,
  y: 10,
  delay: 0.3,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,

});

gsap.from(".anim2", {
  y: 30,
  ease: Expo,
  duration: 1,
  opacity: 0,
  stagger: .2,
})

gsap.from("#leftanim",{
  y : "3",
  opacity: 0,
  duration: 2,
  ease: Expo.easenInOut,
})
Shery.imageEffect("#leftanim", {
  style: 3,
  config: {
    "uFrequencyX": { "value": 11.57, "range": [0, 100] }, "uFrequencyY": { "value": 4.96, "range": [0, 100] },
    "uFrequencyZ": { "value": 45.45, "range": [0, 100] }, "geovertex": { "range": [1, 64], "value": 18.7 },
    "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.75 },
    "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] },
    "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] },
    "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskval": { "value": 1.56, "range": [1, 5] },
    "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 },
    "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] },
    "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] },
    "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 0.5, "range": [0, 100] }
  },
})
Shery.imageEffect(".img", {
  style: 3,
  debug: true,
});

Shery.imageEffect("#c3div", {
  style: 5,
  gooey: true,
  debug: true,
})