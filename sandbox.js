const btn = document.getElementById('submit')
const nameBox = document.getElementById('name-input')
const comment = document.getElementById('comment')
const commentCounter = document.getElementById("counter")
const form = document.getElementById('submit-comment')

//for date
const today = new Date()
myDate = new Intl.DateTimeFormat('en-us', { dateStyle: 'long' })


//counter for the comment
let count = 0;
let postId = 0

// To creat new post
const newSection = document.getElementById('new-post')
const btnPost = document.getElementById('post')
const mainPost = document.getElementById("adding-post")
const whoPosted = document.getElementById("who-posted")
userPost = 0

function addPost() {
   userPost = userPost +1
   let divForPosts = document.getElementById('main-for-post')

   let newDiv = document.createElement("div");
   newDiv.setAttribute('id', 'userPost' + userPost)
   let newUser = document.createElement("p");
   
   newUser.innerHTML = whoPosted.value
   newUser.style.fontSize = '15px'
   newUser.style.textAlign = 'left'

   let newPosted = document.createElement("p")
   newPosted.setAttribute('class','parAdded')
   newPosted.innerHTML = mainPost.value
   newPosted.style.fontsize = '1.5rem';

   let newDatePost = document.createElement("p");
   newDatePost.style.fontSize = '13px'
   newDatePost.style.display = 'block'
   newDatePost.style.textAlign = 'left'
   newDatePost.innerHTML = `posted on ${myDate.format(today)}`

   divForPosts.appendChild(newUser)
   divForPosts.appendChild(document.createElement("br"))
   divForPosts.appendChild(newPosted)
   divForPosts.appendChild(document.createElement("br"))
   divForPosts.appendChild(newDatePost)

   let deletedButton = document.createElement("button");
   deletedButton.innerHTML = '<span class="material-symbols-outlined">delete</span>'


   deletedButton.value = "postNumber" + userPost;
   console.log(deletedButton)
   deletedButton.onclick = function () {
      deletePost(deletedButton.value)
};
divForPosts.appendChild(deletedButton)
mainPost.appendChild(divForPosts)

}

function deletePost(delValue) {
   let delPost = document.getElementById(delValue);
   delPost.remove();

}




function addComment() {

   postId = postId + 1;

   let posts_div = document.getElementById("posts");

   let newPost = document.createElement("div");
   newPost.setAttribute("id", "post_" + postId)

   let newUser = document.createElement("p");
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
   newDate.style.textAlign = 'left'
   newDate.style.color = 'black'
   newDate.innerHTML = `posted on ${myDate.format(today)}`

   newPost.appendChild(newUser)
   newPost.appendChild(newComment)
   newPost.appendChild(newDate)
   newPost.appendChild(document.createElement("br"))
   newPost.appendChild(document.createElement("hr"))

   let delButton = document.createElement("button");
   delButton.innerHTML = '<span class="material-symbols-outlined">delete</span>'

   delButton.value = "post_" + postId
   delButton.onclick = function () {
      deleteComment(delButton.value)
   };

   newPost.appendChild(delButton)
   posts_div.appendChild(newPost)

   count = count + 1;
   commentCounter.innerHTML = count + ' Comments';
   form.reset()

};

function deleteComment(delValue) {
   let elDelete = document.getElementById(delValue);
   elDelete.remove();
   count = count - 1;
   commentCounter.innerHTML = count + ' Comments';
}
