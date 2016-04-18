//load library
﻿#include "lib/smartProcess.jsx";
#include "lib/displayUI.jsx";

var wave = displayUI();


var config = {
	"inputFile":"/Volumes/everyRAID5/Dropbox/USCP-BCAST\ Brand\ Library/_Templates/"+wave+"/LaunchPhone@2x.psd",
	"sizes":[
		{"x":270,"y":270,"name":"LaunchPhone.png"},
		{"x":540,"y":540,"name":"LaunchPhone@2x.png"},
		{"x":1000,"y":1000,"name":"LaunchPhone@3x.png"}
  ],
	"confirm":false,
	"outputBaseFolder":"/Volumes/everyRAID5/Dropbox/USCP-BCAST\ Brand\ Library/_Templates/Automated\ Output",
	"outputFolder":"iOS",
	"traverseLayers":true
};

smartProcess(config);
