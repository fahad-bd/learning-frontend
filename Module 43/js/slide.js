const images = [
    'image/pic-1.jpg',
    'image/pic-2.jpg',
    'image/pic-3.jpg',
    'image/pic-4.jpg'
]

let imgIndex = 0;
const imgElement = document.getElementById('img-slid');
setInterval(() => {
    if(imgIndex >= images.length) imgIndex = 0;

    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 2000);