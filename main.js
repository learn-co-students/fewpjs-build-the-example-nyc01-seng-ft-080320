// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const addHiddenClassToErrorModal = () => {
    const modal = document.getElementById('modal').classList.add('hidden')
}

document.addEventListener("DOMContentLoaded", function(e){

    const clickHandler = () => {
        document.addEventListener('click', function(e){
            if(e.target.matches('.like-glyph')){
                mimicServerCall('url')
                .then(response => {
                    if(e.target.innerText === EMPTY_HEART){
                        e.target.innerText = FULL_HEART
                        e.target.classList.add('activated-heart')
                    } else if(e.target.innerText === FULL_HEART){
                        e.target.innerText = EMPTY_HEART
                        e.target.classList.remove('activated-heart')
                    }
                    
                    
                })
                .catch(function(error){
                    const modal = document.getElementById('modal')
                    modal.classList.remove('hidden')
                    document.querySelector('#modal-message').innerText = error
                    setTimeout(function(){modal.classList.add('hidden'); }, 5000);
                });

            }

        })


    }

  
       
        //when we click a like button we want to send a get request to the server???
        //if failure, 


    // When the server returns a success status
    // Change the heart to a full heart
    // Add the .activated-heart class to make the heart appear red
    // When a user clicks on a full heart
    // Change the heart back to an empty heart
    // Remove the .activated-heart class
    // Keep all your styling rules entirely in style.css. Do not manipulate any .style properties.
    // Only manipulate the DOM once the server requests respond. Do not make the heart full until you're inside a successful .then block.
    
    








clickHandler()

})
addHiddenClassToErrorModal()
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
