$(document).ready(function () {
	/* Social Media */
	$("#header").click(function (event) {
		if($(this).hasClass("smOculto")) {
			event.preventDefault();
			$(this).removeClass("smOculto");
			return false;
		}
		else $(this).addClass("smOculto");
	});

	/* Links */
	$(".mark").click(function () {
		var id = $(this).attr('id');
		var nome = id.replace("link", "");
		var url = nome.toLowerCase() + '.html';

		window.location.replace(url);
	});
});