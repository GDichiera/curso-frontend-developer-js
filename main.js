const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetail = document.querySelector("#productDetail")
const botonCerrarProductDetail = document.querySelector(".product-detail-close")
const cardsContainer = document.querySelector(".cards-container")
const cardsClothes = document.querySelector(".cards-container-clothes")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritotDetail)
botonCerrarProductDetail.addEventListener("click", CloseProductDetail)

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

    CloseProductDetail()
}

function toggleCarritotDetail(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive")
    if (!isMobileMenuClose) {
        mobileMenu.classList.add("inactive")
    } 
    const isProductDetailClose = productDetail.classList.contains("inactive")
    if(!isProductDetailClose){
        productDetail.classList.add("inactive")
    }
    shoppingCartContainer.classList.toggle("inactive")
}

function openProducDetail() {
    shoppingCartContainer.classList.add("inactive")
    productDetail.classList.remove("inactive")
}

function CloseProductDetail(){
    productDetail.classList.add("inactive")
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

function recorrerArrayDePruductos(arr,conteiner){
    if(!conteiner){
        return
    }
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")
        const productImg = document.createElement("img")
        //con .setAtributte le vamos a asignar valor al atributo src, y le vamos a decir que ese valor va a ser la direccion que este en la propiedad imagen de cada iteracion del array
        productImg.setAttribute('src', product.image) //se pone ("atributo", valor)
        productImg.addEventListener("click", openProducDetail)
        
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
    
        conteiner.appendChild(productCard)
    }
}
recorrerArrayDePruductos(productList, cardsContainer)


const clothesList = [];
clothesList.push({
    name: 'Remera',
    price: 10,
    image: "https://http2.mlstatic.com/D_NQ_NP_762111-MLA40003691898_122019-O.webp",
})
clothesList.push({
    name: 'Pantalon',
    price: 20,
    image: "https://acdn.mitiendanube.com/stores/001/174/051/products/img_2973-0dd75e7d1203b6b6fb16982495104573-640-0.webp",
})
clothesList.push({
    name: 'Vestido',
    price: 25,
    image: "https://dcdn.mitiendanube.com/stores/893/445/products/vestido-silvia-01r1-363996caff2216358916548079056851-480-0.jpg",
})

recorrerArrayDePruductos(clothesList, cardsClothes)

