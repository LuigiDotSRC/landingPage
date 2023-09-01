darkModeButton = document.getElementsByClassName("darkmode");

function toggleDarkMode() {
    // Your code to toggle dark mode goes here
    // For example, you can add or remove a "dark-mode" class from the body element
    document.body.classList.toggle("dark-mode");
    console.log('dark')
}

darkModeButton[0].addEventListener("click", toggleDarkMode);
