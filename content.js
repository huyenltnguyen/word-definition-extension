console.log('Word Definition Extension is running');

const getSelectedText = () => {
  const selectedText = window.getSelection().toString().trim().toLowerCase();

  if (selectedText.length > 0) {
    console.log(selectedText);
    const message = {
      text: selectedText
    };
    chrome.runtime.sendMessage(message);
  }
};

window.addEventListener('mouseup', getSelectedText);