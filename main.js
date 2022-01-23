const note = document.querySelector(".notes");
const btn = document.querySelector(".btn");
const shortNote = document.querySelector(".short-note");
const fullNote = document.querySelector(".full-note");

const create = (ele) => document.createElement(ele);

//adding default text
let defaultText = create("p");
defaultText.textContent = "No notes added yet..";
shortNote.appendChild(defaultText);

//function for click event to add note
const addNotes = () => {
  if (note.value !== "") {
    //removing default text
    defaultText.classList.add("hide");

    //creating div and assiging note class name to it
    let div = create("div");
    div.classList.add("note");

    //creating note heading amd appending it to div
    let h3 = create("h3");
    let numOfNote = document.querySelectorAll(".note").length + 1;
    h3.textContent = `Note ${numOfNote}`;
    div.appendChild(h3);

    //creating value for p element
    let arr = note.value.split("");
    let str = "";
    for (i in arr) {
      if (i < 100) {
        str += arr[i];
      }
    }

    //creating paragraph and appending it to div
    let p = create("p");
    if (arr.length < 100) {
      p.appendChild(document.createTextNode(str));
    }
    if (arr.length > 100) {
      p.appendChild(document.createTextNode(`${str}...`));
    }
    div.appendChild(p);

    //creating pragraph for full note
    let newPara = create("p");
    newPara.className = "hide";
    newPara.appendChild(document.createTextNode(arr.join("")));

    //storing newPara in short note
    div.appendChild(newPara);

    //crating view detail btn, assiginig its class and appending it to div
    let viewMore = create("button");
    viewMore.textContent = "View Detail";
    viewMore.classList.add("short-note-btn");
    div.appendChild(viewMore);

    //making note value empty
    note.value = "";

    //appending div to short note
    shortNote.appendChild(div);

    //creating new div
    let newDiv = create("div");
    newDiv.classList.add("new-div");

    //creating heading for full note
    let newH3 = create("h3");

    //creating close btn and assigning its value
    let close = create("button");
    close.classList.add("close");
    close.textContent = "x";

    //creating full note text
    let fullText = create("p");
    fullText.classList.add("fullText");

    //function for click event to view detail btn
const viewDetail = (e) => {
  const allShortNotes = document.querySelectorAll(".note");
  for (i of allShortNotes) {
    if (i === e.target.parentElement) {
      fullText.textContent = i.childNodes[2].textContent;
      newH3.textContent = i.childNodes[0].textContent;

      //appending new div to fullNote
      fullNote.appendChild(newDiv);

      //appending heading to new div
      newDiv.appendChild(newH3);

      //appending close btn to new div
      newDiv.appendChild(close);

      //appending fyll text to full note
      fullNote.appendChild(fullText);

      //removing hide class from full note
      fullNote.classList.remove("hide");
    }
  }
}

//fumction for close btn
const closed =  () => {
  //adding hide class from full note
  fullNote.classList.add("hide");

  fullText.textContent = '';

  fullNote.removeChild(newDiv)
}

    //adding event to view more btn
    viewMore.addEventListener("click", viewDetail);

    //adding event for close
    close.addEventListener("click", closed);
  }
};



//ading click event to add note
btn.addEventListener("click", addNotes);
