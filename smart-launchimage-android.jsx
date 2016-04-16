//load library
﻿#include "lib/smartProcess.jsx";
#include "lib/displayUI.jsx";

var wave = displayUI();


var config = {
	"inputFile":"/Volumes/everyRAID5/Dropbox/USCP-BCAST\ Brand\ Library/_Templates/"+wave+"/LaunchPad@2x.psd",
	"sizes":[
		{"x":468,"y":468,"name":"branding_logo_large.png","subFolder":"drawable-hdpi"},
		{"x":624,"y":624,"name":"branding_logo_large.png","subFolder":"drawable-xhdpi"},
		{"x":936,"y":936,"name":"branding_logo_large.png","subFolder":"drawable-xxhdpi"},
		{"x":1248,"y":1248,"name":"branding_logo_large.png","subFolder":"drawable-xxxhdpi"}
	],
	"confirm":false,
	"outputBaseFolder":"/Volumes/everyRAID5/Dropbox/USCP-BCAST\ Brand\ Library/_Templates/Automated\ Output",
	"outputFolder":"Android",
	"traverseLayers":true
};

smartProcess(config);
