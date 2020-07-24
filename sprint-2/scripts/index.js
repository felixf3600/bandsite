// global variables
// loading the array with mock data as we have not database yet
// comments variables
let commentObjectArray = [
  {
    name: "Theodore Duncan",
    comment:
      "How can someone ne so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definatelymy favorite ever!",
    datestamp: "",
    photo: " ",
  },
  {
    name: "Gary Wong",
    comment:
      "Every time I see him shred I feel so motivated to get off the couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
    datestamp: "",
    photo: " ",
  },
  {
    name: "Micheal Lyons",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    datestamp: "",
    photo: " ",
  },
];

//converting time for the mock up. will probably need to use something different in order to calculate later
// let time1 = new Date(2018, 11, 18);
// let time2 = new Date(2018, 11, 12);
// let time3 = new Date(2018, 10, 15);

// commentObjectArray[0].datestamp = time1; //.getTime();
// commentObjectArray[1].datestamp = time2; //.getTime();
// commentObjectArray[2].datestamp = time3; //.getTime();
commentObjectArray[0].datestamp = new Date(2018, 11, 18); //.getTime();
commentObjectArray[1].datestamp = new Date(2018, 11, 12); //.getTime();
commentObjectArray[2].datestamp = new Date(2018, 10, 15); //.getTime();

// DOM loaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // the DOM for shows and comments section
  let commentsContainer = document.getElementById(
    "comments__display-container"
  );
  // DOM for form
  let form = document.querySelector(".comments__form");
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
  function convertDate(time) {
    let postDay = time.getDate();
    let postMonth = time.getMonth();
    let postYear = time.getYear();
    let now = new Date();
    modifiedDate = `${postDay}/${postMonth}/${postYear}`;
    let timeDifference = (now - time) / 1000;
    let returnTime = "";
    console.log(modifiedDate);
    if (timeDifference < 60) {
      returnTime = `${Math.ceil(timeDifference)} seconds ago`;
    } else if (timeDifference < 3600) {
      returnTime = `${Math.floor(timeDifference / 60)} minutes ago`;
    } else if (timeDifference < 86400) {
      returnTime = `${Math.floor(timeDifference / 3600)} hours ago`;
    } else if (timeDifference < 604800) {
      returnTime = `${Math.floor(timeDifference / 86400)} days ago`;
    } else {
      returnTime = modifiedDate;
    }
    console.log(timeDifference);
    return returnTime;
  }
  function addDate(index, elementType, classes, key) {
    // let date = commentObjectArray[index][key];
    // let year = Date(commentObjectArray[index][key]);
    // let year2 = year.getFullYear();
    // console.log(year2);
    // let date = new Date(commentObjectArray[index][key])
    //   .toLocaleDateString()
    //   .split("/");
    // console.log(date);
    time = commentObjectArray[index][key];
    console.log(time);
    let date = convertDate(time);
    return addsLabel(elementType, classes, date);
  }
  function displayComment(commentTree) {
    const commentList = document.createElement("ul"); //creates a unordered list
    commentList.className = "comments__list";
    commentList.innerHTML = "";
    let length = commentObjectArray.length - 1; // gets the lenght of the array
    // because this needs to display last first the index decreases
    for (i = length; i >= 0; i--) {
      const newComment = document.createElement("li"); //  creates the list item
      newComment.className = "comments__single-comment-container"; // adds a class to the list item
      // creates the elements
      const photo = addElement(i, "div", "comments__single-photo", "photo");
      const name = addElement(i, "p", "comments__single-name", "name");
      const date = addDate(i, "p", "comments__single-date", "datestamp");
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
