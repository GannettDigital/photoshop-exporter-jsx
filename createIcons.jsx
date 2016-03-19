#include "CreateAlliPhoneIcons.jsx"
#include "config-iOS.jsx"
// #include "config-android.jsx"

var location = "~/Downloads/_TEST/iTunesArtwork.psd";
var iOSconfig = iOS();
// var androidconfig = android();

doResizeAndOutput(location, iOSconfig); //iOS
// doResizeAndOutput(location, androidconfig); //iOS


// doResizeAndOutput(secondLocation, secondConfig); //iOS
