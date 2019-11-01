// скрипт быстрого просмотра
console.log('подключен скрипт быстрого просмотра')
arr = document.querySelectorAll('.catalog>.flex')
console.log(arr.length)
arr.forEach(element => {
  element.insertAdjacentHTML('beforeend', '<p>Привет</p>');
  element.addEventListener('click', ()=>alert('test'))
});

let kv1 = 	` <div class="kv1">
<div class="kv1__shadow"></div>
<div class="kv1__text">Быстый просмотр</div>
<div class="owl-carousel"></div>
</div>`