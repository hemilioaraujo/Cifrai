const BASE_CHORD_PATTERN = "(?<base>[A-G](#|b)?)";

const MINOR_CHORD_PATTERN = "(?<minor>(minor|min|m)?)";

const INTERVAL_CHORD_PATTERN = "(?<interval>(\\d\\-|\\d\\+|\\d)*)";

const BASS_CHORD_PATTERN = "(\\/(?<bass>[A-G](#|b)?))?";

const SECTION_PATTERN = "^.+:s*$";

const MUSIC_NAME_PATTERN = "^Musica=(.+)$";

const ARTIST_NAME_PATTERN = "^Artista=(.+)$";

const FULL_CHORD_PATTERN =
  BASE_CHORD_PATTERN +
  MINOR_CHORD_PATTERN +
  INTERVAL_CHORD_PATTERN +
  BASS_CHORD_PATTERN;

const CHORD_LINE_PATTERN =
  "^(?:" +
  BASE_CHORD_PATTERN +
  MINOR_CHORD_PATTERN +
  INTERVAL_CHORD_PATTERN +
  BASS_CHORD_PATTERN +
  ")+$";

const EOL_PATTERN = /\n/;

const SPACE_PATTERN = /\s/g;

const CHORD_LINE_REGEX = new RegExp(CHORD_LINE_PATTERN, "gm");

const FULL_CHORD_REGEX = new RegExp(FULL_CHORD_PATTERN, "g");

const SECTION = new RegExp(SECTION_PATTERN);

const MUSIC_NAME = new RegExp(MUSIC_NAME_PATTERN);

const ARTIST_NAME = new RegExp(ARTIST_NAME_PATTERN);

let cifraEntrada = document.getElementById("cifraEntrada");

let cifraSaida = document.getElementById("cifraSaida");

cifraEntrada.addEventListener("keyup", function () {
  let content = this.value;
  let contentSplit = content.split(EOL_PATTERN);
  let newContent = "";

  for (const line of contentSplit) {
    let lineTrim = line.replace(SPACE_PATTERN, "");
    if (CHORD_LINE_REGEX.test(lineTrim)) {
      newContent +=
        line.replace(FULL_CHORD_REGEX, function (i) {
          return '<span class="badge bg-warning">' + i + "</span>";
        }) + "\n";
    } else if (SECTION.test(lineTrim)) {
      newContent +=
        line.replace(SECTION, function (i) {
          return '<span class="badge bg-dark">' + i + "</span>";
        }) + "\n";
    } else if (MUSIC_NAME.test(lineTrim)) {
      let title = lineTrim.match(MUSIC_NAME)[1];
      newContent += '<span class="fw-bold fs-2">' + title + "</span>" + "\n";
    } else if (ARTIST_NAME.test(lineTrim)) {
      let artist_name = lineTrim.match(ARTIST_NAME)[1];
      newContent +=
        '<span class="fw-bold fs-5">' + artist_name + "</span>" + "\n";
    } else {
      newContent += line + "\n";
    }
  }

  cifraSaida.innerHTML = newContent;
});
