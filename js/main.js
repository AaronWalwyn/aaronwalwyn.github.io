$(document).ready(function(){

	$('li a').on('click', function(e){     e.stopPropagation();	});

	$("#portfolio-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#portfolio").offset().top
	    }, 2000);
	});

	$("#resume-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#resume").offset().top
	    }, 2000);
	});

	$("#home-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#info").offset().top
	    }, 2000);
	});

	$("#contact-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 2000);
	});

	$("#publications-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#publications").offset().top
	    }, 2000);
	});

	
});