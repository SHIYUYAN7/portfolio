window.addEventListener('DOMContentLoaded', (event) => {
    // header button
    const introButton = document.getElementById('introButton');
    const workButton = document.getElementById('workButton');
    const photographyButton = document.getElementById('photographyButton');

    // maincontent
    const introDiv = document.getElementById('intro');
    const workDiv = document.getElementById('work');
    const photographyDiv = document.getElementById('photography');

    // intro content button cick to work
    const exploreButton = document.getElementById('exploreButton');

    // work content button cick to photography
    const photographyCard = document.getElementById('photography-card');

    // Set default display to 'home'
    introDiv.style.display = 'none';
    workDiv.style.display = 'flex';
    photographyDiv.style.display = 'none';

    // photography-card Button
    photographyCard.addEventListener('click', function() {
        introDiv.style.display = 'none';
        workDiv.style.display = 'none';
        photographyDiv.style.display = 'flex';
    });

    // Explore Button
    exploreButton.addEventListener('click', function() {
        introDiv.style.display = 'none';
        workDiv.style.display = 'flex';
        photographyDiv.style.display = 'none';
    });

    // Home
    introButton.addEventListener('click', function() {
        introDiv.style.display = 'flex';
        workDiv.style.display = 'none';
        photographyDiv.style.display = 'none';
    });

    // Work
    workButton.addEventListener('click', function() {
        introDiv.style.display = 'none';
        workDiv.style.display = 'flex';
        photographyDiv.style.display = 'none';
    });

    // photography
    photographyButton.addEventListener('click', function() {
        introDiv.style.display = 'none';
        photographyDiv.style.display = 'flex';
        workDiv.style.display = 'none';
    });
});
