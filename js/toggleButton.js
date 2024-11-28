// JavaScript Document

   document.addEventListener('DOMContentLoaded', function() {
        let toggleButtons = document.querySelectorAll(".toggleButton");
        let dropdownContents = document.querySelectorAll(".dropdownContent");

        toggleButtons.forEach(function(button, index) {
            button.addEventListener("click", function() {
                dropdownContents.forEach(function(content) {
                    content.style.display = "none";
                });
                dropdownContents[index].style.display = "block";
            });
        });
        window.addEventListener('click', function(event) {
            dropdownContents.forEach(function(content) {
                if (!event.target.closest('.eachQ_A') && content.style.display === 'block') {
                    content.style.display = 'none';
                }
            });
        });
    });
