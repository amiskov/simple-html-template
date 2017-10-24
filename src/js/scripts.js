$(".Change_color_one").on("click", function () {
	$(this).toggleClass("active") 
	$(".Change_color_two").removeClass("active") 
	$(".Change_color_three").removeClass("active") 
	$(".Color_two_invisible").removeClass("Color_two")
	$(".Color_three_invisible").removeClass("Color_three")
});

$(".Change_color_two").on("click", function () {
	$(this).toggleClass("active") 
	$(".Change_color_one").removeClass("active") 
	$(".Change_color_three").removeClass("active") 
	$(".Color_two_invisible").toggleClass("Color_two")
	$(".Color_three_invisible").removeClass("Color_three")
});

$(".Change_color_three").on("click", function () {
	$(this).toggleClass("active") 
	$(".Change_color_one").removeClass("active") 
	$(".Change_color_two").removeClass("active") 
	$(".Color_three_invisible").toggleClass("Color_three") 
	$(".Color_two_invisible").removeClass("Color_two")
});

$(".Size_form_M active").on("click", function () {
	$(this).toggleClass("Size_form_M")
	$(".Size_form_S").removeClass("active") 
	$(".Size_form_L").removeClass("active") 
});

$(".Size_form_M").on("click", function () {
	$(this).toggleClass("active")
	$(".Size_form_S").removeClass("active") 
	$(".Size_form_L").removeClass("active") 
});

$(".Size_form_S").on("click", function () {
	$(this).toggleClass("active")
	$(".Size_form_M").removeClass("active") 
	$(".Size_form_L").removeClass("active")
});

$(".Size_form_L").on("click", function () {
	$(this).toggleClass("active")
	$(".Size_form_M").removeClass("active") 
	$(".Size_form_S").removeClass("active")
});