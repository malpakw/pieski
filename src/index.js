import './sass/style.scss';

class Doggo {

    constructor() {
        this.apiUrl = 'https://dog.ceo/api';
        this.imgEl = document.querySelector('.featured-dog img');
        this.backgroundEl = document.querySelector('.featured-dog__background');

        this.init();

    }

    listBreeds() {
        return fetch(`${this.apiUrl}/breeds/list/all`)
            .then(resp => resp.json())
            .then(data => data.message);
    }
    
    getRandomImage() {
        return fetch(`${this.apiUrl}/breeds/image/random`)
            .then (resp => resp.json())
            .then(data => data.message)  
    }
    
    getRandomImageByBreed(breed) {
        return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
            .then (resp => resp.json())
            .then (data => data.message)
    }

    init() {
        this.getRandomImage()
            .then(src => {
                this.imgEl.setAttribute('src', src);
                this.backgroundEl.style.background = `url("${src}")`
    });

        this.listBreeds()
            .then(breeds => console.log(breeds));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Doggo();
})


// const imgTag = document.querySelector('img');

// getRandomImageByBreed('bulldog/french')
// .then(imgSrc => imgTag.setAttribute('src', imgSrc))