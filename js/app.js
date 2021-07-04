// //////////////////////////////////////////////////////quote//////////////////////////////

const api = "https://api.quotable.io/random";

const quote = document.querySelector('.jokes');
const author = document.getElementById("autor");
// const btn = document.getElementsByClassName('btn-readmore');
document.querySelector('.btn-readmore').addEventListener('click', getQuote);
// btn.addEventListener("click", getQuote);

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `AUTHOR : ${data.author}`;
      if (data){
        removeSpinner();
      }
    });
    loadSpinner();
 
}



// ////////////////////////////////////////////modal////////////////////////////////////////////////


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".clicked");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// end modal





// ////////////////////spinner////////////////////
function loadSpinner() {
  document.querySelector(".spinner").classList.add("backdrop-bg");
  const spinner = `
      <div class="ring">
        Loading
        <div id="lool">
        <p></p> </div>
      </div>`;
  document.querySelector(".spinner").insertAdjacentHTML("afterbegin", spinner);
};

function removeSpinner() {
    const spinner = document.querySelector(".ring");
    document.querySelector(".spinner").classList.remove("backdrop-bg");
    spinner.parentNode.removeChild(spinner);
    return;
  };
