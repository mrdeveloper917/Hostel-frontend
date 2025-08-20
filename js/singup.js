document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        username: this.username.value,
        email: this.email.value,
        password: this.password.value
    };

    try {
        const res = await fetch('https://hostel-backend.onrender.com/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await res.text();

        if (res.status === 201) {
            alert("Signup successful! Redirecting to login page...");
            window.location.href = 'login.html';
        } else {
            alert("Signup failed: " + data);
        }
    } catch (err) {
        alert("Error: " + err.message);
    }
});
