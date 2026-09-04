document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.querySelector(".main-image img");
  const thumbnails = document.querySelectorAll(".thumbnail");

  if (!mainImage || thumbnails.length === 0) {
    return;
  }

  const showImage = (thumbnail) => {
    const imagePath = thumbnail.dataset.image;
    const imageAlt = thumbnail.dataset.alt;

    if (!imagePath || !imageAlt) {
      return;
    }

    mainImage.src = imagePath;
    mainImage.alt = imageAlt;

    thumbnails.forEach((item) => {
      item.classList.remove("active");
      item.removeAttribute("aria-current");
    });

    thumbnail.classList.add("active");
    thumbnail.setAttribute("aria-current", "true");
  };

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      showImage(thumbnail);
    });

    thumbnail.addEventListener("mouseenter", () => {
      showImage(thumbnail);
    });

    thumbnail.addEventListener("focus", () => {
      showImage(thumbnail);
    });
  });
});