//Hide all but first 10 students on list
// note to self: These student variables saved globally since many students are removed from HTML dynamically and may not be searchable within the functions
var studentList = document.querySelector('.student-list');
var studentItems = document.querySelectorAll('.student-list .student-item');
var studentNames = document.querySelectorAll('.student-details h3');
var studentEmails = document.querySelectorAll('.email');
var pageDiv = document.querySelector('.page');
var pageHeader = document.querySelector('.page-header');

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
    //for each 10 students, create and append li to the paginationList.
  var counter = 0;
  var currentNumberOfStudents = document.querySelectorAll('.student-list .student-item');
  for (var i=1; i <= currentNumberOfStudents.length; i+=10) {
    //starts off with 1 to add a pagination link if there is at least 1 student
    //once it hits 11 (the first loop) a second pagination link should be added
    counter += 1; //counter to increase pagination number consecutively
    var paginationListItem = createPaginationNumber(counter, '#');
    paginationList.appendChild(paginationListItem);
  }

  return paginationDivElement;
};

//remove pagination link function
var removePagination = function() {
  var paginationDivElement = document.querySelector('.pagination');
  pageDiv.removeChild(paginationDivElement);
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

//appending the pagination to the bottom of the page
var pagination = createPagination();
pageDiv.appendChild(pagination);
//once javascript loads, only first 10 students are shown
hideStudents();
showTenStudents();
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
    //cycle through all students & only append 10 at a time depending on the clicked number
    for (var j=0; j < studentItems.length; j++) {
      if ((clickedNumber*10 - 10) <= j && j < clickedNumber*10) {
        studentList.appendChild(studentItems[j]);
      }
    }
  };
}

var createSearchForm = function() { //function to create search box
  var searchDiv = document.createElement('div');
  var input = document.createElement('input');
  var button = document.createElement('button');
  searchDiv.className = 'student-search';
  input.placeholder = 'Search for students...';
  input.type = "text";
  button.innerText = 'Search';
  searchDiv.appendChild(input);
  searchDiv.appendChild(button);
  return searchDiv;
};
var searchForm = createSearchForm();
pageHeader.appendChild(searchForm); //add searchBox to pageHeader

//when Search button is clicked,
var searchButton = document.querySelector('.student-search button');
searchButton.onclick = function() {
  console.log('button clicked');

  //filter thru students names and emails and if either include what was searched
  var input = document.querySelector('input[type=text]'); //rewatch video to see why its like this & not just 'input'
  var counter = 0;
  for (var i=0; i < studentNames.length; i++) {
    var studentNameElement = studentNames[i];
    var studentName = studentNameElement.innerText;
    if ((studentName.includes(input.value) === true || studentName.includes(input.value) === true) && input.value !== '') {
      //traverse up the selected student's parent node to select the whole list item
      var selectedStudentDiv = studentNameElement.parentNode;
      var selectedStudentListItem = selectedStudentDiv.parentNode;
      //hide all students (only if counter at 0) and then append selected li to studentList
      if (counter === 0) {
        hideStudents();
      }
      studentList.appendChild(selectedStudentListItem);
      counter += 1;
    }
  }
  //if no matches found, append a message in html to tell no matches
  if (counter === 0 || input.value === '') { //if no students were appended, counter would be 0
    hideStudents();
    var noMatchListItem = document.createElement('li');
    noMatchListItem.innerText = "No matches were found."
    studentList.appendChild(noMatchListItem);
  }
  //reset the pagination links
  removePagination();
  var pagination = createPagination();
  pageDiv.appendChild(pagination);
};




























  //end
