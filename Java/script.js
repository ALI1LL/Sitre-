
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Scroll suave para seções
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll suave para seções
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Accordion para serviços
document.querySelectorAll('.accordion-item h2').forEach((item) => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        content.classList.toggle('open');

        // Fecha outras abas se abertas
        document.querySelectorAll('.accordion-content').forEach((otherContent) => {
            if (otherContent !== content) {
                otherContent.classList.remove('open');
            }
        });
    });
});

// Modal de detalhes do produto
const produtos = [
    { id: 1, nome: 'Camisa Esportiva', descricao: 'Camisa leve e confortável para prática esportiva.', imagem: 'assets/css/images/produto1.jpg' },
    { id: 2, nome: 'Calçado de Corrida', descricao: 'Tênis de corrida com alta absorção de impacto.', imagem: 'assets/css/images/produto2.jpg' }
];

document.querySelectorAll('.detalhes-btn').forEach(button => {
    button.addEventListener('click', () => {
        const produtoId = button.getAttribute('data-produto');
        const produto = produtos.find(p => p.id == produtoId);

        document.getElementById('produto-nome').textContent = produto.nome;
        document.getElementById('produto-descricao').textContent = produto.descricao;
        document.getElementById('produto-imagem').src = produto.imagem;
        document.getElementById('modal').style.display = 'flex';
    });
});

// Fechar modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Fechar modal clicando fora
window.addEventListener('click', (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

// Menu mobile toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

// Enviar formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert('Mensagem enviada com sucesso!'); // Exemplo de feedback
    document.getElementById('form-contato').reset(); // Limpa o formulário
});

// Inicializar mapa (placeholder)
function initMap() {
    // Aqui você pode inicializar seu mapa (por exemplo, Google Maps ou outra biblioteca)
    const mapElement = document.getElementById('map');
    mapElement.innerHTML = 'Mapa será exibido aqui'; // Placeholder
}
initMap();

// Menu mobile toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

// Enviar formulário de orçamento
document.getElementById('form-orcamento').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
        alert('Seu orçamento foi enviado. Entraremos em contato em breve.');
        document.getElementById('form-orcamento').reset(); // Limpa o formulário após o envio
    }
});

function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
}
