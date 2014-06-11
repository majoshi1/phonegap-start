// In-app browser
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
	//var ref = window.open('https://mobile.trademonster.com/OptionMonster/optionmonster/', '_self', 'location=no');
	//var ref = window.open('https://uat.citivelocity.com/fxclickz/', '_self', 'location=no');
	//var ref = window.open('http://majoshi1.github.io/citi/', '_self', 'location=no');
	createLink('LatAm', 'LatAm Bank Demo', 'http://majoshi1.github.io/citi/');
	createLink('Index', 'Indexing Demo', 'http://majoshi1.github.io/index/');
}

function createLink(title,toolTip,url) {
	var a = document.createElement('a');
	var linkText = document.createTextNode(title);
	a.appendChild(linkText);
	a.title = toolTip;
	a.href = url;
	document.body.appendChild(a);
	a = document.createElement('br');
	document.body.appendChild(a);	
}
