const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleProductDetail)

function toggleDesktopMenu(){
    const isAsaidClose = aside.classList.contains("inactive")
    if (!isAsaidClose){
        aside.classList.add("inactive")
    }
//     esta funcion busca la clase inactative en destop-menu y si la tiene se la quita y si no la tiene se la agrega (eso lo hace classList.toggle)
    desktopMenu.classList.toggle("inactive")
}
function toggleMobileMenu(){
    const isAsaidClose = aside.classList.contains("inactive")
    if (!isAsaidClose){
        aside.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

function toggleProductDetail(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive")
    if (!isMobileMenuClose) {
        mobileMenu.classList.add("inactive")
    } 
    aside.classList.toggle("inactive")
}