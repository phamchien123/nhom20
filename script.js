const images = document.querySelectorAll('.content_image ');

let currentIndex = 0;
function changeImage(){
    images.forEach(img => img.style.display = 'none');
    images[currentIndex].style.display = 'block';
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
      }
}