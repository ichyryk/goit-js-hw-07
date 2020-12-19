const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('js-gallery');

const createImage = ({ url, alt }) => {
    const itemRef = document.createElement('li');
    itemRef.insertAdjacentHTML('afterbegin', `<img src=${url} alt=${alt} class="js-gallery__img" width=240></img>`);
    return itemRef;
};

const items = images.map((item) => createImage(item));

const listItemsRef = document.querySelector('#gallery');
listItemsRef.append(...items);