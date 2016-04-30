#include "../../lib/smartProcess.jsx";

smartProcess({
  "inputFile":"~//dropbox/Brand Assets Library/_templates/_app/documentation/examples/icon.psd",
  "outputBaseFolder":"~/projects/fancyApp/build/",
	"confirm":false,
  "outputFolder": "iOS",
  "traverseLayers":true,
  "sizes":[
		{"x":100,"y":50,"name":"sample.png"},
		{"x":200,"y":100,"name":"sample@2x.png"},
		{"x":400,"y":200,"name":"sample@3x.png"}
  ]
});
