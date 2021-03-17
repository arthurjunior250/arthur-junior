// document.querySelector('.btn-readmore').addEventListener('click', getJokes);
// // document.querySelector('.section-heading').addEventListener('click', getJokes);
// function getJokes(e) {
//   // console.log("clicked");
//   // const number = document.querySelector('input[type="number"]').value;

//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'https://icanhazdadjoke.com/', true);

//   xhr.onload = function() {
//     if(this.status === 200) {
//       const response = JSON.parse(this.responseText);
      
//       let output = '';

//       if(response.type === 'success') {
//         response.value.forEach(function(joke){
//           output += `${joke.joke}<br>`;
//         });
//       } else {
//         output += 
//         '<div id="loading"><img src="img/loading.gif" alt=""></div>';
//       }

//       document.querySelector('.jokes').innerHTML = output;
//     }
//   }
//   xhr.send();

//   e.preventDefault();
// }

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
    });
}



// modal


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