//load library
﻿#include "lib/smartProcess.jsx";

var config = {
	"inputFile":"~/Downloads/logo_white@2x.psd",
	"sizes":[
		{"x":172,"y":32,"name":"logo_white.png"},
		{"x":340,"y":64,"name":"logo_white@2x.png"},
		{"x":510,"y":96,"name":"logo_white@3x.png"}
	],
	"confirm":false,
	"outputBaseFolder":"~/Downloads/Wave\ 1",
	"outputFolder":"iOS",
	"traverseLayers":true
};

smartProcess(config);
