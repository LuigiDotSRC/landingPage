let isDarkModeEnabled = false; // global variable darkmode is stored 

function toggleDarkMode() {
    const body = document.body;
    isDarkModeEnabled = !isDarkModeEnabled;
    
    if (isDarkModeEnabled) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
    
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
    console.log('dark');
}

function applyDarkModeOnLoad() { // apply darkmode preferences on load
    const storedPreference = localStorage.getItem("darkModeEnabled");
    
    if (storedPreference === "true") {
        isDarkModeEnabled = true;
        document.body.classList.add("dark-mode");
    } else {
        isDarkModeEnabled = false;
        document.body.classList.remove("dark-mode");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var darkModeButton = document.getElementsByClassName("darkmode")[0];
    darkModeButton.addEventListener("click", toggleDarkMode);
    
    applyDarkModeOnLoad();
});
