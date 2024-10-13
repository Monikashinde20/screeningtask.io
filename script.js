// Select all the '.option' boxes
document.querySelectorAll('.option').forEach(option => {
  // Add a click event listener to each box
  option.addEventListener('click', function() {
    // Find the '.select-group' inside the clicked option
    const selectGroup = this.querySelector('.select-group');
    
    // Toggle the 'hidden' class to show or hide the content
    if (selectGroup) {
      selectGroup.classList.toggle('hidden');
    }

    // Toggle the 'clicked' class to change color
    this.classList.toggle('clicked');

    // Set a timeout to remove the 'clicked' class after 2 seconds (if needed)
    setTimeout(() => {
      this.classList.remove('clicked');
    }, 2000); // 2000 ms = 2 seconds, adjust this value as per your need
  });
});

