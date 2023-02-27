const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


// toggle header
function checkScroll() {
	if (window.scrollY > 500) {
		header.classList.remove("d-none");
	} else {
		header.classList.add("d-none");
	}
}
const header = document.querySelector(".header");
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);