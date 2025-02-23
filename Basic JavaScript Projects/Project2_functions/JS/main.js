function modifyParagraph() {
  // Assigning two variables
  var newText = "This text is from the variables.";
  var additionalText = " And some more!";

  // Combining the variables
  var combinedText = newText + additionalText;

  // Using document.getElementById to access a paragraph element
  var paragraphElement = document.getElementById("myParagraph");

  // Checking if the element exists before modifying it
  if (paragraphElement) {
    // Modifying the text content of the paragraph
    paragraphElement.textContent = combinedText;
  } else {
    console.error("Paragraph element with ID 'myParagraph' not found.");
  }
}

document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myParagraph").textContent = "Button was clicked!";
});