document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("darkModeBtn");
    const body = document.body;

    // Ladda sparat läge
    if (localStorage.getItem("darkMode") === "on") {
        body.classList.add("dark-mode");
        button.textContent = " Light mode";
    }

    button.onclick = function () {

        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "on");
            button.textContent = "Light mode";
        } else {
            localStorage.setItem("darkMode", "off");
            button.textContent = " Dark mode";
        }
    };

});