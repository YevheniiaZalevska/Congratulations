document.getElementById('myButton').addEventListener('click', function() {
  var popup = document.getElementById('popup');
  var popupText = document.querySelector('#popup').innerText;

  console.log('Текст внутри блока popup: ', popupText);  

  popup.style.display = '';

  popup.classList.remove('hidden');

  setTimeout(function() {
    popup.classList.add('show');
  }, 10);

  setTimeout(function() {
    popup.classList.remove('show');
    setTimeout(function() {
      popup.classList.add('hidden');
    }, 500);
  }, 3000);
});
 