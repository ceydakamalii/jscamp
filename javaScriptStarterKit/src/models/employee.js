import User from "./user.js"
export default class Employee extends User{
    constructor(id, fistName, lastName, city, age, salary) {
        super(id, fistName, lastName, city, age)
        this.salary=salary
    }
}