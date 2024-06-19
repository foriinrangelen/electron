window.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const displayTextButton = document.getElementById('displayTextButton');
    const displayText = document.getElementById('displayText');
  
    displayTextButton.addEventListener('click', () => {
      displayText.textContent = inputText.value;
    });
  });