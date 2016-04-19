//load library
﻿#include "lib/smartProcess.jsx";
#include "lib/displayUI.jsx";

var wave = displayUI();


var config = {
	"inputFile":"/Volumes/everyRAID5/Dropbox/USCP-BCAST\ Brand\ Library/_Templates/"+wave+"/LaunchPad@2x.psd",
	"sizes":[
    {"x":600,"y":600,"name":"LaunchPad.png"},
    {"x":1200,"y":1200,"name":"LaunchPad@2x.png"}
  ],
	"confirm":false,
	"outputBaseFolder":"/Volumes/everyRAID5/Dropbox/USCP-BCAST\ Brand\ Library/_Templates/Automated\ Output",
	"outputFolder":"iOS",
	"traverseLayers":true
};

smartProcess(config);
