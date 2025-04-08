// Λειτουργία για να εμφανίζει μήνυμα
function showMessage() {
    alert("Hello");
}


const products = [
    { name: "Product 1", image: "images/020401011.jpg", description: "Lotus silver men's Watach" },
    { name: "Product 2", image: "images/020401013.jpg", description: "Lotus silver men's Watach" },
    { name: "Product 3", image: "images/020401021.jpg", description: "Lotus silver men's Watach" },
    { name: "Product 4", image: "images/020404012.jpg", description: "Festina double color Watch" }
];

  
const productContainer = document.getElementById('catalog-menswatches-container');

// Create product elements dynamically
products.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    `;

    productContainer.appendChild(productDiv);
});
