// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



document.addEventListener('DOMContentLoaded', e => {
  const errorModal = document.getElementById('modal');
  errorModal.className += ' hidden'; 
  

  const clickHandler = () => {
    document.addEventListener('click', e => {
      if (e.target.className === 'like-glyph') {
        mimicServerCall()
          .then(resp => console.log(resp))
          .then(disp => {
            e.target.className += ' activated-heart';
            e.target.textContent = FULL_HEART;
          })
          .catch(error => {
            errorModal.className = '';
            errorModal.textContent += ` ${error}`;
            setTimeout(() => { errorModal.className += ' hidden'; }, 5000)
          });  
      } else if (e.target.matches('.activated-heart')) {
        e.target.className = 'like-glyph';
        e.target.textContent = EMPTY_HEART;
      }
    });
  }

  clickHandler();
});

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
