
const {mdLinks} = require ('./md-links');


const optionValidate = (path) => {mdLinks(path, { validate: true })
  .then(links => {
    console.log(links.map((link) => `${('✔ href:')} ${(link.href)}\n${('✔ text:')} ${(link.text)}\n${('✔ file:')} ${(link.file)}\n${('▫ status:')} ${(link.status)}\n${('▫ message:')} ${(link.message)}`).join('\n\n'))})
  .catch(error => {
    console.log(error);
  })
};

const optionStats = (path) => {mdLinks(path, {validate: true})
  .then( links => {
    const totalLinks = links.map(link =>link.href);
    const uniqueLinks = new Set(totalLinks);
    console.log(`${('Total:')} ${(totalLinks.length)}\n${('Unique:')} ${(uniqueLinks.size)}`);
  })
  .catch(error => {
    console.log (error);
  })
};

const optionValidateStats = (path) => {mdLinks(path, {validate: true})
  .then( links => {
    const totalLinks = links.map(link =>link.href);
    const uniqueLinks = new Set(totalLinks);
    const arrayBrokenLinks = links.map(link => link.message);
    const brokenLinks = arrayBrokenLinks.filter(item => item === 'FAIL');
    console.log(`${('Total:')} ${(totalLinks.length)}\n${('Unique:')} ${(uniqueLinks.size)}\n${('Broken:')} ${(brokenLinks.length)}`);
  })
  .catch(error => {
    console.log (error);
  })
};
const optionDefault = (path) => {mdLinks(path, { validate: false })
  .then(links => {
     console.log(links.map((link) => `${('✔ file:')} ${(link.file)}\n${('✔ href:')} ${(link.href)}\n${('✔ text:')} ${(link.text)}`).join('\n\n'))})
  .catch(error => {
    console.log(error);
  })
};

module.exports = {
    optionValidate,
    optionStats,
    optionValidateStats,
    optionDefault,
  }

  