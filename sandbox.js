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

const datePost= document.getElementsByClassName('post-date')
const dates=[]

function sortByDate(){
dates.push(datePost)
}

sortByDate()