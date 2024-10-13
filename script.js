document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.classList.replace("light-theme", savedTheme);
        document.body.classList.replace("dark-theme", savedTheme);

        if (savedTheme === "dark-theme") {
            document.getElementById("theme-toggle").checked = true;
        }
    }

    document.getElementById("theme-toggle").addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.replace("light-theme", "dark-theme");
            localStorage.setItem("theme", "dark-theme");
        } else {
            document.body.classList.replace("dark-theme", "light-theme");
            localStorage.setItem("theme", "light-theme");
        }
    });
});
