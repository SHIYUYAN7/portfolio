window.addEventListener('DOMContentLoaded', (event) => {
    const homeButton = document.getElementById('homeButton');
    const workButton = document.getElementById('workButton');
    const experienceButton = document.getElementById('experienceButton');
    const homeDiv = document.getElementById('home');
    const workDiv = document.getElementById('work');
    const experienceDiv = document.getElementById('experience');

    // Set default display to 'home'
    homeDiv.style.display = 'flex';
    workDiv.style.display = 'none';
    experienceDiv.style.display = 'none';

    // Home
    homeButton.addEventListener('click', function() {
        homeDiv.style.display = 'flex';
        workDiv.style.display = 'none';
        experienceDiv.style.display = 'none';
    });

    // Work
    workButton.addEventListener('click', function() {
        homeDiv.style.display = 'none';
        workDiv.style.display = 'flex';
        experienceDiv.style.display = 'none';
    });

    // Experience
    experienceButton.addEventListener('click', function() {
        homeDiv.style.display = 'none';
        experienceDiv.style.display = 'flex';
        workDiv.style.display = 'none';
    });
});
