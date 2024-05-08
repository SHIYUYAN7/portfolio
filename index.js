window.addEventListener('DOMContentLoaded', (event) => {
    const introButton = document.getElementById('introButton');
    const workButton = document.getElementById('workButton');
    const experienceButton = document.getElementById('experienceButton');
    const introDiv = document.getElementById('intro');
    const workDiv = document.getElementById('work');
    const experienceDiv = document.getElementById('experience');

    const exploreButton = document.getElementById('exploreButton');

    // Set default display to 'home'
    introDiv.style.display = 'none';
    workDiv.style.display = 'flex';
    experienceDiv.style.display = 'none';

    // Explore Button
    exploreButton.addEventListener('click', function() {
        introDiv.style.display = 'none';
        workDiv.style.display = 'flex';
        experienceDiv.style.display = 'none';
    });

    // Home
    introButton.addEventListener('click', function() {
        introDiv.style.display = 'flex';
        workDiv.style.display = 'none';
        experienceDiv.style.display = 'none';
    });

    // Work
    workButton.addEventListener('click', function() {
        introDiv.style.display = 'none';
        workDiv.style.display = 'flex';
        experienceDiv.style.display = 'none';
    });

    // Experience
    experienceButton.addEventListener('click', function() {
        introDiv.style.display = 'none';
        experienceDiv.style.display = 'flex';
        workDiv.style.display = 'none';
    });
});
