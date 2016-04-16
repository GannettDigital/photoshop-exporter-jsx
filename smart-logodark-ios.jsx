//load library
﻿#include "lib/smartProcess.jsx";
#include "lib/displayUI.jsx";

var wave = displayUI();

var config = {
	"inputFile":"/Volumes/everyRAID5/Dropbox/USCP-BCAST\ Brand\ Library/_Templates/"+wave+"/logo_dark@2x.psd",
	"sizes":[
		{"x":172,"y":32,"name":"logo_dark.png"},
		{"x":340,"y":64,"name":"logo_dark@2x.png"},
		{"x":510,"y":96,"name":"logo_dark@3x.png"}
	],
	"confirm":false,
	"outputBaseFolder":"/Volumes/everyRAID5/Dropbox/USCP-BCAST\ Brand\ Library/_Templates/Automated\ Output",
	"outputFolder":"iOS",
	"traverseLayers":true
};

smartProcess(config);
