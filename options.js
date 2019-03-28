function saveOptions(e) {
	chrome.storage.sync.set({
		path: document.getElementById('path').value
	});
	e.preventDefault();
}

function restore_options(){
	chrome.storage.sync.get({
		path: ""
	}, function(items){
		document.getElementById('path').value = items.path;
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector("form").addEventListener("submit", saveOptions);