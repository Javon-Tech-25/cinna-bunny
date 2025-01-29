document.addEventListener("DOMContentLoaded", function () {
    const bunny = document.getElementById("bunny");

    if (!bunny) {
        console.error("Bunny image not found!");
        return;
    }

    bunny.addEventListener("click", function () {
        const maxX = window.innerWidth - bunny.clientWidth;
        const maxY = window.innerHeight - bunny.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        bunny.style.left = `${randomX}px`;
        bunny.style.top = `${randomY}px`;
    });
});
