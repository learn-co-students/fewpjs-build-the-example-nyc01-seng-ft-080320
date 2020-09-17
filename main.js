// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const error = document.getElementById("modal")  
error.classList.add("hidden");

document.addEventListener("DOMContentLoaded", e=>{
  clickHandler();
})

clickHandler = () =>{
  
 

  document.addEventListener('click', e =>{
    if (e.target.classList.contains("like-glyph")){
        mimicServerCall()
        .then( response => { heart(e.target)
        })
        .catch(data => {
          error.classList.remove("hidden")
          const message = error.lastElementChild
          message.textContent = data
        } );
    }

  })
}

function heart(target){
  // if (target.classList.contains("activated-heart")){
  //   target.classList.remove("activated-heart")
    
  // }else{
  //   target.classList.add("activated-heart")
  // }
  target.classList.toggle("activated-heart")
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
