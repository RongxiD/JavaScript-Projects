const galleryImages = document.querySelectorAll('.image img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-content img');
const closeLightbox = document.querySelector('.close-lightbox');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImage.src = image.src;
        lightbox.style.display = 'flex';
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});