import CifraParser from "./Cifra/Parser.js";

const parser = new CifraParser();

let cifraEntrada = document.getElementById("cifraEntrada");

let cifraSaida = document.getElementById("cifraSaida");

cifraEntrada.addEventListener("keyup", function () {
  console.log("teste");
  cifraSaida.innerHTML = parser.parse(this.value);
});
