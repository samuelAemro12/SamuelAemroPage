document.querySelectorAll("img, .footer-link, button").forEach(function(element) {
    element.addEventListener("click", function() {
      clickAnimation(this);
    });
  });
  
  function clickAnimation(element) {
    element.classList.add("pressed");
    setTimeout(function() {
      element.classList.remove("pressed");
    }, 100);
  }