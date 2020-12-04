//to display the div when the cart link is clicked, and hide when clicked again

let cartAnchorTag = document.querySelector("#cartLink");
let cartDiv = document.querySelector("#shoppingCart--div");

cartAnchorTag.addEventListener("click", () => {

    if (cartDiv.style.display === "none") {

        cartDiv.style.display = "block";
    }
    else { cartDiv.style.display = "none"; }
});

//end of cart display




//cart span value increament and decrement logic begins here
let carts = document.querySelectorAll(".add-cart");
let products = [
    {
        dessertName: "Unicorn Cupcake",
        price: 25,
        inCart: 0
    },

    {
        dessertName: "Fresh Strawberry creme Cupcake",
        price: 35,
        inCart: 0

    },

    {
        dessertName: "Cappuccino Cupcake",
        price: 45,
        inCart: 0

    },
    {
        dessertName: "Black forrest Cupcake",
        price: 20,
        inCart: 0

    }

];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartnumbers(products[i]);
        console.log(products[i]);
    });
}; .


function onLoadCartValue() {
    let productNumbers = localStorage.getItem("cartnumbers");
    if (productNumbers) {
        document.querySelector("#cartLink span").textContent = productNumbers;

    }

};

function cartnumbers(product) {
    console.log(product);
    let productNumbers = localStorage.getItem("cartnumbers");
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartnumbers", productNumbers + 1);
        document.querySelector("#cartLink span").textContent = productNumbers + 1;

    } else {
        localStorage.setItem("cartnumbers", 1);
        document.querySelector("#cartLink span").textContent = 1;
    }

}

onLoadCartValue(); 