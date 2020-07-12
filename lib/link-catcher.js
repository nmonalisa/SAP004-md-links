const extractMdLinks = function (text, regex) {
  const links = text.match(regex);
  return links !== null ? links : [];
}
module.exports = extractMdLinks;