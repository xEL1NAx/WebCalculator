function rechnen(operation) {
  const zahl1 = parseFloat(document.getElementById("zahl1").value);
  const zahl2 = parseFloat(document.getElementById("zahl2").value);
  const ergebnisDiv = document.getElementById("ergebnis");

  if (isNaN(zahl1) || isNaN(zahl2)) {
    ergebnisDiv.innerText = "Bitte gültige Zahlen eingeben!";
    return;
  }

  let ergebnis;
  switch (operation) {
    case 'add':
      ergebnis = zahl1 + zahl2;
      break;
    case 'sub':
      ergebnis = zahl1 - zahl2;
      break;
    case 'mul':
      ergebnis = zahl1 * zahl2;
      break;
    case 'div':
      if (zahl2 === 0) {
        ergebnisDiv.innerText = "Division durch 0 ist nicht erlaubt!";
        return;
      }
      ergebnis = zahl1 / zahl2;
      break;
    default:
      ergebnisDiv.innerText = "Unbekannte Operation";
      return;
  }

  ergebnisDiv.innerText = "Ergebnis: " + ergebnis;
}
