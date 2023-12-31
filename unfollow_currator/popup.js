// popup.js

// Function to send a message to the content script
function unfollowAll() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'unfollowAll' });
    });
  }
  
  // Add a click event listener to the button
  const unfollowButton = document.getElementById('unfollowButton');
  unfollowButton.addEventListener('click', unfollowAll);
  