// скрипт быстрого просмотра

// выбираем все блоки с товарами на главноей
arr = document.querySelectorAll('.catalog>.flex')

// шаблон затемненного блока
let kv1 = 	` <div class="kv1 hidden">
<div class="kv1__shadow"></div>
<div class="kv1__text">Быстый просмотр</div>
</div>`

// let kv2 = 

// добавляем блоки и показываем при наведении мышки
arr.forEach(element => {
  element.insertAdjacentHTML('beforeend', kv1);
  $(element).children('div:first').mouseover(() => {
    const kv1 = $(element).children('.kv1')
    kv1.removeClass('hidden')
    kv1.mouseleave(() => {
      console.log('out')
      kv1.addClass('hidden')
    })
  })
});



