//load library
﻿#include "lib/smartProcess.jsx";

var config = {
	"inputFile":"~/Downloads/LaunchPad@2x.psd",
	"sizes":[
		{"x":468,"y":468,"name":"branding_logo_large.png","subFolder":"drawable-hdpi"},
		{"x":624,"y":624,"name":"branding_logo_large.png","subFolder":"drawable-xhdpi"},
		{"x":936,"y":936,"name":"branding_logo_large.png","subFolder":"drawable-xxhdpi"},
		{"x":1248,"y":1248,"name":"branding_logo_large.png","subFolder":"drawable-xxxhdpi"}
	],
	"confirm":false,
	"outputBaseFolder":"~/Downloads/Wave\ 1",
	"outputFolder":"Android",
	"traverseLayers":true
};

smartProcess(config);
