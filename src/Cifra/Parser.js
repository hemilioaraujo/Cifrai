export default class CifraParser {
  BASE_CHORD_PATTERN = "(?<base>[A-G](#|b)?)";

  MINOR_CHORD_PATTERN = "(?<minor>(minor|min|m)?)";

  INTERVAL_CHORD_PATTERN = "(?<interval>(\\d\\-|\\d\\+|\\d)*)";

  BASS_CHORD_PATTERN = "(\\/(?<bass>[A-G](#|b)?))?";

  SECTION_PATTERN = "^.+:s*$";

  MUSIC_NAME_PATTERN = "^Musica=(.+)$";

  ARTIST_NAME_PATTERN = "^Artista=(.+)$";

  FULL_CHORD_PATTERN =
    this.BASE_CHORD_PATTERN +
    this.MINOR_CHORD_PATTERN +
    this.INTERVAL_CHORD_PATTERN +
    this.BASS_CHORD_PATTERN;

  CHORD_LINE_PATTERN =
    "^(?:" +
    this.BASE_CHORD_PATTERN +
    this.MINOR_CHORD_PATTERN +
    this.INTERVAL_CHORD_PATTERN +
    this.BASS_CHORD_PATTERN +
    ")+$";

  EOL_PATTERN = /\n/;

  SPACE_PATTERN = /\s/g;

  CHORD_LINE_REGEX = new RegExp(this.CHORD_LINE_PATTERN, "gm");

  FULL_CHORD_REGEX = new RegExp(this.FULL_CHORD_PATTERN, "g");

  SECTION = new RegExp(this.SECTION_PATTERN);

  MUSIC_NAME = new RegExp(this.MUSIC_NAME_PATTERN);

  ARTIST_NAME = new RegExp(this.ARTIST_NAME_PATTERN);

  parse(content) {
    let contentSplit = content.split(this.EOL_PATTERN);
    let newContent = "";

    for (const line of contentSplit) {
      let lineTrim = line.replace(this.SPACE_PATTERN, "");
      if (this.CHORD_LINE_REGEX.test(lineTrim)) {
        newContent +=
          line.replace(this.FULL_CHORD_REGEX, function (i) {
            return '<span class=" badge bg-warning">' + i + "</span>";
          }) + "\n";
      } else if (this.SECTION.test(lineTrim)) {
        newContent +=
          line.replace(this.SECTION, function (i) {
            return '<span class=" badge bg-dark">' + i + "</span>";
          }) + "\n";
      } else if (this.MUSIC_NAME.test(lineTrim)) {
        let title = lineTrim.match(this.MUSIC_NAME)[1];
        newContent += '<span class="fw-bold fs-2">' + title + "</span>" + "\n";
      } else if (this.ARTIST_NAME.test(lineTrim)) {
        let artist_name = lineTrim.match(this.ARTIST_NAME)[1];
        newContent +=
          '<span class="fw-bold fs-5">' + artist_name + "</span>" + "\n";
      } else {
        newContent += line + "\n";
      }
    }

    return newContent;
  }
}