const interior_carrusel = document.querySelector(".interior-carrusel");
const puntos = document.querySelectorAll(".punto");

puntos.forEach((punto, i) => {
  puntos[i].addEventListener("click", function () {
    // Aca guardamos la posicion de nuestro punto en una variable
    let posicion = i;
    // Calculamos el porcentaje que tendremos que mover la imagen
    let porcentaje = (100 / puntos.length) * -1;
    // y Multiplicamos la posicion de nuestro punto 
    // por el porcentaje para mover lo necesario para 
    // que la imagen quede centrada
    let operacion = posicion * porcentaje;
    // Con translateX movemos nuestro div del interior del carrusel
    // a la posicion que nos dio en el resultado de la operacion
    interior_carrusel.style.transform = `translateX(${operacion}%)`;
  });
  
});
