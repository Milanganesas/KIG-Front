const open = document.getElementById("open")
const close = document.getElementById("close")
const menu = document.getElementsByClassName("navbar__ul")[0]

open.addEventListener("click", () => {
    menu.classList.toggle("open")
})

close.addEventListener("click", () => {
    menu.classList.toggle("open")
})