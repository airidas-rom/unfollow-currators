// content.js

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'unfollowAll') {
      const elements = document.querySelectorAll('span');
      elements.forEach(element => {
        if (element.textContent === 'Following') {
          element.click();
        }
      });
    }
  });
  