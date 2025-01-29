// script.js

const bunny = document.getElementById('bunny');

bunny.addEventListener('click', () => {
    // Apply the jump animation to the bunny
    bunny.style.animation = 'jump 0.5s ease';

    // Reset the animation so the bunny can jump again
    setTimeout(() => {
        bunny.style.animation = '';  // Remove the jump animation
    }, 500); // Reset after 500ms (duration of the jump animation)
});
