document.addEventListener("deviceready", onDeviceReady, false);

//Disables back button
function onDeviceReady(){
    document.addEventListener("backbutton", function(e){
       if($.mobile.activePage.is('#homepage')){
           e.preventDefault();
           navigator.app.exitApp();
       }
       else {
           navigator.app.backHistory()
       }
    }, false);
}