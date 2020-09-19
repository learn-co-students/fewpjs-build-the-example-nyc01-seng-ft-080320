document.addEventListener('DOMContentLoaded', e => { 
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
  // const errorMessage = message =>{
  //   const modal = document.querySelector("#modal");
  //   modal.className = "error"
  //   const pTag = modal.querySelector('p')
  //   pTag.textContent = message
  // }
  let glyphStates = {
    "♡": "♥",
    "♥": "♡"
  };
  
  let colorStates = {
    "red" : "",
    "": "red"
  };
  
  let articleHearts = document.querySelectorAll(".like");
  
  function likeCallback(e) {
    let heart = e.target;
    mimicServerCall("bogusUrl")
     //OR: mimicServerCall("bogusUrl", {forceFailure: true})
      .then(function(serverMessage){
         heart.innerText = glyphStates[heart.innerText];
         heart.style.color = colorStates[heart.style.color];
      })
      .catch(function(error) {
        // Basic
        // alert("Something went wrong!");
        // or....
        document.getElementById("modal").className = "";
      });
  }
  
  for (let glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
  }
  

  // const clickHandler = () => {
  //   document.addEventListener('click', e => {
  //     if (e.target.matches(".like-glyph")) {
  //       mimicServerCall('fakeurl')
  //       .then(resp => {
  //         console.log('im working!')
  //       })
  //       .catch(error => {
  //       document.querySelector("#modal").className = " ";
  //       }
  //     )}
  //   })
    
  // }


  // clickHandler()

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

})