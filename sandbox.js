const btn = document.getElementById('submit')
const nameBox = document.getElementById('name-input')
const comment = document.getElementById('comment')
const commentCounter = document.getElementById("counter")
const whoPosted = document.getElementById('date-and-who')
const boxNewComment = document.getElementById('comments-added')
const newParagrah = document.createElement('p')

//counter for the comment
let count = 1;

function addingComments() {
      var post_div = document.getElementById("written-comments");
      var content = document.createElement("p");
      content.innerHTML = comment.value
      post_div.appendChild(content)
      post_div.appendChild(document.createElement("br"))
         commentCounter.innerHTML = count + ' Comments';
   count++;
};


function displayComment() {
   boxNewComment.innerHTML = commentBox[count];
   boxNewComment.style.display = 'block';
   
}
// const button = document.createElement('button')
// button.id= `${post.id}`
// button.innerText = 'Leave a Comment'
// postContainer.appendChild(button)

function createNewElement() {
   const newP = document.createElement('p');
   const newComment = commentBox[count]
   newP.appendChild(newComment)
}
//keeping track of the date posted
let myDate = new Date()

let myYear = myDate.getFullYear()
let myMonth = myDate.getMonth()
let myDay = myDate.getDay() - 1

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log(months)
console.log(myMonth)

function getDate() {
   console.log(`posted on ${days[myDay]} ${myDay}, ${months[myMonth]}, ${myYear}`)
}







