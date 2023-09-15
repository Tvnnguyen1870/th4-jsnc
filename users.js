// xay dung class product
class Product {
    constructor(name, price, amount) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    addProduct(quantity) {
        this.amount = this.amount + quantity;
        console.log('thêm thành công');
    }
}

// xay dung class customer
class Customer {
    constructor(name, quantityOfProduct) {
        this.name = name;
        this.quantityOfProduct = quantityOfProduct;
    }
    buyProduct(product, quantity) {
        if(quantity > product.amount) return console.log('không đủ hàng bán');

        product.amount = product.amount - quantity;
        this.quantityOfProduct = this.quantityOfProduct + quantity;
        console.log('mua thành công')
    } 
}

const shirt = new Product('áo polo', 150000, 10);
console.log(shirt);
shirt.addProduct(5);


const customer = new Customer('nguyen', 0)
customer.buyProduct(shirt, 5);
customer.buyProduct(shirt, 2);
console.log(customer, shirt)

