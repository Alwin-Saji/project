  const scrollContainer = document.getElementById("scrollContainer");
  const leftBtn = document.querySelector(".navigation.left");
  const rightBtn = document.querySelector(".navigation.right");

  const scrollAmount = 500; // Adjust based on image size

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

function toggleDescription(btn) {
  const desc = btn.parentElement.nextElementSibling;
  desc.classList.toggle("show");

  // Change symbol
  btn.innerHTML = desc.classList.contains("show") ? "×" : "+";
}


