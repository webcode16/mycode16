const body = document.body,
      jsScroll = document.getElementsByClassName('js-scroll')[0],
      speed = 0.04; // Adjust this value to change the scrolling speed

var offset = 0;

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    jsScroll.style.transform = scroll;

    requestAnimationFrame(smoothScroll);
}

smoothScroll();



