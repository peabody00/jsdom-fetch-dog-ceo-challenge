console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener('DOMContentLoaded', () => {
    fetchImages()
    // fetchDogBreeds()
    // getDropDown().addEventListener('change', filterBreeds)
})

function fetchImages() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => data.message.forEach(image => displayImage(image)))
};

function displayImage(image) {
    const imageItem = document.createElement('img')
    imageItem.src = image
    getDogImageContainer().append(imageItem)
}

// functions to grab DOM nodes
function getDogImageContainer() {
    return document.getElementById('dog-image-container')
}
