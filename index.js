window.addEventListener('DOMContentLoaded', (event) => {
    // header button
    const introButton = document.getElementById('introButton');
    const workButton = document.getElementById('workButton');
    const photographyButton = document.getElementById('photographyButton');
    const aboutButton = document.getElementById('aboutButton');

    // main content
    const introDiv = document.getElementById('intro');
    const workDiv = document.getElementById('work');
    const photographyDiv = document.getElementById('photography');
    const aboutDiv = document.getElementById('about');
    const responsiveDiv = document.getElementById('responsive-case');

    // intro content button cick to work
    const exploreButton = document.getElementById('exploreButton');

    // work content button cick to details
    const photographyCard = document.getElementById('photography-card');
    const responsiveCard = document.getElementById('responsive-card');

    // Set default display to 'home'
    introDiv.style.display = 'none';
    workDiv.style.display = 'flex';
    photographyDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
    responsiveDiv.style.display = 'none';


    // Explore Button
    exploreButton.addEventListener('click', function() {
        introDiv.style.display = 'none';
        workDiv.style.display = 'flex';
        photographyDiv.style.display = 'none';
        aboutDiv.style.display = 'none';
        responsiveDiv.style.display = 'none';
    });

    // ------------------------------------------work page card buttons------------------------------------------
    
    // responsive-card Button
    responsiveCard.addEventListener('click', function() {
        introDiv.style.display = 'none';
        workDiv.style.display = 'none';
        photographyDiv.style.display = 'none';
        aboutDiv.style.display = 'none';
        responsiveDiv.style.display = 'flex';
    });

    // photography-card Button
    photographyCard.addEventListener('click', function() {
        introDiv.style.display = 'none';
        workDiv.style.display = 'none';
        photographyDiv.style.display = 'flex';
        aboutDiv.style.display = 'none';
        responsiveDiv.style.display = 'none';
    });
    


    // ------------------------------------------header buttons------------------------------------------

    // Home
    introButton.addEventListener('click', function() {
        introDiv.style.display = 'flex';
        workDiv.style.display = 'none';
        photographyDiv.style.display = 'none';
        aboutDiv.style.display = 'none';
        responsiveDiv.style.display = 'none';
    });

    // Work
    workButton.addEventListener('click', function() {
        introDiv.style.display = 'none';
        workDiv.style.display = 'flex';
        photographyDiv.style.display = 'none';
        aboutDiv.style.display = 'none';
        responsiveDiv.style.display = 'none';
    });

    // photography area
    photographyButton.addEventListener('click', function() {
        introDiv.style.display = 'none';
        photographyDiv.style.display = 'flex';
        workDiv.style.display = 'none';
        aboutDiv.style.display = 'none';
        responsiveDiv.style.display = 'none';
    });

    // about area
    aboutButton.addEventListener('click', function() {
        introDiv.style.display = 'none';
        photographyDiv.style.display = 'none';
        workDiv.style.display = 'none';
        aboutDiv.style.display = 'flex';
        responsiveDiv.style.display = 'none';
    });



});
