// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

likeClassStates = {
  "like-glyph" : "activated-heart",
  "activated-heart" : "like-glyph"
}

errorModal = document.querySelector('#modal')

document.addEventListener('click', e => {
  if (e.target.parentNode.className === 'like') {
    mimicServerCall()
    .then(() => {
      e.target.textContent = glyphStates[e.target.textContent];
      e.target.className = likeClassStates[e.target.className];
    })
    .catch(() => {
      errorModal.className = '';
      setTimeout(() => {
        errorModal.className = 'hidden'
      }, 3000);
    })
  }
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
