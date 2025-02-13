function registerUser() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    localStorage.setItem(username, password);
    alert("Registration successful! You can now log in.");
    showLogin();
}

function showRegister() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("register-page").style.display = "block";
}

function showLogin() {
    document.getElementById("login-page").style.display = "block";
    document.getElementById("register-page").style.display = "none";
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        alert("Login successful!");
        document.getElementById("user-name").innerText = username;
        document.getElementById("login-page").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        alert("Invalid username or password!");
    }
}

function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("login-page").style.display = "block";
}

function showPortfolioForm() {
    document.getElementById("portfolio-form").style.display = "block";
}

function addPortfolio() {
    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;
    const skills = document.getElementById("skills").value;
    const projects = document.getElementById("projects").value;

    const portfolioCard = `
        <div class="portfolio-card">
            <h4>${name}</h4>
            <p><strong>Bio:</strong> ${bio}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Projects:</strong> ${projects}</p>
        </div>
    `;
    document.getElementById("portfolio-container").innerHTML += portfolioCard;
    document.getElementById("portfolio-form").style.display = "none";
}
