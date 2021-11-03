const products = [
    {id: 1, title: 'Samsung', price: 40000, img: 'https://picsum.photos/600/300'},
    {id: 1, title: 'Apple', price: 65000, img: 'https://picsum.photos/600/300'},
    {id: 1, title: 'LG', price: 35000, img: 'https://picsum.photos/600/300'},
    {id: 1, title: 'Honor', price: 50000, img: 'https://picsum.photos/600/300'},
];

const renderProduct = (title, price, img) => 
    `<div class="product-item">
        <img srs = ${img}>
        <h3>${title}</h3>
        <p>${price}</p>
        <button class="buy-btn">Купить</button>
    </div>`;

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.img));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList
};



renderPage(products);






