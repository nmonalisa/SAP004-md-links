const extractMdLinks = (text, regex, cutBy) => {
  const linkList = []
  text.match(regex).forEach(item => {
    const splitedContent = item.split(cutBy);
    linkList.push({
      href: splitedContent[1].slice(0, -1),
      text: splitedContent[0].slice(1).substr(0, 50),
    })
  });
  return linkList;
}

module.exports = extractMdLinks;