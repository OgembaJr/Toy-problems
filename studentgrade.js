
//Creating a function with the function name inputStudentsMarks
function inputStudentsMarks(marks){
    let studentMarks = ''
    //using the switch statement to create the grading system
    switch(true) {
        case (marks > 79):
            studentMarks = 'A';
            break;
        case (marks <= 79 && marks >= 60):
            studentMarks = 'B';
             break;
        case (marks<=59 && marks>=49):
            studentMarks = 'C';
             break;
           case (marks <= 49 && marks >= 40):
            studentMarks = 'D';
             break;
        case (marks < 40):
            studentMarks = 'E';
            break;
    //Passing an argument so that the code makes sense and is within scope
        case (marks > 100 && marks < 0):
            studentMarks = 'INVALID SCORE';
            break; 
    
        default:
          return 'INVALID SCORE';
      }

}
