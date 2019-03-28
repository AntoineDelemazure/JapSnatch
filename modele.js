function if_I_want_something(courrier) {
	console.log('Throne of Want')
	console.log(courrier)
	console.log(courrier.path)
    let downloading = chrome.downloads.download({
        url: courrier.message.url,
        conflictAction: "uniquify",
        saveAs: false,
        filename: courrier.path
    }, courrier.response("Hu"))
  };

function i_take_it(courrier) {
	console.log('Wielder of names')
	return new Promise((want, echec) => {
		chrome.storage.sync.get("path", function(items){
			if (chrome.runtime.error) {
		    	echec();
		    } else {
		    	courrier.path = items.path;
		    	want(courrier);
		    }
		})
	})
}

function dummy(){
	console.log("dummy")
}

function echec(){
	console.log("c'est la misère")
}

chrome.runtime.onMessage.addListener(function(message, sender, responce){
	console.log('je suis là')
	i_take_it({
			message: message,
			sender: sender,
			response: responce
			})
		.then(if_I_want_something, echec)
		//.then(responce, echec)
});