// скрипт быстрого просмотра
console.log('подключен скрипт быстрого просмотра')
arr = document.querySelectorAll('.catalog>.flex')
console.log(arr.length)
let kv1 = 	` <div class="kv1">
<div class="kv1__shadow"></div>
<div class="kv1__text">Быстый просмотр</div>
</div>`
arr.forEach(element => {
  element.insertAdjacentHTML('beforeend', kv1);
  element.addEventListener('click', ()=>alert('test'))
});

