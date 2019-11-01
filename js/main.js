const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
			anchor.addEventListener('click', function (e) {
			e.preventDefault()
			const blockID = anchor.getAttribute('href')
			document.querySelector('' + blockID).scrollIntoView({
				behavior: 'smooth',
			block: 'start'
		})
		})
};
// $('.faq_content').click(function() {
//   var clicks = $(this).data('clicks');
//   if (clicks) {
//     $('.faq_row').css('display', 'inherit'); 
//   } else {
//     $('.faq_row').css('display', 'none');
//   }
//   $(this).data("clicks", !clicks);
// });
// $(function () {
// 	$(window).scroll(function() {
// 	    $('.left_side').each(function(){
// 	        var imagePos = $(this).offset().top;
// 	        var topOfWindow = $(window).scrollTop();
// 	        if (imagePos < topOfWindow+650) {
// 	            $(this).css('position', 'fixed');
// 	        }
// 	    });
// 	});
// })

let model = $('.menu_catalog_').text().trim(); // получаем название модели из элемента страницы
if (model != '') {
    $(`form`).append(`<input id="modelPhone" class="popup_window__input tac inp" type="text" name="model" value="${model}" hidden>`);
}


$(function () {
	$('#call_popup, .order_call_a, .order_call').click(function () {
		$('.form__popup').addClass('fadeIn');
		$('.form__popup').css('display', 'inherit');
		$('html').css('overflow-y', 'hidden');
	});
	$('.close').click(function () {
		$('.form__popup').css('display', 'none');
		$('html').css('overflow-y', 'inherit');
	});
    
	$('.order').click(function () {
        //узнаем модель телефона и добавляем в форму в виде значения скрытого поля
            if (model == '') {    
                model = $(this).parent().parent().children(".description_title_one").text().trim() || model;
                $(`form`).append(`<input id="modelPhone" class="popup_window__input tac inp" type="text" name="model" value="${model}" hidden>`);
            }

                
		$('.form__popup2').addClass('fadeIn');
		$('.form__popup2').css('display', 'inherit');
		$('html').css('overflow-y', 'hidden');
	});
	$('.close').click(function () {
		$('.form__popup2').css('display', 'none');
		$('html').css('overflow-y', 'inherit');
	});
	$('.slider_popup').click(function () {
		$('body').css('overflow', 'hidden');
		$('.carousel_fon').css('display', 'inherit');
		$('.owl-carousel').css('display', 'inherit');
	});
	$('.carousel_fon').click(function () {
		$('body').css('overflow', 'inherit');
		$('.carousel_fon').css('display', 'none');
		$('.owl-carousel').css('display', 'none');
	});
	$(".owl-carousel").owlCarousel({
		loop: true,
	});
});
