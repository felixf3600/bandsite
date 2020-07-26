// global variables
// loading the array with mock data as we have not database yet
// comments variables
const commentObjectArray = [
  {
    name: "Theodore Duncan",
    comment:
      "How can someone ne so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definatelymy favorite ever!",
    datestamp: new Date(2018, 11, 18),
    photo: " ",
  },
  {
    name: "Gary Wong",
    comment:
      "Every time I see him shred I feel so motivated to get off the couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
    datestamp: new Date(2018, 11, 12),
    photo: " ",
  },
  {
    name: "Micheal Lyons",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    datestamp: new Date(2018, 10, 15),
    photo: " ",
  },
];

// DOM loaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // the DOM for shows and comments section
  const commentsContainer = document.getElementById(
    "comments__display-container"
  );
  // DOM for form
  const form = document.querySelector(".comments__form");
  // Display the initial comments
  displayComment(commentsContainer);

  // event listener for the comments button
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents normal button operations
    const isDataValid = formFilled(event);
    if (isDataValid) {
      let newComment = getCommentPost(event);
      commentObjectArray.push(newComment); // writes into the global array so no need to return stuff
      clearComments(commentsContainer); // clears the DOM tree for the comments section
      displayComment(commentsContainer); // diplays the comments
    } else {
      alert("please fill form.");
    }
  });
  // checks to see if the form is filled
  function formFilled(event) {
    const name = event.target.commentsFormName.value;
    const comment = event.target.commentsFormComment.value;
    return !!name && !!comment;
  }
  //displays and appends the comment section
  //clears the DOM for for the comments section. in order to "repaint" the DOM
  function clearComments(comment) {
    comment.innerHTML = "";
  }
  //clears the form to allow new input...
  function clearForm() {
    commentForm.commentsFormName.value = "";
    commentForm.commentsFormComment.value = "";
  }
  // this gets the comment posted
  function getCommentPost(event) {
    const newComment = {
      name: event.target.commentsFormName.value,
      comment: event.target.commentsFormComment.value,
      datestamp: new Date(),
      photo: " ",
    };
    // clears the input elements
    clearForm();
    return newComment; //returns the new comment as an object
  }
  // creates an element and sets the class
  function createEl(elementType, classes) {
    const element = document.createElement(elementType);
    element.setAttribute("class", classes);
    return element;
  }
  // adds label to a label element
  function addsLabel(elementType, classes, label) {
    let element = createEl(elementType, classes);
    element.innerHTML = label;
    return element;
  }
  // creates an element using the array
  function addElement(index, elementType, classes, key) {
    let element = createEl(elementType, classes);
    element.innerHTML = commentObjectArray[index][key];
    return element;
  }
  // appends a child to a parent
  function appendComment(tree, comment) {
    return tree.appendChild(comment);
  }

  //converts the date and returns the appropriate format
  function convertDate(time) {
    let postDay = time.getDate();
    let postMonth = time.getMonth();
    let postYear = time.getFullYear();
    let now = new Date();
    modifiedDate = `${postDay}/${postMonth}/${postYear}`;
    let timeDifference = (now - time) / 1000;
    let returnTime = "";
    console.log(modifiedDate);
    if (timeDifference < 60) {
      returnTime = `${Math.ceil(timeDifference)} sec ago`;
    } else if (timeDifference < 3600) {
      returnTime = `${Math.floor(timeDifference / 60)} min ago`;
    } else if (timeDifference < 86400) {
      returnTime = `${Math.floor(timeDifference / 3600)} hours ago`;
    } else if (timeDifference < 604800) {
      returnTime = `${Math.floor(timeDifference / 86400)} days ago`;
    } else {
      returnTime = modifiedDate;
    }

    return returnTime;
  }
  // creates the date element and returns it
  function addDate(index, elementType, classes, key) {
    time = commentObjectArray[index][key];
    let date = convertDate(time);
    return addsLabel(elementType, classes, date);
  }
  //sorts the array and returns sorted array
  function sortArray() {
    commentObjectArray.sort((b, a) => a.datestamp - b.datestamp);
  }

  // main function that puts together the comment and appends it to the DOM
  function displayComment(commentTree) {
    const commentList = document.createElement("ul"); //creates a unordered list
    commentList.className = "comments__list";
    commentList.innerHTML = "";
    // sorts array before displaying
    sortArray();
    let length = commentObjectArray.length - 1; // gets the lenght of the array
    // because this needs to display last first the index decreases
    let sorted;
    for (i = length; i >= 0; i--) {
      const newComment = document.createElement("li"); //  creates the list item
      newComment.className = "comments__single-comment-container"; // adds a class to the list item
      const innerContainer = document.createElement("div");
      innerContainer.className = "comments-single-right";
      // creates the elements
      const photo = addElement(i, "div", "comments__single-photo", "photo");
      const name = addElement(i, "p", "comments__single-name", "name");
      const date = addDate(i, "p", "comments__single-date", "datestamp");
      const comment = addElement(i, "p", "comments__single-comment", "comment");
      // appends labels and elements
      newComment.appendChild(photo);
      innerContainer.appendChild(name);
      innerContainer.appendChild(date);
      innerContainer.appendChild(comment);
      // appends the li to ul
      newComment.appendChild(innerContainer);
      // appends the ul to the section
      appendComment(commentList, newComment);
    }
    // appends the section to the DOM
    appendComment(commentTree, commentList);
  }
});
