// In-app browser
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    var ref = window.open('https://mobile.trademonster.com/OptionMonster/optionmonster/', '_self', 'location=no');
}
