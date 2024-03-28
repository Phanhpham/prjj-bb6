function renderProduct (){
    let htmlString=""
    const product = JSON.parse (localStorage.getItem('products')) || [];
    for (let i=0;i<product.length;i++){
         htmlString+=
    ` 
    <tr>
            <td>${i+1}</td>
            <td>${product[i].name}</td>
            
            <td><img src="${product[i].image}"></td>
            <td>${product[i].price}.000 VND</td>
        </tr>
    `
    }
    console.log(product);
    document.getElementById("tbody").innerHTML=htmlString;


    
}
renderProduct();