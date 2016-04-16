#include "lib/CreateAlliPhoneIcons.jsx"
#include "config-iOS.jsx"
// #include "config-android.jsx"

//use hard-coded file path
// var location = "~/Downloads/_TEST/iTunesArtwork.psd";

//load configuration from config-iOS.jsx
var iOSconfig = iOS();
// var androidconfig = android();

doResizeAndOutput(/*location,*/ iOSconfig); //iOS
// doResizeAndOutput(location, androidconfig); //iOS


// doResizeAndOutput(secondLocation, secondConfig); //iOS
