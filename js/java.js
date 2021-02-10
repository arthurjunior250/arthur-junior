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

function loader(){
  // // show loader
  document.getElementById('loading').style.display = 'show';
  
  // // hide body
  document.getElementById('start').style.display = 'none';

  setTimeout(showBody, 3000);

};

function showBody(){
   // // show body
   document.getElementById('start').style.display = 'block';

    // // hide loader
  document.getElementById('loading').style.display = 'none';

}




