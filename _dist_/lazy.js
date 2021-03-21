const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const loadImage = (entry) =>{
    totalImagesLoaded += 1;
    console.log(`Total imagenes : ${totalImages} \nTotal Imagenes Cargadas : ${totalImagesLoaded}`);
    const container = entry.target;
    const image = container.querySelector('img');
    const url = image.dataset.src;
    image.src = url;

    observer.unobserve(container);
};
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});
let totalImages = 0
let totalImagesLoaded = 0

export const registerImage = (image) => {
    totalImages += 1;
    console.log(`Total imagenes : ${totalImages} \nTotal Imagenes Cargadas : ${totalImagesLoaded}`)

    observer.observe(image);
}



