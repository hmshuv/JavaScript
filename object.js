const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const himanshu = {
    salary: 500000,
}

himanshu.__proto__ = employee;