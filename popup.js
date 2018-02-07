const bgPage = chrome.extension.getBackgroundPage();
const word = bgPage.word;

const getDefinition = () => {
  const apiUrl = `http://api.wordnik.com:80/v4/word.json/${word}/definitions?limit=200&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;

  fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => createPara(data[0].text))
  .catch((err) => console.log(err));
};

const createPara = (def) => {
  const para = document.createElement('p');
  const paraText = document.createTextNode(def);
  para.appendChild(paraText);
  document.body.appendChild(para);
};


getDefinition();