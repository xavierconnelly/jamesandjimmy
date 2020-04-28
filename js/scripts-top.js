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
