function raiponce(messsage) {
	console.log("j'ai reçu une réponse " + messsage)
	let node = document.querySelectorAll('div#image>a')
	setTimeout(function() { 
		//document.location.href = node[0].href 
	}, 2000);
	
}

function error(error) {
	console.log("la réponse indique une erreur")
}

function selectImage(){
	let node = document.querySelectorAll('div#image>a>img');
	let image = node[0].src
	console.log(image)
	chrome.runtime.sendMessage({"url": image}, raiponce);
}

//window.addEventListener("load", selectImage)
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    selectImage()
  }
}, 500);
