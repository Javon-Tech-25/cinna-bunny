// JavaScript to move the bunny to a new random location when clicked
document.getElementById('bunny').addEventListener('click', function() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (windowWidth - 100)); // Adjust 100 based on the bunny image's width
    const randomY = Math.floor(Math.random() * (windowHeight - 100)); // Adjust 100 based on the bunny image's height

    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});
