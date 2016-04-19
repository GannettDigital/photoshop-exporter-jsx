//load library
﻿#include "lib/smartProcess.jsx";
#include "lib/displayUI.jsx";

var wave = displayUI();

var config = {
	"inputFile":"/Volumes/everyRAID5/Dropbox/USCP-BCAST\ Brand\ Library/_Templates/"+wave+"/logo_white@2x.psd",
	"sizes":[
		{"x":255,"y":48,"name":"logo_default.png","subFolder":"drawable-hdpi"},
		{"x":340,"y":64,"name":"logo_default.png","subFolder":"drawable-xhdpi"},
		{"x":510,"y":96,"name":"logo_default.png","subFolder":"drawable-xxhdpi"},
		{"x":680,"y":128,"name":"logo_default.png","subFolder":"drawable-xxxhdpi"},
		{"x":255,"y":48,"name":"logo_default_trans.png","subFolder":"drawable-hdpi"},
		{"x":340,"y":64,"name":"logo_default_trans.png","subFolder":"drawable-xhdpi"},
		{"x":510,"y":96,"name":"logo_default_trans.png","subFolder":"drawable-xxhdpi"},
		{"x":680,"y":128,"name":"logo_default_trans.png","subFolder":"drawable-xxxhdpi"},
		{"x":112,"y":21,"name":"widget_header.png","subFolder":"drawable-hdpi"},
		{"x":149,"y":28,"name":"widget_header.png","subFolder":"drawable-xhdpi"},
		{"x":224,"y":42,"name":"widget_header.png","subFolder":"drawable-xxhdpi"},
		{"x":298,"y":56,"name":"widget_header.png","subFolder":"drawable-xxxhdpi"}
	],
	"confirm":false,
	"outputBaseFolder":"/Volumes/everyRAID5/Dropbox/USCP-BCAST\ Brand\ Library/_Templates/Automated\ Output",
	"outputFolder":"Android",
	"traverseLayers":true
};

smartProcess(config);
