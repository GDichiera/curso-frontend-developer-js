const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu(){
//     esta funcion busca la clase inactative en destop-menu y si la tiene se la quita y si no la tiene se la agrega (eso lo hace classList.toggle)
    desktopMenu.classList.toggle("inactive")
}