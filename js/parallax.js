// Seleciona todos os elementos com a classe 'rating'
const ratings = document.querySelectorAll('.rating');

// Itera sobre cada elemento
ratings.forEach((rating, index) => {
    // Cria blocos dinamicamente
    for (let i = 1; i < 100; i++) {
        rating.innerHTML += "<div class='block'></div>";
    }

    // Seleciona todos os blocos dentro do rating
    const blocks = rating.querySelectorAll('.block');

    // Aplica a transformação e atraso de animação a cada bloco
    blocks.forEach((block, i) => {
        block.style.transform = "rotate(" + 3.6 * i + "deg)";
        block.style.animationDelay = `${i / 20}s`;
    });

    // Configuração do contador e animação
    const counter = rating.querySelector('.counter');
    counter.innerText = 0;

    const target = +counter.getAttribute('data-target');

    const numberCounter = () => {
        const value = +counter.innerText;
        if (value < target) {
            counter.innerText = Math.ceil(value + 1);
            setTimeout(() => {
                numberCounter();
            }, 15);
        }
    };

    // Chama a função para animar o contador
    numberCounter();
});

// Adiciona um ouvinte de evento de rolagem para a imagem de parallax
window.addEventListener('scroll', function() {
    const parallaxImage = document.querySelector('.parallax-image');
    const scrollPosition = window.scrollY;
    parallaxImage.style.clip = 'rect(' + scrollPosition + 'px, auto, auto, auto)';
});
