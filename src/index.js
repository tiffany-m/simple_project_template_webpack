// Test JS -------------------------------------------------------------------------
import "./style.css";
import TestIcon from "./images/testJSicon.png";
import { changeButton } from "./components/functions";
//Text Test
const element = document.createElement("div");
element.classList.add("test-JS-text");
element.innerText = "JS Test Text - I am 2rem, bold and blue";
document.body.appendChild(element);
//Image Test
const elementImage = document.createElement("div");
elementImage.innerText = "Test Image of List From JS File in Color";
document.body.appendChild(elementImage);
const myImage = new Image();
myImage.src = TestIcon;
myImage.width = "100"; // auto px
elementImage.appendChild(myImage);
// Button Test
changeButton();
// --------------------------------------------------------------------------------
