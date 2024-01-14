    // Obtém a referência da div
    var divTime = document.getElementById('divTime');

    // Faz a div aparecer
    divTime.style.display = 'block';

    // Define um atraso para fazer a div sumir após 10 segundos
    setTimeout(function() {
      divTime.style.display = 'none';
    }, 4000); // 10000 milissegundos = 10 segundos

