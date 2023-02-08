// Fade in sections when scrolled to
var headers = document.querySelectorAll(".l-header");

window.addEventListener("scroll", function() {
  headers.forEach(function(header) {
    var headerHeight = header.offsetHeight;
    var headerTop = header.offsetTop;
    var windowTop = window.pageYOffset;

    if (windowTop >= headerTop - headerHeight && windowTop < headerTop + headerHeight) {
      header.style.opacity = 1;
    } else {
      header.style.opacity = 0;
    }
  });
});
