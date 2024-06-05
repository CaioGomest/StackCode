var enviarButton = document.querySelector('.enviar_mensagem');

enviarButton.addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var conteudo_mensagem = document.getElementById('conteudo_mensagem').value;
    var mensagem = `Olá, me chamo ${nome}, ${conteudo_mensagem}\n`;

    var link = "https://wa.me/5511966403958?text=" + encodeURIComponent(mensagem);
    window.open(link);
});
