//Creating the netSalary function 
//Since there are 3 types of deductions we'll create 3 functions to represent them

//This is a Payee deduction function
function payeeFunction(grossIncome){
    let payee = 0
    if(grossIncome <= 24000){
        payee = grossIncome*0.1

    }
    else if(grossIncome>24000 && grossIncome <=32333){
        payee = grossIncome*0.25
    
    }
    else if(grossIncome>32333){
        payee = grossIncome*0.3
    
    }
    return payee 
}

//This is a nhif Deduction function
function nhifFunction(grossIncome){
    let deduction = 0
    if(grossIncome <=5999){
        deduction = 150
    }
    else if(grossIncome >=6000 && grossIncome<8000){
        deduction = 300
    }
    else if(grossIncome >=8000 && grossIncome<12000){
        deduction = 400
    }
    else if(grossIncome >=12000 && grossIncome<15000){
        deduction = 500
    }
    else if(grossIncome >=15000 && grossIncome<20000){
        deduction = 600
    }
    else if(grossIncome >=20000 && grossIncome<25000){
        deduction = 750
    }
    else if(grossIncome >=25000 && grossIncome<30000){
        deduction = 850
    }
    else if(grossIncome >=30000 && grossIncome<35000){
        deduction = 900
    }
    else if(grossIncome >=35000 && grossIncome<40000){
        deduction = 950
    }
    else if(grossIncome >=40000 && grossIncome<45000){
        deduction = 1000
    }
    else if(grossIncome >=45000 && grossIncome<50000){
        deduction = 1100
    }
    else if(grossIncome >=50000 && grossIncome<60000){
        deduction = 1200
    }
    else if(grossIncome >=60000 && grossIncome<70000){
        deduction = 1300
    }
    else if(grossIncome >=70000 && grossIncome<80000){
        deduction = 1400
    }
    else if(grossIncome >=80000 && grossIncome<90000){
        deduction = 1500
    }
    else if(grossIncome >=90000 && grossIncome<100000){
        deduction = 1600
    }
    else if(grossIncome >=100000){
        deduction = 1700
    }
    return deduction
}

//This is an nssf function
function nssfFunction(grossIncome){
    deduction = grossIncome*0.05
    if(deduction > 400){
        deduction = 400
    }
    return deduction
}

//This is our net salary function which finally calculates the net salary
function netSalary(){
    const inputBase = Number(document.getElementById('base').value)
    const inputBenefit = Number(document.getElementById('benefit').value)
    let grossIncome = inputBase + inputBenefit;
    let deductPayee = payeeFunction(grossIncome)
    let deductNhif = nhifFunction(grossIncome)
    let deductNssf = nssfFunction(grossIncome)
    let net = grossIncome - (deductPayee+deductNhif+deductNssf)

    document.getElementsByTagName('p')[0].textContent = "GROSS : " + grossIncome
    document.getElementsByTagName('p')[1].textContent = "PAYEE : " + deductPayee
    document.getElementsByTagName('p')[2].textContent =  "NHIF : " + deductNhif
    document.getElementsByTagName('p')[3].textContent = "NSSF : " + deductNssf
    document.getElementsByTagName('p')[4].textContent = "NET PAY : " + net

}