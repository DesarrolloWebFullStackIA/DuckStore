//Para cammbiar la imagen grande, lo dejo más o menos explicado (Sara)

document.addEventListener("DOMContentLoaded", () => {   //Espera que se haya cargado el DOM
  const mainImage = document.querySelector(".main-image img");  //Selecciona la imagen principal
  const thumbnails = document.querySelectorAll(".thumbnail");   //Selecciona las miniaturas

  if (!mainImage || thumbnails.length === 0) {  //Si hay error con las imagenes para la función
    return;
  }

  const showImage = (thumbnail) => {  //Función para mostrar la imagen grande
    const imagePath = thumbnail.dataset.image;  //Obtiene la ruta de la miniatura
    const imageAlt = thumbnail.dataset.alt;  //Obtiene el texto alt de la miniatura

    if (!imagePath || !imageAlt) {  //Si hay error con las miniaturas para la función
      return;
    }

    mainImage.src = imagePath;  //Cambia la ruta de la imagen principal
    mainImage.alt = imageAlt;   //Cambia el texto alt de la imagen principal

    thumbnails.forEach((item) => {   //Elimina la clase active de todas las miniaturas
      item.classList.remove("active");  
      item.removeAttribute("aria-current");
    });

    thumbnail.classList.add("active");    //Agrega la clase active a la miniatura seleccionada
    thumbnail.setAttribute("aria-current", "true");
  };

  thumbnails.forEach((thumbnail) => {    //Agrega los eventos a cada miniatura
    thumbnail.addEventListener("click", () => {    //click
      showImage(thumbnail);
    });

    thumbnail.addEventListener("mouseenter", () => {   //hover
      showImage(thumbnail);
    });

    thumbnail.addEventListener("focus", () => {   //teclado
      showImage(thumbnail);
    });
  });
});