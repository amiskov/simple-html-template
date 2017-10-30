$('.Change_color_one').on('click', function () {
    $(this).toggleClass('active'); 
    $('.Change_color_two').removeClass('active'); 
    $('.Change_color_three').removeClass('active'); 
    $('.Tshitrs_ColorTwo-invisible').removeClass('Tshitrs_ColorTwo');
    $('.Tshitrs_ColorThree-invisible').removeClass('Tshitrs_ColorThree');
});

$('.Change_color_two').on('click', function () {
    $(this).toggleClass('active'); 
    $('.Change_color_one').removeClass('active'); 
    $('.Change_color_three').removeClass('active'); 
    $('.Tshitrs_ColorTwo-invisible').toggleClass('Tshitrs_ColorTwo');
    $('.Tshitrs_ColorThree-invisible').removeClass('Tshitrs_ColorThree');
});

$('.Change_color_three').on('click', function () {
    $(this).toggleClass('active'); 
    $('.Change_color_one').removeClass('active'); 
    $('.Change_color_two').removeClass('active'); 
    $('.Tshitrs_ColorThree-invisible').toggleClass('Tshitrs_ColorThree'); 
    $('.Tshitrs_ColorTwo-invisible').removeClass('Tshitrs_ColorTwo');
});

$('.Size_form_M active').on('click', function () {
    $(this).toggleClass('Size_form_M');
    $('.Size_form_S').removeClass('active'); 
    $('.Size_form_L').removeClass('active'); 
});

$('.Size_form_M').on('click', function () {
    $(this).toggleClass('active');
    $('.Size_form_S').removeClass('active'); 
    $('.Size_form_L').removeClass('active'); 
});

$('.Size_form_S').on('click', function () {
    $(this).toggleClass('active');
    $('.Size_form_M').removeClass('active'); 
    $('.Size_form_L').removeClass('active');
});

$('.Size_form_L').on('click', function () {
    $(this).toggleClass('active');
    $('.Size_form_M').removeClass('active'); 
    $('.Size_form_S').removeClass('active');
});
