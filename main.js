const cart = document.getElementById("cart");
const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");
const list = document.getElementById("list");

openCart.addEventListener("click", () => {
    cart.classList.add("open");
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("open");
});


fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        renderCards(data);
    });

function renderCards(products) {
    list.innerHTML = "";

    products.forEach((el) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="image">
                <img src="${el.image}" alt="${el.title}">
            </div>
            <h2>${el.title}</h2>
            <p>${el.price}$</p>
            <button class="buttonCart">Add To Cart</button>
        `;

        list.appendChild(card);
    });
}
