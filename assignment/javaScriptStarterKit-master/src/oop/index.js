class Customer{
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber=customerNumber
    }
}

let customer=new Customer(1,"123456789")
//prototyping
customer.name="Murat Kurtboğan"
console.log(customer.name)

Customer.bisey="Bişey"
console.log(Customer.bisey)

console.log(customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(firstname,id,customerNumber){
        super(id,customerNumber)
        this.firstname=firstname
    }

}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
    
}


let products = [
    {id:1,name:"Acer Laptop",unitPrice:15000},
    {id:2,name:"Asus Laptop",unitPrice:16000},
    {id:3,name:"Hp Laptop",unitPrice:13000},
    {id:4,name:"Dell Laptop",unitPrice:12000},
    {id:5,name:"Casper Laptop",unitPrice:17000}
]
console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")

console.log("<ul>")
products.map(product=>{
    console.log(product)
    console.log(`<li>${product.name}</li>`)
})
console.log("</ul>")

//filter yeni bir array oluşturur
let filterProducts = products.filter(product=>product.unitPrice>12000)
console.log(filterProducts)

let carTotal= products.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(carTotal)

let carTotal2=products
                    .filter(p=>p.unitPrice>13000)
                    .map(p=>{
                        p.unitPrice=p.unitPrice*1.18
                        return p
                    })
                    .reduce((acc,p)=>acc+p.unitPrice,0)
console.log(carTotal2)