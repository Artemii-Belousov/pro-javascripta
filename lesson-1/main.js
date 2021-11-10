const products = [
    {   id: 1, title: 'Samsung', price: 400,img: 'https://picsum.photos/600/300'},
    {   id: 2, title: 'Apple', price: 65000,img: 'https://picsum.photos/600/300'},
    {   id: 3, title: 'LG', price: 35000, img: 'https://picsum.photos/600/300'},    
    {   id: 4, title: 'Honor', price: 50000,img: 'https://picsum.photos/600/300'},
];
const products2 = [
    {   id: 1, title: 'HTC', price: 400,img: 'https://picsum.photos/600/300'},
    {   id: 2, title: 'Philips', price: 65000,img: 'https://picsum.photos/600/300'},
    {   id: 3, title: 'Sony', price: 35000, img: 'https://picsum.photos/600/300'},    
    {   id: 4, title: 'Lenovo', price: 50000,img: 'https://picsum.photos/600/300'},
];

const renderProduct = (x) =>
    `<div class="product-item">
        <img src = ${x.img}>
        <div class="product-item__discription">
            <h3>${x.title}</h3>
            <p>${x.price}</p>
            <button class="buy-btn">Купить</button>
        </div>
    </div>`;

const renderPage = list => {

    document.querySelector('.products').innerHTML = list.map(product => renderProduct(product)).join(''); 

    //массив преобразуется в строку (и использует запятую в качестве разделителя по умолчанию)
    // const productsList = list.map(item => renderProduct(item));
    //Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку. В качестве разделителя задается пустая строка.
    //document.querySelector('.products').innerHTML = productsList.join("")
    
};



renderPage(products.concat(products2));

