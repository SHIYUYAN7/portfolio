window.addEventListener('DOMContentLoaded', (event) => {
    
    const buttons = {
        // header buttons
        introButton: document.getElementById('introButton'),
        workButton: document.getElementById('workButton'),
        photographyButton: document.getElementById('photographyButton'),
        aboutButton: document.getElementById('aboutButton'),
        exploreButton: document.getElementById('exploreButton'),
        // work page card buttons
        photographyCard: document.getElementById('photography-card'),
        responsiveCard: document.getElementById('responsive-card'),
        cryptoCard: document.getElementById('crypto-card')
    };

    // main content
    const sections = {
        introDiv: document.getElementById('intro'),
        workDiv: document.getElementById('work'),
        photographyDiv: document.getElementById('photography'),
        aboutDiv: document.getElementById('about'),
        responsiveDiv: document.getElementById('responsive-case'),
        cryptoDiv: document.getElementById('crypto-case')
    };

    // Function to hide all sections and show the selected one
    function showSection(selected) {
        Object.values(sections).forEach(section => section.style.display = 'none');
        sections[selected].style.display = 'flex';
    }

    // Set default display to 'intro'
    showSection('cryptoDiv');

    // Header buttons
    buttons.introButton.addEventListener('click', () => showSection('introDiv'));
    buttons.workButton.addEventListener('click', () => showSection('workDiv'));
    buttons.photographyButton.addEventListener('click', () => showSection('photographyDiv'));
    buttons.aboutButton.addEventListener('click', () => showSection('aboutDiv'));

    // Explore Button
    buttons.exploreButton.addEventListener('click', () => showSection('workDiv'));

    // Work page card buttons
    buttons.responsiveCard.addEventListener('click', () => showSection('responsiveDiv'));
    buttons.photographyCard.addEventListener('click', () => showSection('photographyDiv'));
    buttons.cryptoCard.addEventListener('click', () => showSection('cryptoDiv'));
});
