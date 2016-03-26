function enable_call_form_check()
{
	var name = $(".call #name");
	var telephone = $(".call #telephone");
	var nameFilter = /^\w{2,}$/;
	var telephoneFilter =  /^\+?[1-9]{2}\s?\(?\d{3}\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
	var nameValid = $("#call-name-img");
	var telephoneValid = $("#call-telephone-img");


	$(name).change(function()
	{
		var imgSrc = "";
		if (nameFilter.test($(name).val()) )
			imgSrc = "img/call/valid.png";
		else
			imgSrc = "img/call/error.png";

		$(nameValid).attr("src", imgSrc);
	});

	$(telephone).change(function()
	{
		var imgSrc = "";
		if (telephoneFilter.test($(telephone).val()) )
			imgSrc = "img/call/valid.png";
		else
			imgSrc = "img/call/error.png";

		$(telephoneValid).attr("src", imgSrc);
	});
}

function enable_order_form_check()
{
	var name = $(".order #name");
	var telephone = $(".order #telephone");
	var email = $(".order #email");

	var nameFilter = /^\w{2,}$/;
	var telephoneFilter =  /^\+?[1-9]{2}\s?\(?\d{3}\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
	var emailFilter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	var nameValid = $("#order-name-img");
	var telephoneValid = $("#order-telephone-img");
	var emailValid = $("#order-email-img");


	$(name).change(function()
	{
		var imgSrc = "";
		if (nameFilter.test($(name).val()) )
			imgSrc = "img/call/valid.png";
		else
			imgSrc = "img/call/error.png";

		$(nameValid).attr("src", imgSrc);
	});

	$(telephone).change(function()
	{
		var imgSrc = "";
		if (telephoneFilter.test($(telephone).val()) )
			imgSrc = "img/call/valid.png";
		else
			imgSrc = "img/call/error.png";

		$(telephoneValid).attr("src", imgSrc);
	});

	$(email).change(function()
	{
		var imgSrc = "";
		if (emailFilter.test($(email).val()) )
			imgSrc = "img/call/valid.png";
		else
			imgSrc = "img/call/error.png";

		$(emailValid).attr("src", imgSrc);
	});
}

function main()
{
	enable_call_form_check();
	enable_order_form_check();
}

$(document).ready(main);