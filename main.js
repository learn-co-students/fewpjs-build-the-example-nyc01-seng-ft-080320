// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Hide error message

const errorModel = document.querySelector("h2").parentElement
errorModel.classList.add("hidden")

let count = 1
// heart events
const clickHandler = ()=>{
  const body = document.querySelector("body")
  body.addEventListener('click', ()=>{
    clickedLike = event.target
    clickedLikeHeart = event.target.childNodes[1]
    
    console.log(clickedLikeHeart)
  // clickedLikeHeart.classList.add("activated-heart")
    if (clickedLike.matches('.like')){
      mimicServerCall()
      .then(()=>{
        clickedLikeHeart.classList.add("activated-heart")
        clickedLikeHeart.textContent = FULL_HEART
      })
      .catch(()=>{errorModel.classList.remove("hidden")})

      setTimeout(()=> errorModel.classList.add("hidden"), 5000);
      // console.log(event.target)
    }
  })
}

clickHandler()
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

