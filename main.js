const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const toggleErrorBanner = () => {
  let errorBanner = document.querySelector("#modal")
  errorBanner.classList.toggle("hidden");
}

toggleErrorBanner();

document.addEventListener("DOMContentLoaded", () => {

  const clickHandler = () => {
    document.addEventListener("click", (e) => {
      if(e.target.matches(".like-glyph")) {
        mimicServerCall()
        .then(response => {
          toggleHeart(e.target);
          toggleLikePrompt(e.target);
        })
        .catch(data => {
          addErrorBannerMsg(data);         
          toggleErrorBanner();
          setTimeout(toggleErrorBanner, 5000);
        })
      }
    })
    
  }

  const addErrorBannerMsg = (msg) => {
    errorBanner.innerText = msg; 
  }

  const toggleHeart = (target) => {
    target.classList.toggle("activated-heart");
  }

  const toggleLikePrompt = (target) => {
    let parent = target.parentElement
    if (parent.childNodes[0].textContent === "Like! ") {
      parent.childNodes[0].textContent = "Unlike! ";
    } else {
      parent.childNodes[0].textContent = "Like! ";
    }
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
