document.getElementById('toggleForm').addEventListener('click', function(e) {
    e.preventDefault();
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
});

// Example login/logout logic
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically handle login logic
    alert("Logged In");
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically handle signup logic
    alert("Signed Up");
});