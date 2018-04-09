// Making variables for all the elements
let body = document.body;
let div_stuff = document.createElement("div");
let btn_strat = document.querySelector("#strat_btn");
let btn_paul = document.querySelector("#paul_btn");
let para = document.createElement('p');
let intro = document.querySelector(".question");
let text_Strat = document.querySelector(".Strat");
let text_Paul = document.querySelector(".Paul");
let divEl = document.querySelector(".storageDiv");
let formEl = document.querySelector(".form");
// Defining buttons
btn_strat.addEventListener("click", showHideText_Strat);
btn_paul.addEventListener("click", showHideText_Paul);
// Using the text grab for the input form, just like you showed
function grabText() {
    let textIn;
    textIn = document.querySelector("#textIn1").value;

    if( textIn.length < 1){ alert("What's your name, breh?"); return }


    let textToAdd = document.createTextNode("What up, "+textIn+"? What would you do in this situation?");


    let newP = document.createElement("p");

    newP.appendChild(textToAdd);

    let storage = document.querySelector("#storageDiv");

    storage.appendChild(newP).style.textAlign = "center";

}
// This "grabs" the text when you type it in
document.querySelector("#runButton").addEventListener( 'click', grabText);
// Making show/hide functions to hide show story for each button and hide button when you click
function showHideText_Strat() {
    if(text_Strat.hidden){
        btn_strat.hidden= true;
        intro.hidden = false;
        formEl.hidden = true;
        text_Strat.hidden = false;
        text_Paul.hidden= true;
        btn_paul.hidden=true;
        div_stuff.hidden=true;

        body.style.background = "url('./imgs/homepic.jpg')";
        body.style.backgroundPosition = "center";
// Making alert to test out setTimeout function
        function tryAlert() {
          alert("GO TRY THE LES PAUL!");
        }

        setTimeout( tryAlert, 10000 );

} else {
     btn_strat.hidden =false
     intro.hidden = false;
     formEl.hidden = false;
     text_Strat.hidden = true;
     text_Paul.hidden= true;
     btn_paul.hidden=false;
     div_stuff.hidden=false;
   }
}

function showHideText_Paul() {
    if(text_Paul.hidden){
        btn_paul.hidden = true;
        intro.hidden = false;
        formEl.hidden = true;
        text_Strat.hidden = true;
        text_Paul.hidden= false;
        btn_strat.hidden=true;
        div_stuff.hidden=true;

        body.style.background = "url('./imgs/homepic.jpg')";
        body.style.backgroundPosition = "center";

        function tryAlert() {
          alert("GO TRY THE STRAT!");
        }

        setTimeout( tryAlert, 10000 );


    } else {
      btn_paul.hidden = false;
      intro.hidden = false;
      formEl.hidden = false;
      text_Strat.hidden = true;
      text_Paul.hidden= true;
      btn_strat.hidden=false;
      div_stuff.hidden=false;
    }
}
// Commits elements to body of project
body.style.background = "url('./imgs/homepic.jpg')";
body.style.backgroundPosition = "center";
body.appendChild(div_stuff);
