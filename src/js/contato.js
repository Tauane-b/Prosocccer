function enviarParaWhatsApp(event) {
  event.preventDefault();

  const nome = encodeURIComponent(document.getElementById('nome').value);
  const dataNascimento = encodeURIComponent(document.getElementById('dataNascimento').value);
  const contato = encodeURIComponent(document.getElementById('contato').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const turma = encodeURIComponent(document.getElementById('turma').value);

  // Para montar a mensagem legível, decodificamos os campos aqui
  const mensagem = `Olá! Gostaria de agendar uma aula experimental.\n\nNome: ${decodeURIComponent(nome)}\nData de Nascimento: ${decodeURIComponent(dataNascimento)}\nContato: ${decodeURIComponent(contato)}\nE-mail: ${decodeURIComponent(email)}\nTurma Disponível: ${decodeURIComponent(turma)}`;

  const numeroWhatsApp = '551128034441'; 
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
}