const parser =
  // Word boundry followed by a root chord
  "\\b[A-G]" +
  "(?:" +
  // Attempt to match variations after the root chord, like a minor,
  // add7, sus4, 7, etc.
  "(?:add|dim|aug|maj|mM|mMaj|sus|m|b|#|\\d)?" +
  // Handle split chords like D#m/7, A/C, etc.
  "(?:\\/[A-G0-9])?" +
  ")*" +
  // Match the above variations as along as they're not followed by a pipe or
  // hyphen, etc.. This prevents string names from being matched as a chord at the
  // beginning of a bar, or matching the author's name who abbreviates his/her
  // last name.
  "(?!\\||—|-|\\.|:)" +
  // Keep matching until a hash or word boundry
  "(?:\\b|#)+";

const parseAcorde =
  /\b[A-G](?:(?:add|dim|aug|maj|mM|mMaj|sus|m|b|#|\d)?(?:\/[A-G0-9])?)*(?!\||—|-|\.|:)(?:\b|#)+/g;

module.exports = { parser, parseAcorde };
