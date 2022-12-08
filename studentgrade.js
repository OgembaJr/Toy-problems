
//Creating a function with the function name inputStudentsMarks
function inputStudentsMarks(marks){
    //The program should run on the web console
    marks = prompt("Enter grade")
    //using the switch statement to create the logic for our grading system
    switch(true) {
        case (marks > 79 && marks <=100):
            console.log("Grade A");
            break;
        case (marks <= 79 && marks >= 60):
            console.log("Grade B");
             break;
        case (marks<=59 && marks>=49):
            console.log("Grade C");
             break;
           case (marks <= 49 && marks >= 40):
            console.log("Grade D");
             break;
        case (marks < 40 && marks >= 0):
            console.log("Grade E");
            break;
            //Student can't get marks more than 100 and less than 0 hence the INVALID SCORE
        default:
            console.log('INVALID SCORE');
      }

}
//Invoking the function in order for the progam to run
inputStudentsMarks();