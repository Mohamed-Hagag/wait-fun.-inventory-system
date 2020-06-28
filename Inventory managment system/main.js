
const products = [];
const productName = document.querySelector("#productNameInp");
const productQuantity = document.querySelector("#productQuantityInp");
const okButton = document.querySelector("#ok");
const cancelButton = document.querySelector("#cancel");


const clear = () => {
    const inps = document.querySelectorAll(".form-control");
    for (let i = 0; i < inps.length; i++) {
        inps[i].value = ""
    }
}


const renderProducts = () => {
    var temp = "";
    for (let i = 0; i < products.length; i++) {
        temp += `<tr><td>${products[i].Name}</td><td>${products[i].Quantity}</td>
        <td><button onclick="modifyButton(${i})" class=" btn btn-outline-warning mx-2">Modify</button>
        <button onclick="deleteButton(${i})" class=" btn btn-outline-warning mx-2">Delete</button></td>
        <td>
        <div class="modify-form">
        <form class="form-inline">  <div class="form-group mx-sm-3 ">
        <input  class="form-control" id="newQuantity" placeholder="New Quantity">
        </div>
        <button  class="btn btn-primary "type="button" onclick="update(${i})" id="ok">Ok</button>
        <button  class="btn btn-primary mx-2 " type="button" onclick="renderProducts()" id="cancel">Cancel</button>
        </div>
        </td></tr>
            `
    }
    document.getElementById('productRow').innerHTML = temp;
}

const validateName = (name) => {
    const nameRegex = /[A-Za-z]/
    if (nameRegex.test(name) == true) {
        return true;
    }
    else {
        return false;
    }
}


const validateQuantity = (quantity) => {
    const quantityRegex = /^[1-9]([0-9]*)?$/
    if (quantityRegex.test(quantity) == true) {
        return true;

    }
    else {
        return false;
    }
}


const addProduct = () => {
    const product = {
        Name: productName.value,
        Quantity: productQuantity.value
    };

    if (validateName(productName.value) == false) {
        window.alert("Please enter Product Name");
    }
    else if (validateQuantity(productQuantity.value) == false) {
        window.alert("Product Quantity is not valid");
    }
    else {
        products.push(product);
        clear();
        renderProducts();
    }
}
document.querySelector("#add").addEventListener("click", addProduct);


const deleteButton = (indx) => {
    const deleted = products.splice(indx, 1);
    renderProducts();
}

const modifyButton = (indx) => {
    document.querySelectorAll(".modify-form")[indx].style.display = "flex";

}
const update = (indx) => {
    
    if (validateQuantity(document.querySelectorAll("#newQuantity")[indx].value) == true) {
        products[indx].Quantity = document.querySelectorAll("#newQuantity")[indx].value;
        renderProducts();

    }
    else {
window.alert("New Quantity is not valid")
    renderProducts();
}
}
