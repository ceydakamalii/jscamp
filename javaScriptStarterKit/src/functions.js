function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi! : ürün : "+ productName + " ,adet : "+quantity)
}
addToCart()
addToCart(10,"Yumurta")
addToCart(10,undefined)
addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}
addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5 }
function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}
addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5 }
let product3 = {productName:"Elma", unitPrice:10, quantity:5 }
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)//Karpuz

function addToCart4(x) {
    console.log(products)
}
let products = [
    {productName:"Elma", unitPrice:10, quantity:5 },
    {productName:"Armut", unitPrice:10, quantity:5 },
    {productName:"Karpuz", unitPrice:10, quantity:5 }
]
addToCart4(products)

function add(number1, number2) {
    console.log(number1+number2)
}

add(20,30)

function add2(bi,...numbers) {//rest,diziye atar,parametrelerde sona yazılır.
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total+=numbers[i]
    }
    console.log(total)
    console.log(bi)
}
add2(20,30)
//add2(20,30,40)
//add2(10,20,30,40,50)
console.log(Math.max(1,2,3,4,5,60,70))

let numbers=[10,20,30,50,60,80,90]//spread,dizideki elemanları ayırma
console.log(Math.max(...numbers))

//Destructiring
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
console.log(icAnadolu.name)
console.log(marmara.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
     = {productName:"Elma", unitPrice:10, quantity:5 })
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
