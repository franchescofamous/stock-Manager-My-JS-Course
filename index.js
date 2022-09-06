let stock = [];
let product = {
  productName: "",
  productMarketPrice: 0,
  productSellingPrice: 0,
  productQuantity: 0,
};
let divRegister = document.querySelector(".register");
let divForm = document.querySelector(".form");
let divProductList = document.querySelector(".productList");
let buttonRegister = document.querySelector(".register__btn");
let registerFormElt = document.querySelector(".register__form");
let buttonSubmitForm = document.querySelector(".formSubmit");
let formProductNameInput = document.getElementById("productName");
let formMarketPriceInput = document.getElementById("marketPrice");
let formSellingPriceInput = document.getElementById("sellingPrice");
let formProductQuantityInput = document.getElementById("productQuantity");

let buttonRegisterClosed = document.createElement("button");

buttonRegisterClosed.classList.add("register__btn");
buttonRegisterClosed.textContent = "close";

buttonRegister.addEventListener("click", (e) => {
  registerFormElt.hidden = !registerFormElt.hidden;

  /* console.log(buttonRegister.parentNode);
  console.log(buttonRegisterClosed); */
  // buttonRegister.parentNode.appendChild(buttonRegisterClosed);
  // buttonRegister.parentNode.removeChild(e.target);
});

/* buttonSubmitForm.addEventListener("click", (e) => {}); */

/* formProductNameInput.addEventListener("blur", (e) => {
  product.productName = e.target.value;
});
formMarketPriceInput.addEventListener("blur", (e) => {
  product.productMarketPrice = Number(e.target.value);
});
formSellingPriceInput.addEventListener("blur", (e) => {
  product.productSellingPrice = Number(e.target.value);
});
formProductQuantityInput.addEventListener("blur", (e) => {
  product.productQuantity = Number(e.target.value);
}); */

registerFormElt.addEventListener("submit", (e) => {
  e.preventDefault();

  stock.push({
    id: new Date().valueOf(),
    productName: formProductNameInput.value,
    productMarketPrice: Number(formMarketPriceInput.value),
    productSellingPrice: Number(formSellingPriceInput.value),
    productQuantity: Number(formProductQuantityInput.value),
  });
  formProductNameInput.value = "";
  formMarketPriceInput.value = "";
  formSellingPriceInput.value = "";
  formProductQuantityInput.value = "";
  registerFormElt.hidden = true;
  console.log(stock);
  for (let product of stock) {
    let myTr = document.createElement("tr");
    myTr.innerHTML = p;
    /* let myTd = document.createElement("td");
    let markTd = document.createElement("td");
    myTd.textContent = product.productName;
    markTd.textContent = product.productMarketPrice;
    myTr.appendChild(myTd);
    myTr.appendChild(markTd); */
    document.querySelector("tbody.productList").appendChild(myTr);
  }
});
//console.log(new Date().valueOf());
