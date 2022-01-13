// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const text = document.querySelector("h2");
const superEventHandler = {
  OnEnter: function () {
    text.innerText = "The Mouse is here!";
    text.style.color = colors[0];
  },
  OffEnter: function () {
    text.innerText = "The Mouse is gone!";
    text.style.color = colors[3];
  },
  RightClick: function () {
    text.innerText = "That was a right click!";
    text.style.color = colors[4];
  },
  Resize: function () {
    text.innerText = "You've just resized!";
    text.style.color = colors[1];
  }
};

text.addEventListener("mouseenter", superEventHandler.OnEnter);
text.addEventListener("mouseleave", superEventHandler.OffEnter);
window.addEventListener("contextmenu", superEventHandler.RightClick);
window.addEventListener("resize", superEventHandler.Resize);
