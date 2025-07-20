// Fill product name into form field & scroll to form
function fillProduct(productName) {
    const productInput = document.getElementById("product");
    productInput.value = productName;
  
    // Scroll to form
    const formSection = document.querySelector(".order-form");
    formSection.scrollIntoView({ behavior: "smooth" });
  }
  