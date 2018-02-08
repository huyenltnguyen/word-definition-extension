const bgPage = chrome.extension.getBackgroundPage();
const word = bgPage.word;
const $h2 = document.querySelector('h2');

const getDefinition = () => {
  const apiUrl = `http://api.wordnik.com:80/v4/word.json/${word}/definitions?limit=3&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;

  fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => data.length === 0 ? renderDefinition(null) : data.forEach((d) => renderDefinition(d.text)))
  .catch((err) => console.log(err));
};

const renderDefinition = (def) => {
  if (def) {
    const item = document.createElement('li');
    const itemText = document.createTextNode(def);
    item.appendChild(itemText);
    document.querySelector('ul').appendChild(item);
  } else {
    const para = document.createElement('p');
    const paraText = document.createTextNode('Can\'t find definition of this word.');
    para.appendChild(paraText);
    document.body.appendChild(para);
  }
};

$h2.innerHTML = word;
getDefinition();