const utils = require('../utils')

const extractMdLinks = (text, regex, cutBy) => {
  const linkList = []
  const extractedLinks = text.match(regex)
  if (extractMdLinks.length > 0) {
    extractedLinks.forEach(item => {
      const splitedContent = item.split(cutBy);
      linkList.push({
        href: splitedContent[1].slice(0, -1),
        text: splitedContent[0].slice(1).substr(0, 50),
      })
    });
    return linkList;
  } else {
    console.log(utils.zeroLinksMessage);
  }

}

module.exports = extractMdLinks;