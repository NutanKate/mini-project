// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Form submission alert
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const appointment = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        service: document.getElementById("service").value
    };

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);

    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert("Appointment booked successfully!");
    this.reset();
});