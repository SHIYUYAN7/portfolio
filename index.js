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
        if (workDiv.innerHTML === "") {  
            workDiv.innerHTML = '<object type="text/html" data="work/work.html" style="width:100%; height:100%;"></object>';
        }
        homeDiv.style.display = 'none';
        workDiv.style.display = 'block';
        experienceDiv.style.display = 'none';
    });

    // Experience
    experienceButton.addEventListener('click', function() {
        if (experienceDiv.innerHTML === "") { 
            experienceDiv.innerHTML = '<object type="text/html" data="experience/experience.html" style="width:100%; height:100%;"></object>';
        }
        homeDiv.style.display = 'none';
        experienceDiv.style.display = 'block';
        workDiv.style.display = 'none';
    });
});
