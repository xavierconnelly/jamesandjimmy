// Load Content with AJAX
$(document).ready(function() {
  $('footer').load('https://jamesandjimmy.com/bottomnav.html');
  $('#jamesnews').load('https://jamesandjimmy.com/news.txt');
  $('#jamesbio').load('https://jamesandjimmy.com/about.txt');
  $('#jamescontact').load('https://jamesandjimmy.com/contact.txt');
});

// Mobile Slideshow
$("#slideshow > div:gt(0)").hide();
	setInterval(function() {
		$('#slideshow > div:first')
		  .fadeOut(1000)
		  .next()
		  .fadeIn(1000)
		  .end()
		  .appendTo('#slideshow');
		}, 3000
);

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})
