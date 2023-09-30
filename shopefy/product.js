// const data = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product');
// const realdata = await data.json();

// console.log(realdata);

let urlData = location.href;
let newUrl = new URL(urlData);
let productId = newUrl.searchParams.get("product_id");


let productImage = document.getElementById('productImage');
let productHeading = document.getElementById('productHeading');
let productBrand = document.getElementById('productBrand');
let productPrice = document.getElementById('productPrice');
let productDescription = document.getElementById('productDescription');
let productImages = document.getElementById('productImages');


const apiDataOrder = async() => {
    const data = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product');
    const realdata = await data.json();


    // console.log(realdata)
    productImage.src = realdata[productId].preview;
    productHeading.innerText = realdata[productId].name;
    productBrand.innerText = realdata[productId].brand;
    productPrice.innerText = realdata[productId].price;
    productDescription.innerText = realdata[productId].description;
 
    for(let i=0; i<realdata[productId].photos.length; i++){
        productImages.innerHTML += `
            <img onclick='changeImage(${i})' id='photo${i}' class='productPhotos' src='${realdata[productId].photos[i]}' alt='${i}photo'>'
        ` ;
        if(i===0){
            let photo0 = document.getElementById('photo0');
            photo0.classList.add('borders');
        }
    }
}

apiDataOrder();

let item;
const changeImage = async(i)=>{
    const data = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product');
    const realdata = await data.json();
    productImage.src = realdata[productId].photos[i];

    // Border of small images edit 
    let productPhotos = document.getElementsByClassName('productPhotos');
    let allImages = document.querySelectorAll('#productImages img');
    for(let counter=0; counter<realdata[productId].photos.length; counter++){
        if(counter === i){
            allImages[counter].classList.add('borders');
        }
        else{
            allImages[counter].classList.remove('borders'); 
        }
        
    }
    item = i;
}

// Adding cart count 
let addCartCount = document.getElementById('addCartCount');
let addCart = document.getElementById('addCart');     //Button
addCart.onclick = add;

let cartCount = 0;
function add(){
    cartCount++;
    addCartCount.innerText = cartCount;
}





// Adding Cart List to endpoint  
// Buying list 

// let addCart = document.getElementById('addCart');
// addCart.onclick = cartList;

// function cartList(){
//     let addCartData = productId;
//     console.log(addCartData);
//     window.open(`/HTML/order.html?orderId=${addCartData}`,"_self") 
// }



// const apiDataOrderList = async() => {
//     const data = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product');
//     const realdata = await data.json();
    
//     addCart.onclick = cartList;
//     let cartCount = 0;
//     function cartList(){
//         cartCount ++;
//         console.log(realdata);
//         console.log(cartCount);
//         console.log(productId);
//         console.log(realdata[productId]);
//         localStorage.setItem('orderCount', cartCount);
//         localStorage.setItem('orderList', realdata[productId]);
//     } 
// }

// apiDataOrderList();





 