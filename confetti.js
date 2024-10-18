// Create a function to trigger confetti
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Add event listener to the button
document.getElementById("confetti-button").addEventListener("click", launchConfetti);

// Load the confetti library
(function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js';
    document.head.appendChild(script);
})();
