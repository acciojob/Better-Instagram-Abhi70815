 const divs = document.querySelectorAll('.image');

        divs.forEach((div) => {
            div.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text', div.id);
            });

            div.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            div.addEventListener('drop', (e) => {
                e.preventDefault();
                const sourceDivId = e.dataTransfer.getData('text');
                const targetDivId = div.id;

                // Swap background images between divs
                const sourceDiv = document.getElementById(sourceDivId);
                const targetDiv = document.getElementById(targetDivId);
                const tempImage = sourceDiv.style.backgroundImage;
                sourceDiv.style.backgroundImage = targetDiv.style.backgroundImage;
                targetDiv.style.backgroundImage = tempImage;
            });
        });