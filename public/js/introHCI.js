'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	//initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(function() {
		ga("create", "UA-114621549-1", "auto");
		if($(this).hasClass("btn-default"))
		{
			ga("send", "event", 'like', 'click');
		}
		if($(this).hasClass("minBtn"))
		{
			ga("send", "event", 'likeAlt', 'click');
		}
	});
}