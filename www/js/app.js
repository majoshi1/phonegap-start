
// In-app browser
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    var ref = window.open('https://mobile.trademonster.com/OptionMonster/optionmonster/', '_blank', 'location=yes');
    //ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
    //ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
    //ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
    //ref.addEventListener('exit', function(event) { alert(event.type); });
}
