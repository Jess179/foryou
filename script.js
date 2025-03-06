let isAnimationVisible = false;
let isLoginFormVisible = false;

function toggleAnimation() {
  const animationContainer = document.getElementById('animation-container');
  if (!isAnimationVisible) {
    // Show the animation
    animationContainer.classList.remove('hidden');
    isAnimationVisible = true;
  } else {
    // Hide the animation
    animationContainer.classList.add('hidden');
    isAnimationVisible = false;
  }
}

function showLoginForm() {
  const loginForm = document.getElementById('login-form');
  if (!isLoginFormVisible) {
    // Show the login form
    loginForm.classList.remove('hidden');
    isLoginFormVisible = true;
  } else {
    // Hide the login form
    loginForm.classList.add('hidden');
    isLoginFormVisible = false;
  }
}

function showMessage() {
  const secretMessage = document.getElementById('secretMessage');
  secretMessage.classList.remove('hidden');
}

function handleLogin(event) {
  event.preventDefault(); // Prevent form submission
  const notification = document.getElementById('notification');
  
  // Show the notification
  notification.classList.remove('hidden');
  
  // Hide the notification after 3 seconds
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000);
}
