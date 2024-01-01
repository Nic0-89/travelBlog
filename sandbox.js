const btn = document.getElementById('submit')
const nameBox = document.getElementById('name-input')
const comment = document.getElementById('comment')
const commentCounter= document.getElementById("counter")
const form= document.getElementById('submit-comment')

//for date
const today = new Date()
myDate = new Intl.DateTimeFormat('en-us', { dateStyle: 'long' })

//counter for the comment
let count = 0;
let postId = 0

function addPost(){

   postId = postId+1;

   let posts_div = document.getElementById("posts");
   
   let newPost = document.createElement("div");
   newPost.setAttribute("id", "post_"+postId)

   let newUser =  document.createElement("p");
   newUser.style.fontSize = '12px'
   newUser.style.display = 'block'
   newUser.style.textAlign = 'left'
   newUser.style.color = 'black'
   newUser.innerHTML = nameBox.value

   let newComment = document.createElement("p");
   newComment.style.fontSize = '15px'
   newComment.innerText = comment.value;

   let newDate = document.createElement("p");
   newDate.style.fontSize = '12px'
   newDate.style.display = 'block'
   newDate.style.textAlign= 'left'
   newDate.style.color = 'black'
   newDate.innerHTML = `posted on ${myDate.format(today)}`

   newPost.appendChild(newUser)
   newPost.appendChild(newComment)
   newPost.appendChild(newDate)
   newPost.appendChild(document.createElement("br"))

   let delButton = document.createElement("button");
   delButton.innerHTML= '<span class="material-symbols-outlined">delete</span>'


   delButton.value = "post_"+postId
   delButton.onclick = function(){
      deletePost(delButton.value)
   };

   newPost.appendChild(delButton)
   posts_div.appendChild(newPost)

   count = count+1;
   commentCounter.innerHTML = count + ' Comments';
   form.reset()

};

function deletePost(delValue){
   let elDelete = document.getElementById(delValue);
   elDelete.remove();
   count = count-1;
   commentCounter.innerHTML = count + ' Comments';
}


































// const btn = document.getElementById('submit')
// const nameBox = document.getElementById('name-input')
// const comment = document.getElementById('comment')
// const commentCounter = document.getElementById("counter")
// const emailAddress = document.getElementById('email-address')
// const boxNewComment = document.getElementById('comments-added')
// const paragraphs=document.getElementsByClassName('userInfo')

// //counter for the comment
// let count = 1;

// function addingComments() {
//    collectInfo()
//    let post_div = document.getElementById("written-comments");
//    let content = document.createElement("p");
//    content.innerHTML = comment.value
//    content.classList.add('userInfo')
//    post_div.appendChild(content)
//    let deleteBtn = document.createElement("button")
//    deleteBtn.classList.add("deleteBtn")
//    deleteBtn.innerHTML = 'Delete'
//    post_div.appendChild(deleteBtn);
//    deleteBtn.addEventListener('click', removeElements)
   
//    //    let post_div = document.getElementById("written-comments");
     
//    // })
//    post_div.appendChild(document.createElement("br"))
//    commentCounter.innerHTML = count + ' Comments';
//    count++;
//    getDate()
// };

// // function deleteComment(){
// //    let post_div = document.getElementById("written-comments");   
// // let paragraph =document.querySelector("#comments-added");
// // post_div.removeChild(paragraph);
// // }
// function removeElements(){
//    document.querySelectorAll('.userInfo').remove();
// }

// // function removeElements(){
// //    document.querySelectorAll('.userInfo').forE
// ach(p => p.remove());
// // }
// function collectInfo() {
//    let userName = document.createElement("p")
//    userName.innerHTML = nameBox.value
//    userName.classList.add('userInfo')
//    userName.style.fontSize = '14px';
//    let emailUser = document.createElement("p")
//    emailUser.classList.add('userInfo')
//    emailUser.innerHTML = emailAddress.value
//    emailUser.style.fontSize = '14px';
//    let post_div = document.getElementById("written-comments");
//    post_div.appendChild(userName)
//    post_div.appendChild(emailUser)
//    post_div.appendChild(document.createElement("br"))

// }

// //keeping track of the date posted

// const today = new Date()
// myDate = new Intl.DateTimeFormat('en-us', { dateStyle: 'long' })

// function getDate() {
//    let post_div = document.getElementById("written-comments");
//    let datePost = document.createElement("p")
//    datePost.classList.add('userInfo')
//    datePost.innerHTML = `posted on ${myDate.format(today)}`
//    datePost.style.fontSize = '12px'
//    post_div.appendChild(datePost);
// }






