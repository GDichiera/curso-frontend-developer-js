const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleProductDetail)

function toggleDesktopMenu(){
    const isAsaidClose = shoppingCartContainer.classList.contains("inactive")
    if (!isAsaidClose){
        shoppingCartContainer.classList.add("inactive")
    }
//     esta funcion busca la clase inactative en destop-menu y si la tiene se la quita y si no la tiene se la agrega (eso lo hace classList.toggle)
    desktopMenu.classList.toggle("inactive")
}
function toggleMobileMenu(){
    const isAsaidClose = shoppingCartContainer.classList.contains("inactive")
    if (!isAsaidClose){
        shoppingCartContainer.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

function toggleProductDetail(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive")
    if (!isMobileMenuClose) {
        mobileMenu.classList.add("inactive")
    } 
    shoppingCartContainer.classList.toggle("inactive")
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://battle.com.ar/battle/img/prod/mtb/241M/01.webp",
})
productList.push({
    name: 'Pantalla',
    price: 500,
    image: "https://img.freepik.com/vector-premium/pantalla-monitor-computadora_1297-434.jpg",
})
productList.push({
    name: 'Computadora',
    price: 1000,
    image: "https://pronotebooks.com.ar/wp-content/uploads/2023/09/lenovo-3i-1-600x600.webp",
})

function recorrerArrayDePruductos(arr){
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")
        const productImg = document.createElement("img")
        //con .setAtributte le vamos a asignar valor al atributo src, y le vamos a decir que ese valor va a ser la direccion que este en la propiedad imagen de cada iteracion del array
        productImg.setAttribute('src', product.image) //se pone ("atributo", valor)
      
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
        
        const productPrice = document.createElement("p")
        productPrice.innerText = `$${product.price}`
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement("figure")   
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
      
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}
recorrerArrayDePruductos(productList)
