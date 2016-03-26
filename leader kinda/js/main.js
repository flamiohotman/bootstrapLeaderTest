"use strict";

function print_hover_enable()
{
	var print_captions = $("#print_caption .col-xs-2");
	var print_images = $("#print_image .col-xs-2");

	for (var i = 0; i < print_captions.length; ++i)
		$(print_captions[i]).hover(function()
		{
			$(this).css({"background-color": "#222"});
			var index = $(this).index() - 1;
			$(print_images[index]).css({"background-color": "#222"});	
		},
		function()
		{
			$(this).css({"background-color": "#353535"});
			var index = $(this).index() - 1;
			$(print_images[index]).css({"background-color": "#444"});
		});
}

function scheme_hover_enable()
{
	var scheme_captions = $("#scheme_caption .lighter-half");
	var scheme_images = $("#scheme_image .col-xs-1:nth-child(even)");	

	for (var i = 0; i < scheme_captions.length; ++i)
	{
		$(scheme_captions[i]).hover(function()
		{
			$(this).css({"background-color": "#222"});
			var index = $(this).index() - 1;
			$(scheme_images[index]).css({"transition": "all 1s ease-in-out"});
			$(scheme_images[index]).css({"transform": "scale(1.4, 1.4)"});			
		},
		function()
		{
			$(this).css({"background-color": "#353535"});
			var index = $(this).index() - 1;
			$(scheme_images[index]).css({"transform": "scale(1, 1)"});
		});
	}
}

function portfolio_img_load()
{
	var image_set = $(".img-anchor>img");
	var image_background = $(".img-anchor").parent();
	var images = [];

	for (var i = 0; i < 10; ++i)
		images.push("img/portfolio/" + (i + 1) + ".jpg");

	for (var i = 0; i < image_set.length; ++i)
		$(image_set[i]).attr("src", images[i]);
}

function portfolio_enable_navigation()
{
	var images = [];

	for (var i = 0; i < 10; ++i)
		images.push("img/portfolio/" + (i + 1) + ".jpg");

	var left_right = $("img.portfolio-nav");

	for (var i = 0; i < 2; ++i)
		$(left_right[i]).click(function()
		{
			var image_set = $(".img-anchor>img");
			var number = $(image_set[0]).attr("src");
			number = Number(number.substring(number.search("io/") + 3, number.search(".jpg") )  );
			var page = Math.floor(number / 5 + 1);			

			if (page === 2)
				for (var j = 0; j < image_set.length; ++j)
					$(image_set[j]).attr("src", images[j]);
			else
				for (var j = 0; j < image_set.length; ++j)
					$(image_set[j]).attr("src", images[j + 5]);
		});
}

function portfolio_modal_show_picture()
{
	var image_anchors = $(".img-anchor");
	var modal_picture = $("#picture_big_modal img");
	
	for (var i = 0; i < image_anchors.length; ++i)
		$(image_anchors[i]).click(function()
		{
			$(modal_picture).attr("src", $(this).find("img").attr("src") );
		});
}

function main()
{
	print_hover_enable();
	scheme_hover_enable();
	portfolio_img_load();
	portfolio_enable_navigation();
	portfolio_modal_show_picture();
}



$(document).ready(main);