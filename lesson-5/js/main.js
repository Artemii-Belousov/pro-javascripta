const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'; // путь к рипозиторию из которого берем товары 

const app = new Vue({  // объект класса Vue
    el: '#app',       // синхронизация с id="app"
    data: {    // глобальные СВОЙСТВА которые доступны из верстки при помощи {{ }}, а из методов this
        userSearch: '', // фильтр (пустой)
        showCart: false,   // отвечает за показ карзины
        catalogUrl: '/catalogData.json',  // название файла содержащего товары для каталога товаров
        cartUrl: '/getBasket.json', // файл с товарами карзины
        cartItems: [],  //товары карзины
        filtered: [], // массив для товаров каталога (до учета фильтра)
        imgCart: 'https://picsum.photos/600/300',  //  картинка для товара карзины
        products: [],  // массив для товаров каталога (все)
        imgProduct: 'https://picsum.photos/600/300/' // картинка товара каталога
    },
    methods: {               // МЕТОДЫ
        getJson(url){    //метод getJson (на вход принимаем URL путь к ресурсу из которого берем товары)
            return fetch(url) // делаем соединение  с этим ресурсом
                .then(result => result.json())  // получаем массив товаров и этот массив преобразуем в  объект JS и вернем промис
                .catch(error => console.log(error)) // если был не корректно указан URL выводим в консоль ERROR
        },
        addProduct(item){   //  метод добавить товар
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result === 1){
                       let find = this.cartItems.find(el => el.id_product === item.id_product);
                       if(find){
                           find.quantity++;
                       } else {
                           const prod = Object.assign({quantity: 1}, item);//создание нового объекта на основе двух, указанных в параметрах
                           this.cartItems.push(prod)
                       }
                    }
                })
        },
        remove(item){  //  метод удалить товар
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        // Если товаров больше 1 уменьшаем на 1
                        if(item.quantity>1){
                            item.quantity--;
                            // если товар 1 удаляем из массива совсем при помощи метода splice
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
        filter(){  // метод фильтрации
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered =  this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){  // в первую очередь при создании объекта вызывается метод mounted
        this.getJson(`${API + this.cartUrl}`)  // заполняем массив товарами из JSON документов
            .then(data => {
                for (let item of data.contents){ // делаем обход массива товаров (берем из нашего объекта свойство "contents")
                    this.cartItems.push(item);   // каждый товар добавим в массив cartItems
                }
            });
        this.getJson(`${API + this.catalogUrl}`)  // заполняем массив товарами из JSON документов
            .then(data => {
                for (let item of data){  // находим массив объектов
                    this.$data.products.push(item);  // каждый товар добавим в массив products ($data если переопрнделяем products в этом методе, чтоб обращаться к этим методам из data )
                    this.$data.filtered.push(item);  // каждый товар добавим в массив filtered
                }
            });
        this.getJson(`getProducts.json`)   // заполняем массив товарами из JSON документов
            .then(data => {               // парсим локальный  файл
                for(let item of data){
                    this.products.push(item);
                    this.filtered.push(item);
                }
            })
    }

});

