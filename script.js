window.onload=function(){
const divs = document.querySelectorAll('.image');

divs.forEach((div) => {
  div.setAttribute('draggable', true); // Make elements draggable

  div.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', div.id);
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent default behavior and event propagation
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const sourceDivId = e.dataTransfer.getData('text');
    const targetDivId = e.target.id; // Get the ID of the target element

    // Make sure that e.target is one of the div elements
    if (Array.from(divs).some(div => div === e.target)) {
      // Swap background images between source and target divs
      const sourceDiv = document.getElementById(sourceDivId);
      const targetDiv = e.target;

      // Get computed styles
      const sourceImage = window.getComputedStyle(sourceDiv).backgroundImage;
      const targetImage = window.getComputedStyle(targetDiv).backgroundImage;

      // Parse the backgroundImage strings to extract the image URLs
      const sourceImageUrl = sourceImage.match(/url\("(.+)"\)/)[1];
      const targetImageUrl = targetImage.match(/url\("(.+)"\)/)[1];

      // Swap the images
      sourceDiv.style.backgroundImage = `url("${targetImageUrl}")`;
      targetDiv.style.backgroundImage = `url("${sourceImageUrl}")`;
    }
  });
});
}