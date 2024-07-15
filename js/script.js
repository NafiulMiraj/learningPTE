// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Additional JavaScript logic can be added here
  
    // Example: Change background image on button click
    var welcomeSection = document.querySelector('.bg-cover');
    var getStartedButton = document.querySelector('.bg-blue-600');
  
    if (getStartedButton) {
      getStartedButton.addEventListener('click', function () {
        welcomeSection.style.backgroundImage = "url('assets/another-image.jpg')";
      });
    }
  });
  