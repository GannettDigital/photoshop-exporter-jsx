//load library
﻿#include "lib/smartProcess.jsx";

var config = {
	"inputFile":"~/Downloads/LaunchPad@2x.psd",
	"sizes":[
    {"x":600,"y":600,"name":"LaunchPad.png"},
    {"x":1200,"y":1200,"name":"LaunchPad@2x.png"}
  ],
	"confirm":false,
	"outputBaseFolder":"~/Downloads/Wave\ 1",
	"outputFolder":"iOS",
	"traverseLayers":true
};

smartProcess(config);
