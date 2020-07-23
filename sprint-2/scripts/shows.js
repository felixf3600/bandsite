//shows variables
let showsObjectArray = [
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

document.addEventListener("DOMContentLoaded", function () {
  let showsContainer = document.getElementById("shows__container");
  let arrayLength = showsObjectArray.length;
  const showsList = document.createElement("ul"); //creates a unordered list
  showsList.className = "shows__list";
  createInitialheader(showsContainer, showsList);
  console.log(showsObjectArray);
  for (i = 0; i < arrayLength; i++) {
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
    appendComment(showsList, newShow);
    console.log(newShow);
    console.log(showsList);
  }
  appendComment(showsContainer, showsList);

  function createInitialheader(tree, section) {
    const newShow = document.createElement("li"); //  creates the list item
    newShow.className = "shows__single-title-container"; // adds a class to the list item
    const dateLabel = addsLabel("p", "shows__label", "DATE");
    const venueLabel = addsLabel("p", "shows__label", "VENUE");
    const locationLabel = addsLabel("p", "shows__label", "LOCATION");
    newShow.appendChild(dateLabel);
    newShow.appendChild(venueLabel);
    newShow.appendChild(locationLabel);
    appendComment(section, newShow);
    appendComment(tree, section);
  }

  function createEl(elementType, classes) {
    const element = document.createElement(elementType);
    element.setAttribute("class", classes);
    return element;
  }
  function addsLabel(elementType, classes, label) {
    let element = createEl(elementType, classes);
    element.innerHTML = label;
    return element;
  }
  function addElement(index, elementType, classes, key) {
    let element = createEl(elementType, classes);
    element.innerHTML = showsObjectArray[index][key];
    return element;
  }
  function appendComment(tree, comment) {
    return tree.appendChild(comment);
  }
});
