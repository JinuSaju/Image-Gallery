// Get references to DOM elements
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const images = document.querySelectorAll('.image-container img');

let currentImageIndex = 0;

// Function to show current image
function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Show the initial image
showImage(currentImageIndex);

// Event listener for next button
nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

// Event listener for previous button
prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});
