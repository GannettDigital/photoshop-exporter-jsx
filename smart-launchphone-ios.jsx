//load library
﻿#include "lib/smartProcess.jsx";

var config = {
	"inputFile":"~/Downloads/LaunchPhone@2x.psd",
	"sizes":[
		{"x":260,"y":260,"name":"LaunchPhone.png"},
		{"x":520,"y":520,"name":"LaunchPhone@2x.png"},
		{"x":1000,"y":1000,"name":"LaunchPhone@3x.png"}
  ],
	"confirm":false,
	"outputBaseFolder":"~/Downloads/Wave\ 1",
	"outputFolder":"iOS",
	"traverseLayers":true
};

smartProcess(config);
