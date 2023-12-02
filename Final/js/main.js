document.addEventListener("DOMContentLoaded", function () {
  const productCategories = document.querySelector(".product-categories");
  const categories = Array.from(productCategories.children);
  let activeCategory = document.querySelector(".active-category");
  const productList = document.getElementById("product-list");

  function updateCategory(category) {
    activeCategory.classList.remove("active-category");
    category.classList.add("active-category");
    activeCategory = category;
  }

  function updateProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach((product) => {
      if (product.category !== categories.indexOf(activeCategory)) return;
      else {
        const card = document.createElement("div");
        card.className = "product-card";
        card.onclick = function () {
          showModal(product);
        };
        card.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
    `;
        productList.appendChild(card);
      }
    });
  }

  productCategories.addEventListener("click", (e) => {
    const targetCategory = e.target.closest("li");
    if (!targetCategory) return;

    updateCategory(targetCategory);
    updateProducts();
  });

  //   productCategories.addEventListener("click", (e) => {
  //     const targetDot = e.target.closest("button");

  //     if (!targetDot) return;

  //     const currentSlide = slider.querySelector(".active-slide");
  //     const currentDot = slideNav.querySelector(".slide-indicator--active");
  //     const targetIndex = dots.findIndex((dot) => dot === targetDot);
  //     const targetSlide = slides[targetIndex];

  //     moveToSlide(slider, currentSlide, targetSlide);
  //   });
  // Sample product data
  const products = [
    {
      id: 1,
      category: 0,
      name: "Winter Coat",
      price: 20.99,
      imageUrl: "assets/sample_image.png",
    },
    {
      id: 2,
      category: 0,
      name: "Winter Coat 2",
      price: 15.49,
      imageUrl: "assets/sample_image.png",
    },
    {
      id: 3,
      category: 1,
      name: "Mie Gelas",
      price: 20.99,
      imageUrl: "assets/sample_image.png",
    },
    {
      id: 4,
      category: 3,
      name: "Heated Blanket",
      price: 15.49,
      imageUrl: "assets/sample_image.png",
    },
  ];

  function showModal(product) {
    console.log(product);
    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price.toFixed(2)}</p>
        <!-- Add more details as needed -->
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
});
