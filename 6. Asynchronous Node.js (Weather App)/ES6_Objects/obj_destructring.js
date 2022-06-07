// Object

const product={
    "label":"red note 4",
    "price":3,
    "stock":240,
}

// Acceccsing the object 
var label=product.label
var price=product.price
var stock=product.stock
console.log(label,price,stock)

// Object Destructing

var {label,price} =product
console.log(label,price)

// if a property not avialable , it shows undefined

var {label,price,rating} =product
console.log(label,price,rating)

// we can pass explicity values


var {label,price,rating=5} =product
console.log(label,price,rating)

// if value available inside the object , 
// it takes the value otherwise give value will be taken

var {label,price,rating=5,stock=500} =product
console.log(label,price,stock)

// we can even rename the 

