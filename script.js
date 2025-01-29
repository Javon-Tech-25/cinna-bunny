/* General body and scene setup */
body {
    margin: 0;
    overflow: hidden;
    background-color: #d8f3f0; /* Light blue sky color */
}

/* The scene that holds all elements */
.scene {
    position: relative;
    height: 100vh;
    width: 100%;
}

/* Background container with grass and animated elements */
.background {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;  /* Half the screen is for the grass */
    background-color: #68a05e; /* Grass green color */
    z-index: 1;  /* Ensure this stays behind the bunny */
}

/* Flower styling */
.flower {
    position: absolute;
    bottom: 30px;  /* Position above the grass */
    width: 30px;
    height: 30px;
    background-color: pink;
    border-radius: 50%;
    animation: flowerAnim 4s linear infinite;  /* Animate flowers */
}

/* Positioning and animation for each flower with delay */
.flower:nth-child(1) {
    left: 20%;
    animation-delay: 0s;
}

.flower:nth-child(2) {
    left: 50%;
    animation-delay: 1s;
}

.flower:nth-child(3) {
    left: 80%;
    animation-delay: 2s;
}

/* Bush styling */
.bush {
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 60px;
    background-color: #568203; /* Bush color */
    border-radius: 50%;
    animation: bushAnim 5s ease-in-out infinite;  /* Animate bushes */
}

/* Bush position */
.bush:nth-child(1) {
    left: 10%;
}

.bush:nth-child(2) {
    left: 60%;
}

/* Keyframe animation for flowers (bouncing up and down) */
@keyframes flowerAnim {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
}

/* Keyframe animation for bushes (swaying left and right) */
@keyframes bushAnim {
    0% { transform: translateX(0); }
    50% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
}

/* Bunny styling and positioning */
.container {
    position: absolute;
    bottom: 80px; /* Position bunny above the grass */
    left: 50%;
    transform: translateX(-50%);
    z-index: 2; /* Ensure the bunny stays on top */
}

#bunny {
    width: 150px; /* Adjust size as necessary */
    transition: transform 0.3s ease; /* Smooth transition for jumping */
}

/* Jumping animation for the bunny */
@keyframes jump {
    0% { transform: translateY(0); }
    50% { transform: translateY(-40px); }
    100% { transform: translateY(0); }
}
