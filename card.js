//TO add input text in the text field when Add Text Button clicked
function addText() {             
    const textInput = document.getElementById("text-input").value;
    const textNode = document.createTextNode(textInput);
    const paragraph = document.createElement("p");
    paragraph.appendChild(textNode);
    document.getElementById("text").appendChild(paragraph);
  }
  //fetching and storing values in variables
  function applyStyles() {
    const font = document.getElementById("font-selector").value;
    const size = document.getElementById("size-selector").value + "px";
    const weight = document.getElementById("weight-selector").value;
    const color = document.getElementById("color-selector").value;
    // selecting the string from text field or text area
    const selectedText = window.getSelection().toString();
    //
    const selectedElements = document.querySelectorAll("p");
    for (const i = 0; i < selectedElements.length; i++) {
      const elementText = selectedElements[i].textContent;
      if (elementText === selectedText) {
        selectedElements[i].style.fontFamily = font;
        selectedElements[i].style.fontSize = size;
        selectedElements[i].style.fontWeight = weight;
        selectedElements[i].style.color = color;
      }
    }
  }