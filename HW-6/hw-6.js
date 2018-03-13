
/*
HOMEWORK 6

For this assignment, you are to develop a simple webpage that includes;
- One or a few headings.
- A couple paragraph elements.
- An image or two.
- At least one link.

Furthermore, this page should “look modern”; meaning it should include styling beyond the default browser styling. However, it does not need to fully follow RWD principles.

To do this, you will utilize the DOM API and Selector API.

You are not allowed to alter the HTML file. You are also not allowed to utilize a general CSS page. Everything must be done through the JavaScript file. In the JS file, you should;
- create new nodes,
- attach them to parent nodes (and the document node),
- add their innerText (if appropriate)
- and finally style them.

You are not allowed to use either;
-` document.write();
- element.innerHTML = "";

Instead, you should use the appropriate methods, as mentioned in the readings.

To begin, you should select the body element from the DOM, then remove its existing child nodes. You may then begin to create your web page.

*/
var myPic = new Image(1280, 800);
myPic.src = "imgs/laptop.jpeg"

let body = document.body;
body.innerText = "";

body.style.background = "rgb(250, 239, 237)";

let elmnt = document.createElement("div");
// element children
let elmnt1 = document.createElement("h1");
let elmnt2 = document.createElement("h2");
let elmnt3 = document.createElement("p");
let elmnt4 = document.createElement("p");
let elmnt5 = document.createElement("a");

elmnt1.innerText = "Toby's HW-6 Website";
elmnt2.innerText = "My funny attempt at coding"
elmnt3.innerText = "I really enjoy learning this stuff. I just wish I didn't have five other classes to worry about passing... That way I could get good at coding."
elmnt4.innerText = "Below is a stylish picture of a laptop with coding stuff on the screen that I downloaded for free.";
elmnt5.innerText = "AND HERE IS A LINK";

elmnt.setAttribute("style", "text-align: center");
elmnt1.setAttribute("style","padding:0.5em; margin:0; font-family: sans-serif; text-align:center; color:#000000");
elmnt2.setAttribute("style","padding:0em; margin:0; font-weight: normal; font-family: sans-serif; text-align:center; color:#000000");
elmnt3.setAttribute("style","padding:2em; margin:0; font-family: sans-serif; text-align:center; color:#000000");
elmnt4.setAttribute("style","padding:0em; margin:0; font-family: sans-serif; text-align:center; color:#000000");
elmnt5.setAttribute("href", "https://www.youtube.com/watch?v=8aCMpJMzGgE");
elmnt5.setAttribute("style", "font-family: sans-serif; text-decoration: none; color:#067388; border-style: outset");


myPic.setAttribute("style", "padding:0em; margin:100px");

elmnt.appendChild(elmnt1);
elmnt.appendChild(elmnt2);
elmnt.appendChild(elmnt3);
elmnt.appendChild(elmnt4);
elmnt.appendChild(myPic);
elmnt.appendChild(elmnt5);

body.appendChild(elmnt);
