// Simple login credentials
const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

// Login function
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        loadAppointments();
    } else {
        alert("Invalid credentials!");
    }
}

// Load appointments
function loadAppointments() {
    const container = document.getElementById("appointmentsContainer");
    const data = JSON.parse(localStorage.getItem("appointments")) || [];

    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = "<p>No appointments yet</p>";
        return;
    }

    data.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>Email: ${item.email}</p>
            <p>Date: ${item.date}</p>
            <p>Service: ${item.service}</p>
            <button onclick="deleteAppointment(${index})">Delete</button>
        `;

        container.appendChild(card);
    });
}

// Delete appointment
function deleteAppointment(index) {
    let data = JSON.parse(localStorage.getItem("appointments")) || [];
    data.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(data));
    loadAppointments();
}

// Logout
function logout() {
    location.reload();
}