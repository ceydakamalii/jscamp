import User from "./user.js"

export default class Customer extends User{
    constructor(id, fistName, lastName, city, age, creditCardNumber) {
        super(id, fistName, lastName, city, age)
        this.creditCardNumber=creditCardNumber
    }
}