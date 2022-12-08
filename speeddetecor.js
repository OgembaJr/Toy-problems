
//Setting variables to be used in code execution
function  speedDetector(){
    speedCar = prompt("What's the Speed ")
//Passing out the argument given
switch (true) {
    case (speedCar < 70):
        console.log('Ok');
        break;
    case (speedCar >= 75 && speedCar < 80):
        console.log("Points: 1");
        break;
    case (speedCar >= 80 && speedCar < 85):
        console.log("Points: 2");
        break;
    case (speedCar >= 85 && speedCar < 90):
        console.log("Points: 3");
        break;
    case (speedCar >= 90 && speedCar < 95):  
        console.log("Points: 4");
        break;
    case (speedCar >= 95 && speedCar < 100):
        console.log("Points: 5");
        break;
    case (speedCar >= 100 && speedCar < 105):
        console.log("Points: 6");
        break;
    case (speedCar >= 105 && speedCar < 110):
        console.log("Points: 7");
        break;
    case (speedCar >= 110 && speedCar < 115):  
        console.log("Points: 8");  
        break; 
    case (speedCar >= 115 && speedCar < 120):
        console.log("Points: 9");
        break;
    case (speedCar >= 120 && speedCar < 125):
        console.log("Points: 10");
        break;
    case (speedCar >= 125 && speedCar < 130):
        console.log("Points: 11");
        break;
    case (speedCar >= 130 && speedCar < 135):  
    console.log("Points: 12");
        break;             
    default:
         console.log("License suspended.");
 }
}
//Invoking the function
speedDetector();