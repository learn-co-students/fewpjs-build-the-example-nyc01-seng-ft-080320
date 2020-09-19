// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', (e) => {

  //Add the `.hidden` class to the error modal in the HTML so it does not appear when the page first loads
  const errorTag = document.querySelector('#modal')
  errorTag.classList.add('hidden')

  // When a user clicks on an empty heart call `mimicServerCall` to simulate making a server request
  e
  const clickHandler = () => {
    document.addEventListener('click', (event) => {

        mimicServerCall("fakeurl")
        .then((response) => {
        if(event.target.matches('.like-glyph')) {  
            const likeTag = event.target
            likeTag.classList.remove('like-glyph')
            likeTag.classList.add('activated-heart')
            likeTag.textContent = FULL_HEART
        } else {
            const likeTag = event.target
            likeTag.classList.remove('activated-heart')
            likeTag.classList.add('like-glyph')
            likeTag.textContent = EMPTY_HEART
        }
        })
        .catch(function(error) {
          const errorTag = document.querySelector('#modal')
          errorTag.classList.remove('hidden')
          setTimeout(function() {errorTag.classList.add('hidden')}, 5000)

        })
      
    })
  }

  clickHandler();
})


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
