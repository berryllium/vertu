// скрипт быстрого просмотра

// выбираем все блоки с товарами на главноей
arr = document.querySelectorAll('.catalog>.flex')

preview_phone = 22//количество смартфонов, на которыйх есть быстрый прсомотр

// добавляем блоки и показываем при наведении мышки
for (let i = 0; i < preview_phone; i++) {
  let element = arr[i]
  let phone_id = i + 1
  let phone_name = ''
  let phone_price = ''
  if (element.querySelector('.description_title_one')) {
    phone_name = element.querySelector('.description_title_one').innerText
  }
  if (element.querySelector('.cens1')) {
    phone_price = element.querySelector('.cens1').innerText.match(/₽.*$/)[0].slice(1)
  }

  // шаблон затемненного блока
  let kv1 = ` <div class="kv1 hidden">
  <div class="kv1__shadow"></div>
  <div class="kv1__text" 
    data-id = "${phone_id}" 
    data-name="${phone_name}"
    data-price="${phone_price}">Быстый просмотр</div>
  </div>`

  element.insertAdjacentHTML('beforeend', kv1);
  $(element).children('div:first').mouseover(() => {
    const kv1 = $(element).children('.kv1')
    kv1.removeClass('hidden')
    kv1.mouseleave(() => {
      kv1.addClass('hidden')
    })
  })
}


// по клику БЫСТРЫЙ ПРОСМОТР
$('.kv1__text').click((event) => {
  const id = event.target.dataset.id
  const name = event.target.dataset.name
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
      <h3>${name}</h3>
      <div class="line"></div>
      <ul>
        <li>Натуральная кожа</li>
        <li>Стальной корпус</li>
        <li>Оригинальное ПО (иконки, полифония)</li>
        <li>Сапфировое стекло (фирменный оттенок синевы)</li>
        <li>Рубиновая подсветка клавиатуры</li>
      </ul>
      <input type="checkbox" name="case${id}" id="case${id}">
      <label for="case${id}">Добавить кожаный чехол за 1900р</label>
      <div class="bottom">
        <div class="price">
          ${price}
        </div>
        <a class="order">ОФОРМИТЬ ЗАКАЗ</a>
        <div class="space"></div>
        <a href="more${id}.html" class="more">см.подробнее</a>
      </div>
    </div>
  </div>
</div>

`
  // выводим модальное окно
  document.querySelector('body').insertAdjacentHTML('beforeend', kv2)

  //закрытие модального окна
  $('.kv2').on('click', (event) => {
    if (event.target.classList.contains('bg')) {
      $('.kv2').remove()
    }
  })

  $('.kv2').removeClass('hidden')
  // активируем слайдер
  $(document).ready(function () {
    $('.slider').slick({
    });
  });
})





