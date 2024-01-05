// Your code here
function moveDodgerLeft() {
    let currentPosition = dodger.style.left;
    currentPosition = parseInt(currentPosition) || 0;
    // adjust the decrement as needed
    dodger.style.left = `${currentPosition - 1}px`;
  }

function moveDodgerRight() {
    let currentPosition = dodger.style.left;
    currentPosition = parseInt(currentPosition) || 0;
  // adjust the increment as needed
    dodger.style.left = `${currentPosition + 1}px`; 
  }

//   moveDodgerLeft()
//   moveDodgerRight();