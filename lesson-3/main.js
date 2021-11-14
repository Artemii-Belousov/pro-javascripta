
class ProductList {
    // при создании объекта вызываем конструктор в нем параметр по умолчанию container  с классом '.products'
    constructor(container = '.products'){ 
        this.container = container;
        this.goods = [];
        this._fetchProducts(); // рекомендация, чтобы метод был вызван в текущем классе
        this.render();  //вывод товаров на страницу
        this.getCartPrice();
    }

    // вызывается метод в нем обращаемся к массиву goods и наполняем его товарами
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Samsung', price: 40000,img: 'https://picsum.photos/600/300'},
            {id: 2, title: 'Apple', price: 65000,img: 'https://picsum.photos/600/300'},
            {id: 3, title: 'LG', price: 35000, img: 'https://picsum.photos/600/300'},    
            {id: 4, title: 'Honor', price: 50000,img: 'https://picsum.photos/600/300'},
        ]
    }
    //вызываем метод(функцию) render
    render(){
        const block = document.querySelector(this.container); // ищем элемент верстки с селектором  this.container
        for(let product of this.goods){   //в цикле обходим каждый элемент массива goods 
            const item = new ProductItem(product); //делаем объект класса ProductItem и в конструктор этого класса передаем объект класса. У объекта item есть 4 свойства title,id,price,img
            block.innerHTML += item.render(); // обращаемся к block и наполняем версткой после вызова метода render
        }
    }
    
    getCartPrice() {  //метод для нахождения суммы всех товаров
        let sum = 0; // начальная сумма
        // this.goods.forEach(item =>{  // массив goods обходим циклом forEach
        //     sum += item.price; //из каждого элемента берем price и суммируем  
        // })
        // alert(`Сумма всех товаров в корзине: ${sum} рублей`)

        for(let product of this.goods){  // product(временная переменная) каждый элемент массива goods
            sum += product.price
        }
        alert(`Сумма всех товаров в корзине: ${sum} рублей`)
    }
    
    
}

class ProductItem{  // помещаем в переменную block для каждого товара
    constructor(product, img){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
   
    render(){
        return `<div class="product-item">
            <img src = ${this.img}>
            <div class="product-item__discription">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>
        </div>`
    }
}

class Cart{
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
    
    render(){
        
    }

}

class CartItem{
    render(){}
}

let list = new ProductList(); // начало разбора проекта: делаем объект класса ProductList
//list.render();
list.getCartPrice();





