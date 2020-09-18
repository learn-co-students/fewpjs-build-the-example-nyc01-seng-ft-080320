// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector('#modal')
errorModal.classList.add('hidden')

document.addEventListener('click', e => {
  if(e.target.parentNode.className === 'like') {
    mimicServerCall()
    .then(() => { changeHeart(e.target) })
    .catch(() => {
      errorModal.className = ''
      errorModal.innerText = 'Error! Server cannot be reached! '
      setTimeout(() => {
        errorModal.className = 'hidden'
      }, 5000)
    })
  }
})
function changeHeart(element) {
  if(element.className === 'activated-heart') {
    element.innerText = EMPTY_HEART
    element.className = ''
  } else {
    element.innerText = FULL_HEART
    element.className = 'activated-heart'
  }
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
