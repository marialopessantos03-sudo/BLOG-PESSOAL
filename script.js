function filtrar(categoria) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (categoria === 'todos') {
      card.style.display = 'block';
    } else {
      if (card.classList.contains(categoria)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}
// NOVAS FUNÇÕES DO BLOG

function curtir(idpost) {
  const post = document.getElementById(idpost);
  const contador = post.querySelector('.likes');
  let numeroatual = parseInt(contador.innerText);
  
  // Aumenta o número de curtidas em 1
  contador.innerText = numeroatual + 1;
}

function abrirpost(titulo, idpost) {
  const post = document.getElementById(idpost);
  const textocompleto = post.querySelector('.conteudo-completo').innerText;
  
  // Preenche a janela modal com os dados do post clicado
  document.getElementById('modal-titulo').innerText = titulo;
  document.getElementById('modal-texto').innerText = textocompleto;
  
  // Mostra a janela modal na tela
  document.getElementById('modal-post').style.display = 'block';
}

function fecharmodal() {
  // Esconde a janela modal
  document.getElementById('modal-post').style.display = 'none';
}

// Fecha a janela se a pessoa clicar fora dela
window.onclick = function(event) {
  const modal = document.getElementById('modal-post');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}