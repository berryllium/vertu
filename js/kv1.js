// скрипт быстрого просмотра

// выбираем все блоки с товарами на главноей
arr = document.querySelectorAll('.catalog>.flex')

preview_phone = 22//количество смартфонов, на которыйх есть быстрый прсомотр

// добавляем блоки и показываем при наведении мышки
for (let i = 0; i < preview_phone; i++) {
  let element = arr[i]
  let phone_id = i + 1
  let phone_model = ''
  let phone_price = ''
  if (element.querySelector('.description_title_one')) {
    phone_model = element.querySelector('.description_title_one').innerText
  }
  if (element.querySelector('.cens1')) {
    phone_price = element.querySelector('.cens1').innerText.match(/₽.*$/)[0].slice(1).replace(/\s/g, '')
  }

  // шаблон затемненного блока
  let kv1 = ` <div class="kv1 hidden">
  <div class="kv1__shadow"></div>
  <div class="kv1__text" 
    data-id = "${phone_id}" 
    data-model="${phone_model}"
    data-price="${phone_price}">Быстый просмотр</div>
  </div>`

  element.insertAdjacentHTML('beforeend', kv1);
  $(element).children('div:first').mouseover(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return
    } else {
      const kv1 = $(element).children('.kv1')
      kv1.removeClass('hidden')
      kv1.mouseleave(() => {
        kv1.addClass('hidden')
      })
    }

  })
}


// по клику БЫСТРЫЙ ПРОСМОТР
$('.kv1__text').click((event) => {
  const id = event.target.dataset.id
  const model = event.target.dataset.model
  const price = event.target.dataset.price
  let kv2 = `
	<div class="kv2">
  <div class="bg"></div>
  <div class="content">
    <div class="left">
      <div class="slider">
        <div class = "s-item s-item1"><img src="img/more${id}_1.jpg" alt="photo_vertu"></div>
        <div class = "s-item s-item1"><img src="img/more${id}_2.jpg" alt="photo_vertu"></div>
        <div class = "s-item s-item1"><img src="img/more${id}_3.jpg" alt="photo_vertu"></div>
        <div class = "s-item s-item1"><img src="img/more${id}_4.jpg" alt="photo_vertu"></div>
        <div class = "s-item s-item1"><img src="img/more${id}_gl.png" alt="photo_vertu"></div>
      </div>
    </div>
    <div class="right">
      <h3>${model}</h3>
      <div class="line"></div>
      <ul>
        <li>Натуральная кожа</li>
        <li>Стальной корпус</li>
        <li>Оригинальное ПО (иконки, полифония)</li>
        <li>Сапфировое стекло (фирменный оттенок синевы)</li>
        <li>Рубиновая подсветка клавиатуры</li>
      </ul>
      <input type="checkbox" name="case${id}" id="case${id}">
      <label class = "label" for="case${id}">Добавить кожаный чехол за 1900р</label>
      <div class="bottom">
        <div class="price">
          ${price}
        </div>
        <a class="order order_preview">ОФОРМИТЬ ЗАКАЗ</a>
        <div class="space"></div>
        <a href="more${id}.html" class="more">см.подробнее</a>
      </div>
    </div>
  </div>
</div>

`
  // выводим модальное окно
  document.querySelector('body').insertAdjacentHTML('beforeend', kv2)
  $('kv1').remove()
  //закрытие модального окна и галочка с чехлом
  $('.kv2').on('click', (event) => {
    if (event.target.classList.contains('bg')) {
      $('.kv2').remove()
    }


    if (event.target.classList.contains('label')) {
      let check = $(event.target).siblings('input').attr('checked')
      let price = $(event.target).parent().children('.bottom').children('.price')
      current = price.text().replace(/\s/g, '')
      if (check) current = parseInt(current) - 1900
      if (!check) current = parseInt(current) + 1900
      $(price).text(current + '₽')
    }

    // отправка заявки
    if (event.target.classList.contains('order')) {
      let check = $(event.target).parent().siblings('input').attr('checked')
      let message = model
      if (check) message += ' + КОЖАНЫЙ ЧЕХОЛ!'
      $('input[name="model"]').remove()
      $(`form`).append(`<input id="modelPhone" class="popup_window__input tac inp" type="text" name="model" value="${message}" hidden>`);
      $('.form__popup2').addClass('fadeIn');
      $('.form__popup2').css('display', 'inherit');
      $('html').css('overflow-y', 'hidden');
      $('.kv2').remove()
    };
  })
  // активируем слайдер
  $(document).ready(function () {
    $('.slider').slick({
    });
  });
})





