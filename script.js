function toggleMenu(){
    document.getElementById('navLinks').classList.toggle('active');
  }
  // Get elements
const loginBtn = document.querySelector(".login-btn");
const loginPopup = document.getElementById("loginPopup");
const closePopup = document.getElementById("closePopup");

// Open popup on Login button click
loginBtn.addEventListener("click", () => {
  loginPopup.style.display = "flex";
});

// Close popup when clicking on cross
closePopup.addEventListener("click", () => {
  loginPopup.style.display = "none";
});

// Close popup if user clicks outside
window.addEventListener("click", (e) => {
  if (e.target === loginPopup) {
    loginPopup.style.display = "none";
  }
});