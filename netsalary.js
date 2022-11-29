
//Creating the netSalary function 

function grossSalary(value){
    const nhif = grossSalary - 1700
    const nssf = grossSalary - 1200
    const paye = grossSalary*.3

let netSalary = grossSalary - (nhif+nssf+paye)
}
console.log(netSalary);