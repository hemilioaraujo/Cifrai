const BASE_CHORD_PATTERN = "(?<base>[A-G](#|b)?)";

const MINOR_CHORD_PATTERN = "(?<minor>(minor|min|m)?)";

const INTERVAL_CHORD_PATTERN = "(?<interval>(\\d)*)";

const BASS_CHORD_PATTERN = "(\\/(?<bass>[A-G](#|b)?))?";

const FULL_CHORD_PATTERN =
  BASE_CHORD_PATTERN +
  MINOR_CHORD_PATTERN +
  INTERVAL_CHORD_PATTERN +
  BASS_CHORD_PATTERN;

// Se a linha possui o padrão, é uma linha de acordes
const CHORD_LINE_PATTERN =
  "^(?:" +
  BASE_CHORD_PATTERN +
  MINOR_CHORD_PATTERN +
  INTERVAL_CHORD_PATTERN +
  BASS_CHORD_PATTERN +
  ")+$";

const EOL_PATTERN = /\n/;

const SPACE_PATTERN = /\s/;
