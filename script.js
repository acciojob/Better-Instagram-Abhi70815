    const divs = document.querySelectorAll('.image');
        // divs.innerHTML="hdfh";
        let sourceDivId;
let targetDivId;
let sourceDiv;
let targetDiv;

        
        divs.forEach((div) => {
            div.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text', div.id);
            });
        
            div.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
        
            div.addEventListener('drop', (e) => {
                e.preventDefault();
                sourceDivId = e.dataTransfer.getData('text');
                targetDivId = div.id;
        console.log(sourceDivId,targetDivId);
                // Swap background images between divs
                sourceDiv = document.getElementById(sourceDivId);
                targetDiv = document.getElementById(targetDivId);
                const sourceImage = window.getComputedStyle(sourceDiv).backgroundImage;
        const targetImage = window.getComputedStyle(targetDiv).backgroundImage;

        // Swap the images
        sourceDiv.style.backgroundImage = targetImage;
        targetDiv.style.backgroundImage = sourceImage;
            });
        });