//Hide all but first 10 students on list
var studentList = document.querySelector('.student-list');
var studentItems = document.querySelectorAll('.student-list .student-item');
var pageDiv = document.querySelector('.page');

  //hide the students
var hideStudents = function() {
  //traverse through all children elements and remove them from the studentList
  while (studentList.firstChild) {
    studentList.removeChild(studentList.firstChild);
  }
};

//function to show students on first page
var showTenStudents = function() {
  for (var i=0; i<10; i++) {
    studentList.appendChild(studentItems[i]);
  }
};

//dynamically create pagination links
var createPagination = function() {
  //creating the div and ul and dynamically appending to html
  var paginationDivElement = document.createElement('div');
  var paginationList = document.createElement('ul');
  paginationDivElement.className = 'pagination';
  paginationDivElement.appendChild(paginationList);

  //create pagination numbers depending on number of students
  var numberOfStudents = countStudents();
    //for each 10 students, create and append li to the paginationList.
  var counter = 0;
  for (var i=1; i <= numberOfStudents; i+=10) {
    //starts off with 1 to add a pagination link if there is at least 1 student
    //once it hits 11 (the first loop) a second pagination link should be added
    counter += 1; //counter to increase pagination number consecutively
    var paginationListItem = createPaginationNumber(counter, '#');
    paginationList.appendChild(paginationListItem);
  }

  return paginationDivElement;
};

//create pagination number as a list item with link and number
var createPaginationNumber = function(number, link) {
  var paginationListItem = document.createElement('li');
  var linkElement = document.createElement('a');
  // paginationLink.className = 'active';
  linkElement.innerText = number;
  linkElement.href = link;
  paginationListItem.appendChild(linkElement);
  return paginationListItem;
};

// calculate number of pages needed and add appropriate number of pages
  // function to count number of student items
var countStudents = function() {
  var numberOfStudents = studentItems.length;
  console.log('number of students is ' + numberOfStudents);
  return numberOfStudents;
};

//once javascript loads, only first 10 students are shown
hideStudents();
showTenStudents();
//appending the pagination to the bottom of the page
var pagination = createPagination();
pageDiv.appendChild(pagination);
// First pagination link is selected and given class name active
var firstPaginationLink = document.querySelector('.pagination a');
firstPaginationLink.className = 'active';

//clicking pagination number hides students and then shows the appropriate ones
var allLinks = document.querySelectorAll('.pagination a');
//if a link is clicked
//cycle through links
for (var i=0; i<allLinks.length; i++) {
    allLinks[i].onclick = function(event) {
    event.preventDefault(); //prevent link from working (otherwise page reloads)
    //removes active class from previously active link and adds it to clicked number
    var activeElement = document.querySelector('.active');
    activeElement.className = "";
    this.className = 'active';

    hideStudents(); //remove current students from list
    var clickedNumber = this.innerText;
    var numberOfStudents = countStudents();
    //cycle through all students & only append 10 at a time depending on the clicked number
    for (var j=0; j < numberOfStudents; j++) {
      if ((clickedNumber*10 - 10) <= j && j < clickedNumber*10) {
        studentList.appendChild(studentItems[j]);
      }
    }
  };
}




























  //end
