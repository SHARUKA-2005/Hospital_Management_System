// Register User
document.getElementById('registerForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    try {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, role }),
        });
        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert('Registration failed');
    }
});

// Login User
document.getElementById('loginForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert('Login failed');
    }
});

// Book Appointment
document.getElementById('appointmentForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;

    try {
        const response = await fetch('/api/appointments/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ doctor, date }),
        });
        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert('Appointment booking failed');
    }
});

// Send Message
document.getElementById('messageForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();
    const recipient = document.getElementById('recipient').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/api/messages/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipient, message }),
        });
        const result = await response
