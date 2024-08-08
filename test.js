const userName = document.querySelector('.name');
const userPassword = document.querySelector('.password');
const userRetypePassword = document.querySelector('.retypepassword');
const submitBtn = document.querySelector('.submitbtn');

submitBtn.addEventListener('click', function () {
    // Check if passwords match
    if (userPassword.value === userRetypePassword.value) {
        alert("Passwords Match");

        // Store the values in localStorage
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userPassword', userPassword.value);
        localStorage.setItem('userRetypePassword', userRetypePassword.value);

        // Redirect to the next page (use the actual page URL)
        window.location.href = '#'; 
    } else {
        alert("Passwords Did Not Match");
    }
});
