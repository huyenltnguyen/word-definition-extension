const bgPage = chrome.extension.getBackgroundPage();
const word = bgPage.word;

const getDefinition = () => {
  const apiUrl = `http://api.wordnik.com:80/v4/word.json/${word}/definitions?limit=3&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;

  fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => data.forEach((d) => createListItem(d.text)))
  .catch((err) => console.log(err));
};

const createListItem = (def) => {
  const item = document.createElement('li');
  const itemText = document.createTextNode(def);
  item.appendChild(itemText);
  document.querySelector('ul').appendChild(item);
};


getDefinition();