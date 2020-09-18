// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const body = document.querySelector('body')
body.addEventListener('click', e => {
    console.log(e.target)
    const clicked = e.target
    if (clicked.matches("span.like-glyph")){
        if(clicked.textContent === FULL_HEART){
            clicked.textContent = EMPTY_HEART
            clicked.classList.remove('activated-heart')
        } else {
            mimicServerCall("someURL")
            .then(response => {
                clicked.textContent = FULL_HEART
                clicked.classList.add('activated-heart')
            })
            .catch(error => {
                const errorModal = document.querySelector('div#modal')
                const errorMessage = errorModal.querySelector('p#modal-message')
                errorMessage.textContent = error
                errorModal.classList.remove('hidden')
                setTimeout(()=>{
                    errorModal.classList.add('hidden')
                }, 5000)
            })
        }
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
