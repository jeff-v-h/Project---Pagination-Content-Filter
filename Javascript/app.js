//Hide all but first 10 students on list
var studentList = document.getElementsByClassName('student-list')[0];
var studentItems = document.querySelectorAll('.student-list .student-item');
console.log(studentList);

  //hide the students
var hideStudents = function() {
  //traverse through all children elements and remove them from the studentList
  while (studentList.firstChild) {
    studentList.removeChild(studentList.firstChild);
  }
}

//function to show students on first page
var showStudents = function() {
  for (var i=0; i<10; i++) {
    studentList.appendChild(studentItems[i]);
  }
}


hideStudents();
showStudents();
