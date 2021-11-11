//var, let, const
//var sayi1 = 10
//var sayi1 = "Engin Demiroğ"
//console.log(sayi1)//hata vermez

//let sayi1 = 10
//let sayi1 = "Engin Demiroğ"
//console.log(sayi1)//hata verir

//let sayi2 = 10
//sayi2 = "Engin Demiroğ"
//console.log(sayi2)

let sayi1=10
sayi1="Engin Demiroğ"
let student={id:1, name:"Engin"}
console.log(student)

function save(puan=10,ogrenci) {
    console.log(ogrenci.name+ " : "+ puan)
}
save(undefined,student)

let students = ["Engin Demiroğ","Ceyda Kamalı","Batuhan Şahin","Engin Kitap"]
console.log(students)

let students2=[student,{id:2,name:"Ceyda Kamalı"},"Ankara",{city:"İstanbul"}]
console.log(students2)

//rest:geriye kalan parametreler, gelen değerleri diziye atar
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products)
}
console.log(typeof showProducts)
showProducts()//id=undefined products bir boş array
showProducts(10,"Elma","Armut","Karpuz")
showProducts(10,["Elma","Armut","Karpuz"])
console.log(Math.max(1,2,3,60,82,97,64,21,35,0,18))//rest parametre ister

//spread:ayrıştırmak demektir.Diziden çıkartır.
let points=[1,2,3,60,82,97,64,21,35,0,18]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring:elinizdeki arraylerin değerlerini değişkenlere atama yöntemi,let ile tanımlarız
let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)//10000
}
someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)

