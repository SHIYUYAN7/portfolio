window.addEventListener('DOMContentLoaded', (event) => {
    const workButton = document.getElementById('workButton');
    const experienceButton = document.getElementById('experienceButton');
    const workDiv = document.getElementById('work');
    const experienceDiv = document.getElementById('experience');

    // work
    workButton.addEventListener('click', function() {
        if (workDiv.innerHTML === "") {  
            workDiv.innerHTML = '<object type="text/html" data="work/work.html" style="width:100%; height:100%;"></object>';
        }
        workDiv.style.display = 'block';
        experienceDiv.style.display = 'none';
    });

    // experience
    experienceButton.addEventListener('click', function() {
        if (experienceDiv.innerHTML === "") { 
            experienceDiv.innerHTML = '<object type="text/html" data="experience/experience.html" style="width:100%; height:100%;"></object>';
        }
        experienceDiv.style.display = 'block';
        workDiv.style.display = 'none';
    });
});