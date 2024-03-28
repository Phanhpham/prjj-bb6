function renderUser(){
    const user=JSON.parse(localStorage.getItem("users")) || [];
    let htmlString = "";
    for(let i=0; i<user.length;i++){
        htmlString+=
        ` <tr>
        <td>${i+1}</td>
        <td>${user[i].id}</td>
        <td>${user[i].name + " " + user[i].surname}</td>
        <td>${user[i].email}</td>
     
    </tr>
        `;
    }
    console.log(document.getElementById("body"));
    console.log(htmlString);
    document.getElementById("body").innerHTML = htmlString;
    
}
renderUser();
