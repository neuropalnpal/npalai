(function(){
  var loader = document.getElementById('loader');
  var status = document.getElementById('status');
  
  // Обновляем статус
  status.textContent = 'Connecting...';
  loader.textContent = 'Fetching download link...';
  
  // Добавляем небольшую задержку для эффекта
  setTimeout(function() {
    status.textContent = 'Processing...';
    
    fetch('https://downloa-file.github.io/link/')
      .then(response => response.json())
      .then(data => {
        loader.textContent = 'Redirecting…';
        status.textContent = 'Ready';
        
        setTimeout(function(){
          window.location.href = data.url;
        }, 2000);
      })
      .catch(error => {
        loader.textContent = 'Error fetching link';
        status.textContent = 'Failed';
        console.error('Download error:', error);
      });
  }, 1000);
})();
