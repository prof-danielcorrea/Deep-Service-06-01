function playPause() {
  var vimeoVideo = document.getElementById("vimeoVideo");
  var playButton = document.querySelector('.play-button');

  if (vimeoVideo && vimeoVideo.contentWindow) {
    if (vimeoVideo.contentWindow.postMessage) {
      vimeoVideo.contentWindow.postMessage('{"method":"play"}', '*');
      playButton.style.display = 'none'; // Esconde o botão de reprodução

      // Adiciona um intervalo para verificar regularmente o estado do vídeo
      var checkStatusInterval = setInterval(function () {
        var playerOrigin = 'https://player.vimeo.com/video/898654046?';
        var message = JSON.stringify({ method: 'get', value: 'paused' });

        // Obtém o status do vídeo usando a API e o token de acesso
        vimeoVideo.contentWindow.postMessage({ method: 'ping' }, playerOrigin);
        vimeoVideo.contentWindow.postMessage(message, playerOrigin);
      }, 1000);

      // Ouve as mensagens do iframe do Vimeo
      window.addEventListener('message', function (event) {
        var data = JSON.parse(event.data);

        // Verifica se o vídeo chegou ao final
        if (data.event === 'ended') {
          clearInterval(checkStatusInterval); // Para de verificar o status
          playButton.style.display = 'block'; // Exibe o botão de reprodução
        }
      });
    }
  }
}