//shows variables
let showsObjectArray = []; // array for the shows
//shows functions
//DOM event listener
document.addEventListener("DOMContentLoaded", function () {
  const showsContainer = document.getElementById("shows__container"); //grabs the shows container
  const showsList = document.createElement("ul"); //creates a unordered list
  showsList.className = "shows__list"; //sets the class name of the unordered list
  createInitialheader(showsContainer, showsList); /// creates the initial show headers
  getShows(showsContainer, showsList);
  console.log(showsObjectArray);

  function displayShows(showsContainer, showsList) {
    for (i = 0; i < showsObjectArray.length; i++) {
      // loops thru array to display

      const newShow = document.createElement("li"); //  creates the list item
      newShow.className = "shows__single-container"; // adds a class to the list item
      // creates the elements
      const date = addElement(i, "p", "shows__single-date", "date");
      const venue = addElement(i, "p", "shows__single-venue", "place");
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
  }
  // gets shows from the web
  function getShows(showsContainer, showsList) {
    axios
      .get(
        `https://project-1-api.herokuapp.com/showdates?api_key=c9001db9-412f-4feb-b1d1-a68a702e8546`
      )
      .then((response) => {
        showsObjectArray = response.data;
        displayShows(showsContainer, showsList);
      });
  }

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
