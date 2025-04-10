const btnNao = document.getElementById('nao');
const btnSim = document.getElementById('sim');

btnNao.addEventListener('mouseover', () => {
    moveButtonRandomly(btnNao);
});

btnNao.addEventListener('click', () => {
    moveButtonRandomly(btnNao);
});

btnSim.addEventListener('click', () => {
    alert('Ótimo! Vamos ser felizes juntos! ❤️');
});

function moveButtonRandomly(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
