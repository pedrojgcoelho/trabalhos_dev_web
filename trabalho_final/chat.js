const balaoDeBatePapo = document.getElementById('chat-balloon');

balaoDeBatePapo.style.animation = 'none';

balaoDeBatePapo.addEventListener('click', function() {
  alert('Chat aberto!');
});



const menu = document.getElementById('menu');

menu.style.animation = 'none';

menu.addEventListener('click', function() {
  menu.style.animation = 'deslizar-para-fora 2s ease-in-out';
});

menu.addEventListener('click', function() {
  menu.style.animation = 'deslizar-para-fora 2s ease-in-out';
});

const h1 = document.getElementById('secao2 h1');

h1.style.animation = 'mudar-de-cor 2s ease-in-out';

h1.addEventListener('click', function() {
  h1.style.animation = 'mudar-de-cor-de-volta 2s ease-in-out';
});

const imagem = document.getElementById('imagem');

imagem.style.animation = 'aparecer 2s ease-in-out';

imagem.addEventListener('click', function() {
  imagem.style.animation = 'desaparecer 2s ease-in-out';
});

const botão = document.getElementById('secao2 button');

botão.style.animation = 'pulsar 2s ease-in-out infinite';

window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY || window.pageYOffset;

  balaoDeBatePapo.style.top = scrollTop + 'px';
});