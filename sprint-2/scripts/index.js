// global variables
// loading the array with mock data as we have not database yet
// comments variables
let commentObjectArray = [
  {
    name: "Theodore Duncan",
    comment:
      "How can someone ne so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definatelymy favorite ever!",
    datestamp: "11/15/2018",
    photo: " ",
  },
  {
    name: "Gary Wong",
    comment:
      "Every time I see him shred I feel so motivated to get off the couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
    datestamp: "12/12/2018",
    photo: " ",
  },
  {
    name: "Micheal Lyons",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    datestamp: "12/18/2018",
    photo: " ",
  },
];

//converting time for the mock up. will probably need to use something different in order to calculate later
commentObjectArray[0].datestamp = new Date(2018, 11, 18);
commentObjectArray[1].datestamp = new Date(2018, 11, 12);
commentObjectArray[2].datestamp = new Date(2018, 10, 15);

//shows variables
let showsObjectArray = []; // array for the shows

// DOM loaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // the DOM for shows and comments section
  let showsContainer = document.getElementById("shows__container");
  let commentsContainer = document.getElementById(
    "comments__display-container"
  );
  // DOM for button
  let commentsButton = document.getElementsByClassName(
    "comments__submit-button"
  )[0];

  //clears the DOM for for the comments section. in order to "repaint" the DOM
  function clearComments(comment) {
    return (comment.innerHTML = "");
  }
  // this gets the comment posted
  function getCommentPost() {
    const commentForm = document.getElementById("comments__form");

    let newComment = {
      name: commentForm.commentsFormName.value,
      comment: commentForm.commentsFormComment.value,
      datestamp: new Date(),
      photo: " ",
    };
    console.log(newComment);
    return newComment; //returns the new comment as an object
  }
  // Display the initial comments
  displayComment(commentsContainer);

  // event listener for the comments button
  commentsButton.addEventListener("click", function (event) {
    event.preventDefault(); // prevents normal button operations
    let newComment = getCommentPost();
    commentObjectArray.push(newComment); // writes into the global array so no need to return stuff
    clearComments(commentsContainer); // clears the DOM tree for the comments section
    displayComment(commentsContainer); // diplays the comments
  });
  //displays and appends the comment section

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
    element.innerHTML = commentObjectArray[index][key];
    return element;
  }
  function appendComment(tree, comment) {
    return tree.appendChild(comment);
  }

  function displayComment(commentTree) {
    const commentList = document.createElement("ul"); //creates a unordered list
    commentList.innerHTML = "";
    length = commentObjectArray.length - 1; // gets the lenght of the array
    // because this needs to display last first the index decreases
    for (i = length; i >= 0; i--) {
      const newComment = document.createElement("li"); //  creates the list item
      newComment.className = "comments__single-comment-container"; // adds a class to the list item
      // creates the elements
      const photo = addElement(i, "div", "comments__single-photo", "photo");
      const name = addElement(i, "p", "comments__single-name", "name");
      const date = addElement(i, "p", "comments__single-date", "datestamp");
      const comment = addElement(i, "p", "comments__single-comment", "comment");
      const nameLabel = addsLabel("p", "comments__single-label", "NAME");
      const commentLabel = addsLabel("p", "comments__single-label", "COMMENT");
      // appends labels and elements
      newComment.appendChild(photo);
      newComment.appendChild(nameLabel);
      newComment.appendChild(name);
      newComment.appendChild(date);
      newComment.appendChild(commentLabel);
      newComment.appendChild(comment);
      appendComment(commentList, newComment);
    }
    appendComment(commentTree, commentList);
  }
});
