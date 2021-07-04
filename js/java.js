// function message(){
// alert("welcome to Mr. Arthur Junior page. to day is "+ Date());
// }

function myfunction(){
var x=document.getElementByID("touch");
x.value=x.value.tolowercase();
}
function myfocus(x){
x.style.background="while"
}
function message1(){
alert("Do You Want To Leave This Page.")
}

////////////////////////////////////// loader=spinner/////////////////////////////

function loader(){
  // // show loader
  loadSpinner(); 
  
  // // hide body
  document.getElementById('start').style.display = 'none';

  setTimeout(showBody, 3000);

};

function showBody(){
   // // show body
   document.getElementById('start').style.display = 'block';

    // // hide loader
    removeSpinner();

}

///////////////////////////////////contact us //////////////////////////////////
function sendmail(){
    
  var name = $('#Name').val();
  var email = $('#Sender').val();
  var subject = $('#Subject').val();
  var message = $('#Message').val();

  // var body = $('#body').val();

  var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
  //console.log(name, phone, email, message);
  loadSpinner();
  Email.send({
    SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
    To: 'arthurjunior88741@gmail.com',
    From: "arthurjuniortk@gmail.com",
    Subject: "New message from arthurjunior.tk send by "+name,
    Body: Body
  }).then(
    message =>{
      //console.log (message);
      if(message=='OK'){
      alert('Your mail has been send. Thank you for connecting.');
      removeSpinner()
      window.location.reload();
      }
      else{
        console.error (message);
        alert('There is error at sending message. ');
        removeSpinner()
        window.location.reload();
      }

    }
  );
}


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



