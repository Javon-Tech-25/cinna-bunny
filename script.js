document.addEventListener('DOMContentLoaded', () => {
    const bunny = document.getElementById('bunny');
    const container = document.querySelector('.container');
    const backgroundFlowers = document.querySelector('.background-flowers');

    // Create background flowers
    function createBackgroundFlowers() {
        const flowers = document.querySelectorAll('.flower-bg');
        flowers.forEach(flower => {
            // Randomize position
            flower.style.left = Math.random() * 100 + '%';
            flower.style.top = Math.random() * 70 + '%'; // Keep above the bushes
            flower.innerHTML = '🌸'; // Flower emoji
            flower.style.animationDelay = Math.random() * 5 + 's'; // Stagger animations
        });
    }

    // Create floating flowers
    function createFloatingFlowers() {
        const numFlowers = 15;
        for (let i = 0; i < numFlowers; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.innerHTML = '🌼';
            flower.style.left = Math.random() * 100 + '%';
            flower.style.top = Math.random() * 80 + '%';
            flower.style.animationDelay = Math.random() * 3 + 's';
            container.appendChild(flower);
        }
    }

    // Move bunny
    function moveBunny() {
        const maxX = window.innerWidth - 60;
        const maxY = window.innerHeight - 60;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        bunny.style.left = newX + 'px';
        bunny.style.top = newY + 'px';
    }

    bunny.addEventListener('click', moveBunny);
    createBackgroundFlowers();
    createFloatingFlowers();

    // Add parallax effect to floating flowers
    document.addEventListener('mousemove', (e) => {
        const flowers = document.querySelectorAll('.flower');
        flowers.forEach(flower => {
            const speed = 30;
            const x = (e.clientX - window.innerWidth / 2) / speed;
            const y = (e.clientY - window.innerHeight / 2) / speed;
            flower.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});
