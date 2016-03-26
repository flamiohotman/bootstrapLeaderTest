"use strict"


function main()
{
	var rewards = $(".rewards .col-xs-2");
	var modal_picture = $("#picture_big_modal img");

	for (var i = 0 ; i < rewards.length; ++i)
		$(rewards[i]).click(function()
		{
			$(modal_picture).attr("src", $(this).find("img").attr("src") );
		});
}

$(document).ready(main);