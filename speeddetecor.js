
//Setting variables to be used in code execution
const speedCar = 70;

let points = ''
//Passing out the argument given
switch (true) {
    case (speedCar >= 75 && speedCar < 80):
        points = 1
        break;
    case (speedCar >= 80 && speedCar < 85):
        points = 2
        break;
    case (speedCar >= 85 && speedCar < 90):
        points = 3
        break;
    case (speedCar >= 90 && speedCar < 95):  
        points = 4   
    case (speedCar >= 75 && speedCar < 80):
        points = 5
        break;
    case (speedCar >= 80 && speedCar < 85):
        points = 6
        break;
    case (speedCar >= 85 && speedCar < 90):
        points = 7
        break;
    case (speedCar >= 90 && speedCar < 95):  
        points = 8  
        break; 
    case (speedCar >= 95 && speedCar < 100):
        points = 9
        break;
    case (speedCar >= 100 && speedCar < 105):
        points = 10
        break;
    case (speedCar >= 105 && speedCar < 110):
        points = 11
        break;
    case (speedCar >= 115 && speedCar < 120):  
        points = 12
        break;             
    default:
         console.log("License suspended.");
}