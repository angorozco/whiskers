const show = document.querySelector(".vermas");
const dark = document.querySelector(".dark");
const modal = document.querySelector(".modal");

show.addEventListener("click", () => {
    if (show.classList.contains('vermas')) {
        modal.classList.toggle('show');
        dark.classList.toggle('dark__show');
    }
})

dark.addEventListener("click", () => {
    if (dark.classList.contains('dark')) {
        modal.classList.toggle('show');
        dark.classList.toggle('dark__show');
    }
})