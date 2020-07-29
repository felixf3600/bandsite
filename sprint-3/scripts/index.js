// global variables
// loading the array with mock data as we have not database yet
// comments variables
let commentObjectArray = [];
let likeButton;
let deleteButton;
// DOM loaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // the DOM for shows and comments section
  const commentsContainer = document.getElementById(
    "comments__display-container"
  );
  // DOM for form
  const form = document.querySelector(".comments__form");
  // Display the initial comments
  getCommdent(commentsContainer);
  // event listener for the comments button
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents normal button operations
    const isDataValid = formFilled(event);
    if (isDataValid) {
      writeComment(event, commentsContainer); // writes to the site
    } else {
      alert("please fill form.");
    }
  });
  // gets comments from the web and displays
  function getCommdent(commentsContainer) {
    axios
      .get(
        `https://project-1-api.herokuapp.com/comments?api_key=c9001db9-412f-4feb-b1d1-a68a702e8546`
      )
      .then((response) => {
        commentObjectArray = response.data;
        displayComment(commentsContainer);
        likeButton = document.querySelectorAll(".comments__like-button");
        deleteButton = document.querySelectorAll(".comments__delete-button");
        buttonArrayListener(commentsContainer);
      });
  }
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
  function writeComment(event, commentsContainer) {
    axios
      .post(
        `https://project-1-api.herokuapp.com/comments?api_key=c9001db9-412f-4feb-b1d1-a68a702e8546`,
        {
          name: event.target.commentsFormName.value,
          comment: event.target.commentsFormComment.value,
        }
      )
      .then(() => {
        clearComments(commentsContainer); // clears the DOM tree for the comments section
        // clearButtonArrayListener();
        getCommdent(commentsContainer);
      });
    // clears the input elements
    clearForm();
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
  function addPhoto(elementType, classes) {
    let element = createEl(elementType, classes);
    element.innerHTML = "";
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
    time = new Date(commentObjectArray[index][key]);
    let date = convertDate(time);
    return addsLabel(elementType, classes, date);
  }
  //sorts the array and returns sorted array
  function sortArray() {
    commentObjectArray.sort((a, b) => a.timestamp - b.timestamp);
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
    // let sorted;
    for (i = length; i >= 0; i--) {
      const newComment = document.createElement("li"); //  creates the list item
      newComment.className = "comments__single-comment-container"; // adds a class to the list item
      const rightContainer = document.createElement("div");
      rightContainer.className = "comments__single-right";
      const leftContainer = document.createElement("div");
      leftContainer.className = "comments__single-left";

      // creates the elements
      const photo = addPhoto("div", "comments__single-photo");
      const name = addElement(i, "p", "comments__single-name", "name");
      const date = addDate(i, "p", "comments__single-date", "timestamp");
      const comment = addElement(i, "p", "comments__single-comment", "comment");
      const likeButton = createEl("button", "comments__like-button");
      const deleteButton = createEl("button", "comments__delete-button");
      //sets id values to the like and delete button
      likeButton.setAttribute("id", commentObjectArray[i].id);
      likeButton.innerHTML = `LIKES: ${commentObjectArray[i].likes}`;
      deleteButton.setAttribute("id", commentObjectArray[i].id);
      deleteButton.innerHTML = "DELETE";
      // appends the left container children to parent
      leftContainer.appendChild(photo);
      leftContainer.appendChild(likeButton);
      leftContainer.appendChild(deleteButton);
      // appends the rightcontainer children to parent
      rightContainer.appendChild(name);
      rightContainer.appendChild(date);
      rightContainer.appendChild(comment);
      // appends the li to ul
      newComment.appendChild(leftContainer);
      newComment.appendChild(rightContainer);
      // appends the ul to the section
      appendComment(commentList, newComment);
    }
    // appends the section to the DOM
    appendComment(commentTree, commentList);
  }
  // creating eventlisteners for all buttons
  function buttonArrayListener(commentsContainer) {
    //creates event listeners for all like buttons
    likeButton.forEach((button) =>
      button.addEventListener("click", (event) => {
        event.preventDefault();
        axios
          .put(
            `https://project-1-api.herokuapp.com/comments/${button.id}/like?api_key=c9001db9-412f-4feb-b1d1-a68a702e8546`
          )
          .then(() => {
            // clears the DOM tree for the comments section
            clearComments(commentsContainer);
            // clearButtonArrayListener();
            getCommdent(commentsContainer);
          });
      })
    );
    // creates event listeners for all delete buttons
    deleteButton.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        axios
          .delete(
            `https://project-1-api.herokuapp.com/comments/${button.id}?api_key=c9001db9-412f-4feb-b1d1-a68a702e8546`
          )
          .then(() => {
            // clears the DOM tree for the comments section
            clearComments(commentsContainer);
            // clearButtonArrayListener();
            getCommdent(commentsContainer);
          });
      });
    });
  }
  // function clearButtonArrayListener() {}
});
