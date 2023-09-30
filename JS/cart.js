let addCart = document.getElementById('addCart');



const apiDataOrder = async() => {
    const data = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product');
    const realdata = await data.json();
    
    addCart.onclick = cartList;
    let cartCount = 0;
    function cartList(){
        cartCount ++;
        // localStorage.setItem('orderList');
        console.log(realdata);
        console.log(cartCount);
        console.log();
    } 
}

apiDataOrder();