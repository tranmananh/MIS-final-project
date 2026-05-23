function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
    const dropdown = document.getElementById("dropdown");
    const profileBox = document.querySelector(".profile-box");

    if (!profileBox.contains(event.target) && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
}