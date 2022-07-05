const BASE_CHORD_PATTERN = "(?<base>[A-G](#|b)?)";

const MINOR_CHORD_PATTERN = "(?<minor>(minor|min|m)?)";

const INTERVAL_CHORD_PATTERN = "(?<interval>(\\d\\-|\\d\\+|\\d)*)";

const BASS_CHORD_PATTERN = "(\\/(?<bass>[A-G](#|b)?))?";

const FULL_CHORD_PATTERN =
  BASE_CHORD_PATTERN +
  MINOR_CHORD_PATTERN +
  INTERVAL_CHORD_PATTERN +
  BASS_CHORD_PATTERN;

const CHORD_LINE_PATTERN =
  "^((?<full>" +
  BASE_CHORD_PATTERN +
  MINOR_CHORD_PATTERN +
  INTERVAL_CHORD_PATTERN +
  BASS_CHORD_PATTERN +
  ")|\\s)+$";

const EOL_PATTERN = /\n/;

const SPACE_PATTERN = /\s/g;

const CHORD_LINE_REGEX = new RegExp(CHORD_LINE_PATTERN, "gm");

const FULL_CHORD_REGEX = new RegExp(FULL_CHORD_PATTERN, "g");

let cifraEntrada = document.getElementById("cifraEntrada");

let cifraSaida = document.getElementById("cifraSaida");

cifraEntrada.addEventListener("keyup", function () {
  let content = this.value;
  let contentSplit = content.split(EOL_PATTERN);
  let newContent = "";

  for (const line of contentSplit) {
    if (CHORD_LINE_REGEX.test(line)) {
      newContent +=
        line.replace(FULL_CHORD_REGEX, function (i) {
          return "<b>" + i + "</b>";
        }) + "\n";
    } else {
      newContent += line + "\n";
    }
  }

  cifraSaida.innerHTML = newContent;
});
