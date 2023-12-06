const products = [
  {
    Item: "Uniqlo puff",
    Price: 30,
    Category: 0,
    desc: "ultra light down",
    images: "https://live.staticflickr.com/65535/53377892577_6f3aacd2ea_n.jpg",
  },
  {
    Item: "Jahe",
    Price: 10,
    Category: 1,
    desc: "imported from indo :))",
    images: "https://live.staticflickr.com/65535/53379129774_01a6e66153_n.jpg",
  },
  {
    Item: "La Roche Posay Anthelios Sunscreen",
    Price: 15,
    Category: 2,
    desc: "it has a bit of a whitecast so it's not rlly suitable for my tan skin, but I've heard good stuff about it!",
    images: "https://live.staticflickr.com/65535/53379262340_e6466d50b8_n.jpg",
  },
  {
    Item: "Heated Blanket",
    Price: 25,
    Category: 3,
    desc: "when u don't have any one to cuddle with, get this blanket to keep u warm during the winter!!",
    images: "https://live.staticflickr.com/65535/53379129769_df912e369a_n.jpg",
  },
];

const updateProducts = () => {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    if (product.Category !== categories.indexOf(activeCategory)) return;
    else {
      const card = document.createElement("div");
      card.className = "product-card";
      card.onclick = function () {
        showModal(product);
      };
      card.innerHTML = `
        <img src="${product.images}" alt="${product.Item}">
        <h3>${product.Item}</h3>
        <p>$${product.Price.toFixed(2)}</p>
      `;
      productList.appendChild(card);
    }
  });
};

// const initProductPage = async () => {
//   try {
//     products = await fetchProducts();
//     console.log("Products:", products);
//     updateProducts();
//   } catch (error) {
//     console.error("Error initializing product page:", error);
//   }
// };

// initProductPage();
const productCategories = document.querySelector(".product-categories");
const categories = Array.from(productCategories.children);
let activeCategory = document.querySelector(".active-category");
const productList = document.getElementById("product-list");

function updateCategory(category) {
  activeCategory.classList.remove("active-category");
  category.classList.add("active-category");
  activeCategory = category;
}

// function updateProducts() {
//   const productList = document.getElementById("product-list");
//   productList.innerHTML = "";
//   products.forEach((product) => {
//     if (product.category !== categories.indexOf(activeCategory)) return;
//     else {
//       const card = document.createElement("div");
//       card.className = "product-card";
//       card.onclick = function () {
//         showModal(product);
//       };
//       card.innerHTML = `
//         <img src="${product.imageUrl}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>$${product.price.toFixed(2)}</p>
//     `;
//       productList.appendChild(card);
//     }
//   });
// }

productCategories.addEventListener("click", (e) => {
  const targetCategory = e.target.closest("li");
  if (!targetCategory) return;

  updateCategory(targetCategory);
  updateProducts();
});

function showModal(product) {
  console.log(product);
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
        <img src="${product.images}" alt="${product.Item}">
        <h2>${product.Item}</h2>
        <p>$${product.Price.toFixed(2)}</p>
        <p>${product.desc}</p>
    `;

  const modal = document.getElementById("product-modal");
  modal.style.display = "block";
}

// Function to close the modal
window.closeModal = function () {
  const modal = document.getElementById("product-modal");
  modal.style.display = "none";
};

updateProducts();
