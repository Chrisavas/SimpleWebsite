// Λειτουργία για να εμφανίζει μήνυμα
function showMessage() {
    alert("Hello");
}

// Λειτουργία για να εμφανίζει τα προϊόντα ανά κατηγορία
function showProducts(category) {
    const container = document.getElementById("catalog-container");
    container.innerHTML = ""; // Καθαρίζει τα υπάρχοντα προϊόντα

    // Προσθέτει τα προϊόντα της επιλεγμένης κατηγορίας
    if (products[category]) {
        products[category].forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">${product.price}</p>
                <a href="${product.link}" class="buy-button">View Product</a>
            `;

            container.appendChild(productCard); // Προσθέτει την κάρτα προϊόντος στο container
        });
    }
}
