/** @format */

const studentArray = [{id:1,name:"john",age:"18",marks:80}, {id:2, name:"jack",age:"20", marks:85}, {id:3, name:"karen", age:"19",marks:35}];

function PrintStudentswithMap() {
  const filteredStudents = studentArray.filter(student => student.marks > 50);
  const mappedStudents = filteredStudents.map(student => `Name: ${student.name} Age: ${student.age} Marks: ${student.marks}`);
  console.log(mappedStudents);
}

function PrintStudentsbyForEach() {
  studentArray.forEach(student => {
    if (student.marks > 50) {
      console.log(`Name: ${student.name} Age: ${student.age} Marks: ${student.marks}`);
    }
  });
}

function addData() {
  const newStudent = {id:4,name:"susan",age:"20",marks:45};
  studentArray.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  const filteredArray = studentArray.filter(student => student.marks >= 50);
  console.log(filteredArray);
}

function concatenateArray() {
  const newStudentArray = [{id:5,name:"tom",age:"19",marks:60}, {id:6, name:"bob",age:"21", marks:65}, {id:7, name:"jim", age:"20",marks:70}];
  const concatenatedArray = studentArray.concat(newStudentArray);
  console.log(concatenatedArray);
}
