const hiddenMessage = "The Medium is the Message";
const hiddenMessageElement = document.getElementById("hidden-message");
const theMessage = document.querySelector(".message");
console.log(theMessage);
const targetWidth = 800;

function updateHiddenMessage() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  console.log(windowWidth);

  // Manipulate ASCII values based on window size
  const manipulatedMessage = hiddenMessage
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      const manipulatedCharCode = charCode + windowWidth - targetWidth;
      return String.fromCharCode(manipulatedCharCode);
    })
    .join("");

  hiddenMessageElement.textContent = manipulatedMessage;

  if (windowWidth === targetWidth) {
    theMessage.classList.remove("message--hidden");
  } else {
    theMessage.classList.add("message--hidden");
  }
}

// Initial call to set the hidden message
updateHiddenMessage();

// Update the hidden message on window resize
window.addEventListener("resize", updateHiddenMessage);
