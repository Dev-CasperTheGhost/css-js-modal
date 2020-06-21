const modal = document.querySelector("#modal");

function openModal() {
    // Active -> will show modal
    modal.classList.add("active");
}


function closeModal() {
    modal.classList.remove("active");
}