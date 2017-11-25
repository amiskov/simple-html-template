import PropertySelector from './property-selector.js';

const Dispatcher = document.getElementById('doc');

new PropertySelector(document.getElementById('colorList'));
new PropertySelector(document.getElementById('sizeList'));

Dispatcher.addEventListener('property-selected', ev => {
    const data = ev.detail;

    if (data.type === 'color') {
        changePicture(data.value);
    }

    if (data.type === 'size') {
        changePrice();
    }
});

function changePrice() {
    document.getElementById('priceVal').innerHTML = +new Date();
}

function changePicture(color) {
    document.getElementById('productPicture').src = 'img/tshirt_' + color + '.jpg';
}
