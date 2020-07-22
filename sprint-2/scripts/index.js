document.addEventListener("DOMContentLoaded", function () {
  // global variables
  let showsContainer = document.getElementById("shows__container");
  let commentsContainer = document.getElementById(
    "comments__display-container"
  );
  // loading the array with mock data as we have not database yet
  let commentObjectArray = [
    {
      name: "Micheal Lyons",
      comment:
        "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
      datestamp: "12/18/2018",
    },
    {
      name: "Gary Wong",
      comment:
        "Every time I see him shred I feel so motivated to get off the couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
      datestamp: "12/12/2018",
    },
    {
      name: "Theodore Duncan",
      comment:
        "How can someone ne so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definatelymy favorite ever!",
      datestamp: "11/15/2018",
    },
  ];

  //converting time for the mock up. will probably need to use something different in order to calculate later
  commentObjectArray[0].datestamp = new Date(2018, 11, 18);
  commentObjectArray[1].datestamp = new Date(2018, 11, 12);
  commentObjectArray[2].datestamp = new Date(2018, 10, 15);
  console.log(commentObjectArray);
  let showsObjectArray = []; // array for the shows
  let commentsButton = document.getElementsByClassName(
    "comments__submit-button"
  )[0]; // preps the submit button to listen
  // displays the initial mock up comments
  displayComment(commentObjectArray);
  //functions
  // event listener for the comments button
  commentsButton.addEventListener("click", function (event) {
    event.preventDefault(); // prevents normal button operations
    commentObjectArray.push(getCommentPost()); // writes into the global array so no need to return stuff
    clearComments();
    displayComment();
  });
});
function clearComments() {
  commentsContainer.innerHTML = "";
}

function getCommentPost() {
  let newComment = {
    name: document.getElementsById("comments__form-name").value,
    comment: document.getElementsById("comments__form-comment").value,
    datestamp: new Date(),
  }; // gets the new values
  return newComment;
}
function displayComment(array) {
  let newComment = document.createElement("div");
  newComment.className = "comments__single-comment-container";
  length = array.length;
  for (i = length; i > 0; i--) {
    // newComment.appendChild(addsPhoto(i));
    // newComment.appendChild(addsLabel("Name", "comments__single-name"));
    // newComment.appendChild(addsName(i));
    // newComment.appendChild(addsLabel("Time", "comments__single-time"));
    // newComment.appendChild(addsTime(i));
    // newComment.appendChild(addsLabel("Comment", "comments__single-comment"));
    // newComment.appendChild(addsComment(i));
    appendComment(newComment);
  }
}

function appendComment(comment) {
  //   commentsContainer.appendchild(comment);
}
function addsPhoto(index) {}
function addsLabel(key, className) {}
function addsName(index) {}
function addsTime(index) {}
function addsComment(index) {}
