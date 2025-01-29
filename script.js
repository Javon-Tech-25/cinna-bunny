// script.js

const bunny = document.getElementById('bunny');

bunny.addEventListener('click', () => {
    // Apply the jump animation
    bunny.style.animation = 'jump 0.5s ease';

    // Reset the animation so the bunny can jump again
    setTimeout(() => {
        bunny.style.animation = '';  // Remove the jump animation after it finishes
    }, 500); // Duration of the jump animation (500ms)
});
