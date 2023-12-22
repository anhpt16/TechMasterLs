document.addEventListener("DOMContentLoaded", function () {

  var isFixed = false; 

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY || window.scrollOffset;

    if (scrollPosition > 70) {
      if (!isFixed) {
        menu.style.top = "10px"; 
        isFixed = true;
      }
    } else {
      if (isFixed) {
        menu.style.top = ""; 
        isFixed = false;
      }
    }
  });
});
