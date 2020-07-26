//shows variables
const showsObjectArray = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco",
    link: " ",
  },
  {
    date: "Tues Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco",
    link: " ",
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Lounge",
    location: "San Fancisco",
    link: " ",
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fancisco",
    link: " ",
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Fancisco",
    link: " ",
  },
  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Fancisco",
    link: " ",
  },
]; // array for the shows
//shows functions
//DOM event listener
document.addEventListener("DOMContentLoaded", function () {
  const showsContainer = document.getElementById("shows__container"); //grabs the shows container
  const arrayLength = showsObjectArray.length; // grabs the length of the show array
  const showsList = document.createElement("ul"); //creates a unordered list
  showsList.className = "shows__list"; //sets the class name of the unordered list
  createInitialheader(showsContainer, showsList); /// creates the initial show headers
  for (i = 0; i < arrayLength; i++) {
    // loops thru array to display
    const newShow = document.createElement("li"); //  creates the list item
    newShow.className = "shows__single-container"; // adds a class to the list item
    // creates the elements
    const date = addElement(i, "p", "shows__single-date", "date");
    const venue = addElement(i, "p", "shows__single-venue", "venue");
    const location = addElement(i, "p", "shows__single-location", "location");
    const dateLabel = addsLabel("p", "shows__inner-label", "DATE");
    const venueLabel = addsLabel("p", "shows__inner-label", "VENUE");
    const locationLabel = addsLabel("p", "shows__inner-label", "LOCATION");
    const button = addsLabel("button", "shows__buy-button", "BUY TICKETS");
    // appends labels and elements
    newShow.appendChild(dateLabel);
    newShow.appendChild(date);
    newShow.appendChild(venueLabel);
    newShow.appendChild(venue);
    newShow.appendChild(locationLabel);
    newShow.appendChild(location);
    newShow.appendChild(button);
    appendComment(showsList, newShow); // appends to the ul
  }
  appendComment(showsContainer, showsList); //appends to the DOM
  // function to append the label headers
  function createInitialheader(tree, section) {
    const newShow = document.createElement("li"); //  creates the list item
    newShow.className = "shows__single-title-container"; // adds a class to the list item
    // creates the labels
    const dateLabel = addsLabel("p", "shows__label", "DATE");
    const venueLabel = addsLabel("p", "shows__label", "VENUE");
    const locationLabel = addsLabel("p", "shows__label", "LOCATION");
    //appends the labels to a list
    newShow.appendChild(dateLabel);
    newShow.appendChild(venueLabel);
    newShow.appendChild(locationLabel);
    //appends the list to the unordered list
    appendComment(section, newShow);
    // appends to the DOM
    appendComment(tree, section);
  }
  // creates the element and assings the class to the element
  function createEl(elementType, classes) {
    const element = document.createElement(elementType);
    element.setAttribute("class", classes);
    return element;
  }
  // adds label to the an element
  function addsLabel(elementType, classes, label) {
    let element = createEl(elementType, classes);
    element.innerHTML = label;
    return element;
  }
  // adds info to an element based on index and key
  function addElement(index, elementType, classes, key) {
    let element = createEl(elementType, classes);
    element.innerHTML = showsObjectArray[index][key];
    return element;
  }
  //appends a child to a parent
  function appendComment(tree, comment) {
    return tree.appendChild(comment);
  }
});
