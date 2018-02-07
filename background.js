window.word = '';

const receiver = (request, sender, sendResponse) => {
  word = request.text;
};

chrome.runtime.onMessage.addListener(receiver);