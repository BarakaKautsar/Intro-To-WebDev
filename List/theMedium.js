console.log("theMessage");

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const eraseButton = document.getElementById("erase");
const checkButton = document.getElementById("check");
// const saveButton = document.getElementById("save");

const theInput = document.querySelector("input");
let theDivider = document.getElementById("theDivider");

let theList = [];

addButton.addEventListener("click", addList);
removeButton.addEventListener("click", popList);
eraseButton.addEventListener("click", eraseList);
checkButton.addEventListener("click", eraseChecked);
// saveButton.addEventListener("click", saveList);

function addList() {
  let theUserWords = theInput.value;
  let theItem = document.createElement("li");
  let theCheck = document.createElement("input");
  let theLabel = document.createElement("label");
  theCheck.type = "checkbox";
  let theTxt = document.createTextNode(theUserWords);
  theLabel.appendChild(theTxt);
  theItem.appendChild(theCheck);
  theItem.appendChild(theLabel);
  theDivider.appendChild(theItem);
  theList.push(theItem);
  updateCounter();
  //   console.log(theList);
}

function popList() {
  console.log("pop!");
  let theItem = theList[theList.length - 1];
  theList.pop();
  theDivider.removeChild(theItem);
  updateCounter();
}

function eraseList() {
  console.log("erase!");
  theDivider.innerHTML = "";
  theList = [];

  updateCounter();
}

function eraseChecked() {
  console.log("erase checked!");
  for (let i = 0; i < theList.length; i++) {
    console.log(i);
    let theItem = theList[i];
    let theCheck = theItem.querySelector("input");
    if (theCheck.checked) {
      theDivider.removeChild(theItem);
      theList.splice(i, 1);
    }
  }
}

function saveList() {
  localStorage.setItem("theList", JSON.stringify(theList));
}

function updateCounter() {
  let theCounter = document.getElementById("counter");
  let unchecked = theDivider.querySelectorAll("input:not(:checked)");
  theCounter.innerHTML = unchecked.length;
}

theDivider.addEventListener("click", updateCounter);
