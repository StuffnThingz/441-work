

let btEl = document.querySelector("#b1");
let btEl2 = document.querySelector("#b2");
let btEl3 = document.querySelector("#b3");
let btEl4 = document.querySelector("#b4");
let para = document.createElement('p');
let textEl = document.querySelector(".extra-text-container");
let textEl2 = document.querySelector(".extra-text-container2");
let textEl3 = document.querySelector("#yes-container");
let textEl4 = document.querySelector("#yes-container2");
//attempting to hide&show buttons
;

// Yes/no button stuff

btEl.addEventListener("click", showHideText);
btEl2.addEventListener("click", showHideText2);
// btEl3.addEventListener("click", showHideText3);
// btEl4.addEventListener("click", showHideText4);


// attemping to hide form stuff

function grabText() {
  let textIn;
  textIn = document.querySelector("#textIn1").value;

  if( textIn.length < 1){ alert("Please refresh the browser and enter a name!"); return }

  let textAdd = document.createTextNode("Sup, " + textIn + "? Do you like turtles?")

  let newP = document.createElement("p");

  newP.appendChild(textAdd);

  let storage = document.querySelector("#storageDiv");

  storage.appendChild(newP);
}

document.querySelector("#runButton").addEventListener( 'click', grabText);


function showHideText() {
    if(textEl.hidden){
        btEl.innerText = "Return";
        textEl.hidden = false;
    } else {
        btEl.innerText = "I like turtles";
        textEl.hidden = true;
    }
  }

  function showHideText2() {
      if(textEl2.hidden){
          btEl2.innerText = "Return because you changed your mind";
          textEl2.hidden = false;
      } else {
          btEl2.innerText = "What?";
          textEl2.hidden = true;
      }
    }
