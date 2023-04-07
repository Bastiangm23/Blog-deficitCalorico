const sexo = document.querySelector("#sexo");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const edad = document.querySelector("#edad");
const nivelActividad = document.querySelector("#nivelActividad");
const resultado = document.querySelector("#resultado");
const divResultado = document.querySelector(".field-resultado");

divResultado.style.visibility = "hidden";

function CalcularTMB() {
  if (
    sexo.value != "" &&
    altura.value != "" &&
    peso.value != "" &&
    edad.value != "" &&
    nivelActividad.value != ""
  ) {
    console.log("Entrando a la funcion 'CalcularTMB'");
    if (sexo.value == "masculino") {
      // Hombres TMB = (10 x peso de Kg) + (6,25 x altura en cm) – (5 x edad en años) + 5
      resultado.value =
        10 * parseInt(peso.value) +
        6.25 * parseInt(altura.value) -
        5 * parseInt(edad.value) +
        5; // formula para conseguir el TMB de una hombre
      console.log("Es hombre");
    } else {
      // Mujeres TMB = (10 x peso en kg) + (6,25 x altura en cm) – (5 x edad en años) – 161
      resultado.value =
        10 * parseInt(peso.value) +
        6.25 * parseInt(altura.value) -
        5 * parseInt(edad.value) -
        161; // formula para conseguir el TMB de una mujer
      console.log("Es mujer");
    }

    //Acontinuacion cambiara el resultado dependiendo de que opcion haya elegido el usuario en "Nivel de actividad".

    if (nivelActividad.value == "poco") {
      resultado.value = resultado.value * 1.2;
    }
    if (nivelActividad.value == "ligero") {
      resultado.value = resultado.value * 1.375;
    }
    if (nivelActividad.value == "moderado") {
      resultado.value = resultado.value * 1.55;
    }
    if (nivelActividad.value == "fuerte") {
      resultado.value = resultado.value * 1.725;
    }
    if (nivelActividad.value == "muyfuerte") {
      resultado.value = resultado.value * 1.9;
    }
    
    divResultado.style.visibility = "visible";
  } else {
    console.log("ERROR: Debe rellenar todos los campos");
  }

    
}
