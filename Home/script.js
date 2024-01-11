var hoverArea = document.getElementById('hoverArea');
var newContent = document.getElementById('newContent');

hoverArea.addEventListener('mouseover', showContent);
hoverArea.addEventListener('mouseout', hideContent);
newContent.addEventListener('mouseout', hideContent);


function showContent() {
    // Show the new content when the "About Us" link is hovered
    newContent.style.display = 'flex';
}

function hideContent() {
    // Hide the new content when the mouse moves away
    if(!hoverArea.matches(':hover') && !newContent.matches(':hover')){
        newContent.style.display = 'none';
    }
}