const bunny = document.getElementById('bunny');

function moveBunny() {
    const maxX = window.innerWidth - bunny.clientWidth;
    const maxY = window.innerHeight - bunny.clientHeight - 100; // Keep it above bushes
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    bunny.style.left = `${randomX}px`;
    bunny.style.top = `${randomY}px`;
}

bunny.addEventListener('click', moveBunny);
moveBunny(); // Move to an initial random position
