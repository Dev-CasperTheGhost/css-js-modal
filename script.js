const modal = document.querySelector("#modal");
const closeModalKey = "Escape" // full list of keys: http://gcctech.org/csc/javascript/javascript_keycodes.htm

function openModal() {
    // Active -> will show modal
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}


// OR on key press ESC
document.addEventListener("keydown", (e) => {
    if (e.key === closeModalKey) {
        modal.classList.remove("active");
    }
})