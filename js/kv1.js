// скрипт быстрого просмотра

// выбираем все блоки с товарами на главноей
arr = document.querySelectorAll('.catalog>.flex')


// добавляем блоки и показываем при наведении мышки
for (let i = 0; i < arr.length; i++) {
  let element = arr[i]
  // шаблон затемненного блока
  let kv1 = 	` <div class="kv1 hidden">
  <div class="kv1__shadow"></div>
  <div class="kv1__text" data-id = "${i+1}">Быстый просмотр</div>
  </div>`

  element.insertAdjacentHTML('beforeend', kv1);
  $(element).children('div:first').mouseover(() => {
    const kv1 = $(element).children('.kv1')
    kv1.removeClass('hidden')
    kv1.mouseleave(() => {
      console.log('out')
      kv1.addClass('hidden')
    })
  })
}

$('.kv1__text').click(() => $('.kv2').removeClass('hidden'))

$('.kv2').on('click', (event) => {
  console.log(event.target)
  if (event.target.classList.contains('bg')) {
    $('.kv2').addClass('hidden')
  }
})


