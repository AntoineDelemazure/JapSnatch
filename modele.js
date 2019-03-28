function if_I_want_something(message, sender, responce) {
    //chrome.storage.sync.get('path', function(items))
    let downloading = chrome.downloads.download({
        url: message.url,
        conflictAction: "uniquify",
        saveAs: false,
    }, responce({message:"Je suis un message"}))
  };

chrome.runtime.onMessage.addListener(if_I_want_something);