// Register account
function register() {
    let user = {
        name: document.getElementById("name").value,
        village: document.getElementById("village").value,
        farm: document.getElementById("farm").value,
        chicks: document.getElementById("chicks").value,
        water: document.getElementById("water").value,
        district: document.getElementById("district").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    localStorage.setItem("userData", JSON.stringify(user));
    alert("Account created successfully!");
    window.location.href = "index.html";
}

// Login
function login() {
    let savedUser = JSON.parse(localStorage.getItem("userData"));

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (savedUser && email === savedUser.email && password === savedUser.password) {
        alert("Login successful!");
        window.location.href = "daily.html";
    } else {
        alert("Invalid email or password");
    }
}
