function renderCart() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = JSON.parse(localStorage.getItem("user")) || {};

  let totalAllPrice = 0;

  if (users.length === 0 || !user) {
    return;
  }

  const tbody = document.getElementById("tbody");
  let text = "";
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === user.id) {
      for (let j = 0; j < users[i].cart.length; j++) {
        let cartItem = users[i].cart[j];
        let total = cartItem.quantity * cartItem.price;
        totalAllPrice += total
        text += `
          <tr>
            <td id="stt">${j + 1}</td>
            <td id="id">${cartItem.id}</td>
            <td id="names">${cartItem.name}</td>
            <td id="image"><img src="${cartItem.image}" alt=""></td>
            <td id="price">${cartItem.price}</td>
            <td id="quantity">
              <button onclick="decre(${cartItem.id})">-</button>
              ${cartItem.quantity} 
              <button onclick="incre(${cartItem.id})">+</button>
            </td>
            <td id="total-cost">${total}</td>
          </tr>
        `;
      }
    }
  }
  tbody.innerHTML = text;

  document.getElementById('cost').innerHTML = totalAllPrice
}

function incre(id) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = JSON.parse(localStorage.getItem("user")) || {};
  if (!user) {
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === user.id) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (users[i].cart[j].id === id) {
          users[i].cart[j].quantity++;
          break;
        }
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
  renderCart();
}

function decre(id) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = JSON.parse(localStorage.getItem("user")) || {};
  if (!user) {
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === user.id) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (users[i].cart[j].id === id) {
          if (users[i].cart[j].quantity > 1) {
            users[i].cart[j].quantity--;
          } else {
            users[i].cart.splice(j, 1);
          }
          break;
        }
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
  renderCart();
}

function remove(id) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = JSON.parse(localStorage.getItem("user")) || {};
  if (!user) {
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === user.id) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (users[i].cart[j].id === id) {
          users[i].cart.splice(j, 1);
          break;
        }
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
  renderCart();
}

renderCart();