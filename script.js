const divs = document.querySelectorAll('.image');

divs.forEach((div) => {
    div.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', div.id);
    });

    div.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow dropping
    });

    div.addEventListener('drop', (e) => {
        e.preventDefault(); // Prevent default behavior (e.g., opening a link)
        const sourceDivId = e.dataTransfer.getData('text');
        const targetDivId = div.id;

        // Swap background images between source and target divs
        const sourceDiv = document.getElementById(sourceDivId);
        const targetDiv = document.getElementById(targetDivId);

        // Get computed styles
        const sourceImage = window.getComputedStyle(sourceDiv).backgroundImage;
        const targetImage = window.getComputedStyle(targetDiv).backgroundImage;

        // Swap the images
        sourceDiv.style.backgroundImage = targetImage;
        targetDiv.style.backgroundImage = sourceImage;
    });
});
