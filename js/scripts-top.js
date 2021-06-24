// Load Content with AJAX
$(document).ready(function() {
  $('#bottomnav').load('./bottomnav.html');
  $('#jamesnews').load('./news.txt');
  $('#jamesbio').load('./about.txt');
  $('#jamescontact').load('./contact.txt');
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
