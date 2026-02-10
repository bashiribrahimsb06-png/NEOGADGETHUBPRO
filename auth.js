// Admin authentication logic: ensure only authorized users can access admin
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm.elements['username'].value;
        const password = loginForm.elements['password'].value;
        
        // Dummy check (replace with real authentication logic)
        if (username === 'admin' && password === 'password') {
            alert('Welcome, Admin!');
            // Redirect to admin dashboard or show admin features
        } else {
            alert('Invalid credentials');
        }
    });
});