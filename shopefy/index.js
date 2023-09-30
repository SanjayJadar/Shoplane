let clothing = document.getElementById('clothing');
let accessories = document.getElementById('accessories');

const apiData = async() => {
    const data = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product');
    const realdata = await data.json();
    console.log(realdata);
    for(let i=0; i<realdata.length;i++){
        if(realdata[i].isAccessory === false){
            clothing.innerHTML += `       
                <div  onclick="productDetail(${i})"> 
                <img src="${realdata[i].preview}" alt="">
                <h5>${realdata[i].name}</h5>
                <p>${realdata[i].brand}</p>
                <h6>Rs ${realdata[i].price}</h6> 
                </div> 
            `;
        }
        else{
            accessories.innerHTML += `         
                <div onclick="productDetail(${i})" >
                <img src="${realdata[i].preview}" alt="">
                <h5>${realdata[i].name}</h5>
                <p>${realdata[i].brand}</p>
                <h6>Rs ${realdata[i].price}</h6>
                </div>
            `;
        }
    }
}
const productDetail = async(i) => {
    window.open(`product.html?product_id=${i}`,"_self");
}

apiData();






