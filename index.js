// Your code here
function moveDodgerLeft() {
    let currentPosition = dodger.style.left;
    currentPosition = parseInt(currentPosition) || 0;
    // adjust the decrement as needed
    let newPosition = currentPosition - 180; 
    dodger.style.left = newPosition + 'px';
  }

function moveDodgerRight() {
    let currentPosition = dodger.style.left;
    currentPosition = parseInt(currentPosition) || 0;
  // adjust the increment as needed
    let newPosition = currentPosition + 180; 
    dodger.style.left = newPosition + 'px';
  }

//   moveDodgerLeft()
//   moveDodgerRight();