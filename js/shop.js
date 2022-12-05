// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
// Array con productos (objetos) agregados directamente con push(). Los productos de esta matriz se repiten.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
// Versión mejorada de cartList. El carrito es una matriz de productos (objetos), pero cada uno tiene un campo de cantidad para definir su cantidad, por lo que estos productos no se repiten.
var cart = [];

var total = 0;
//contenedor donde se printara los elementos 
const contenedor = document.getElementById("cart_list");
// Exercise 1 - Añadir productos al array
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart 9
    const producto = products.find(item => item.id == id);
    //2. Add found product to the cartList array
    cartList.push(producto);
    //?console.log(cartList) 
    generateCart();
    printCart()
}
// Exercise 2 - Eliminar productos del carrito
function cleanCart() {
    //Volviendo a declarar el array cartList, se vacia el carrito 
    cartList=[];
    cart= cartList;
    printCart();
    //document.querySelector("#cart_list").remove();
    document.getElementById("total_price").innerHTML = 0
    document.getElementById("count_product").innerHTML = 0
} 
// Exercise 3 - Calcular el importe total de los productos del carrito
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let resultado = 0;
    for (let i = 0; i < cartList.length; i++) {
        resultado += cartList[i].price    
    }
    //document.querySelector("#total_price").innerHTML = resultado;
    //?console.log("Importe total "+resultado)
}
// Exercise 4 - Productos no repetidos del carrito
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    //*console.log(cartList);
    const productsAux = {}; //este es un objeto, dentro hay productos
    for (let i = 0; i < cartList.length; i++) {
        //*console.log(cartList[i].name) //obtengo el id del array de objetos carList
        //Si el producto esta en el carrito, solo se aumenta la cantidad
        if(productsAux[cartList[i].name]){
            productsAux[cartList[i].name].quantity ++; 
        }else{
            productsAux[cartList[i].name] = {...cartList[i],quantity:1}
        }
        
    }
    //transformar el objeto a un array de productos cart[]
    //*console.log(productsAux)
    cart = Object.values(productsAux); //aqui recojo los values del objeto y los almaceno en el array cart[]
    console.log(cart);
    calculateTotal();
}

// Exercise 5 - Implementar promociones del carrito de compras
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    //Si el usuario compra 3 o mas ampollas de aceite preu del producto desciende a 10E
    //console.log(cart);
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].name === "cooking oil" && cart[i].quantity >= 3){
            cart[i].price = 10;
            console.log("Importe unitario "+cart[i].price)
        }
        else if(cart[i].name === "Instant cupcake mixture" && cart[i].quantity >= 10){
            cart[i].price  = cart[i].price*cart[i].quantity*(2/3);
            console.log("Importe total: "+ cart[i].price.toFixed(2));
        } 
    }   
}

// Exercise 6, html - Mostrar al usuario el carrito de la compra
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let suma = 0;
    let counter = 0;
    contenedor.innerHTML = "";
    cart.forEach((producto) =>{
        console.log(producto)
        const tr = document.createElement('tr')
        tr.className = ("productoEnCart")
        tr.innerHTML = 
        "<td>"+producto.name+"</td>" + 
        "<td>"+producto.price+"</td>" + 
        "<td>"+producto.quantity+"</td>" +
        "<td>"+producto.quantity*producto.price+"</td>" + 
        "<td><button class='btn btn-danger' onclick=removeFromCart("+producto.id+")>X</button></td>";
        contenedor.appendChild(tr)
        suma += producto.quantity*producto.price;
        counter++;
    })
    document.getElementById("total_price").innerHTML = suma
    document.getElementById("count_product").innerHTML = cart.length
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    /*
    const producto = products.find(item => item.id == id);
    const productsAux = {}; //este es un objeto, dentro hay productos
    for (let i = 0; i < cartList.length; i++) {
        //*console.log(cartList[i].name) //obtengo el id del array de objetos carList
        //Si el producto esta en el carrito, solo se aumenta la cantidad
        if(productsAux[cartList[i].name]){
            productsAux[cartList[i].name].quantity ++; 
        }else{
            productsAux[cartList[i].name] = {...cartList[i],quantity:1}
        }
        
    }
    cartList.push(producto);
    */
}

// Exercise 9
function removeFromCart(id) {
    cartList = cartList.filter(prod => prod.id !== id)
    generateCart();
    printCart()

}

function open_modal(){
    console.log("Open Modal");
}
