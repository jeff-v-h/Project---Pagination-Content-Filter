//Hide all but first 10 students on list
var studentList = document.getElementsByClassName('student-list')[0];
var studentItems = document.querySelectorAll('.student-list .student-item');
var pageDiv = document.querySelector('.page');
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

//dynamically create pagination links
  //append a with href '#' and once has class 'active'
var createPagination = function() {
  //creating the div and ul and calling function to create pagination number
  var paginationDivElement = document.createElement('div');
  var paginationList = document.createElement('ul');
  var paginationListItem = createPaginationNumber(1, '#');

  paginationDivElement.className = 'pagination';
  //appending the elements together to prepare for dynamically adding html
  paginationDivElement.appendChild(paginationList);
  paginationList.appendChild(paginationListItem);

  return paginationDivElement;
}

//create pagination number as a list item with link and number
var createPaginationNumber = function(number, link) {
  var paginationListItem = document.createElement('li');
  var linkElement = document.createElement('a');
  // paginationLink.className = 'active';
  linkElement.innerText = number;
  linkElement.href = link;
  paginationListItem.appendChild(linkElement);
  return paginationListItem;
}

hideStudents();
showStudents();
//appending the pagination to the page
var paginationLinks = createPagination();
pageDiv.appendChild(paginationLinks);

// calculate number of pages needed and add appropriate number of pages
  // function to count number of student items
  // function to divide b 10
  // for each 10 students, append to a new pagination number
