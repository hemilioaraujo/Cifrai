const parseAcorde =
  /(\b[A-G](?:(?:add|dim|aug|maj|mM|mMaj|sus|m|b|#|\d)?(?:\/[A-G0-9])?)*(?!\||—|-|\.|:)(?:\b|#)+)/g;

document.getElementById("cifraEntrada").addEventListener("keyup", function () {
  let cifraEntrada = this.value;
  let cifraSaida = cifraEntrada.replace(parseAcorde, "<b>$1</b>");
  document.getElementById("cifraSaida").innerHTML = cifraSaida;
});
