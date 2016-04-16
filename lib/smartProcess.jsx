
//set unit preferences
var strtRulerUnits = app.preferences.rulerUnits;
var strtTypeUnits = app.preferences.typeUnits;
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;

/////////////////////////////////////////////////////////////////////////////////////////////
//start with input file

var smartProcess = function(config){
	#include "smartProcessFunctions.jsx";
	var tempPath = "~/.tmp/";
	useFolder(tempPath);


	var inputFile = new File(config.inputFile);
	app.open(inputFile);

	//loop through each layer
	var layerSets = [];
	//generate a clean list of layerset names
	for(var i = 0; i<app.activeDocument.layerSets.length; i++) {
		if(app.activeDocument.layerSets[i].name.indexOf("-")>-1) {
			layerSets.push(app.activeDocument.layerSets[i].name);
		}
	}

	$.writeln("---layer sets---");
	$.writeln(layerSets);

	var layerSetCount = layerSets.length;
	for(var i = 0; i<layerSetCount; i++) {
		// hide all other layers
		hideAllLayerSets(app.activeDocument);
		// show this layer
		app.activeDocument.layerSets[i].visible = true;
		//save each visible layer as it's own file to a known temp place
		app.activeDocument.saveAs(new File(tempPath+ "tmp-"+layerSets[i]+".psd"));
	}
	//close file used to generate temp files with
	app.activeDocument.saveAs(new File(tempPath+ "blank.psd"));

	app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


	//start with output file
	var outputFilePath = tempPath+ "blank.psd";
	var outputFile = File(outputFilePath); //hard code a filename
	app.open(outputFile);

	//erase outputFile
	app.activeDocument.layerSets.removeAll();

	//place temp input files
	for(var i = 0; i<layerSetCount; i++) {
		var newLayer = PlaceFile(new File(tempPath+ "tmp-"+layerSets[i]+".psd"));

		var layerset = app.activeDocument.layerSets.add();
		layerset.name = layerSets[i];
		newLayer.move(layerset, ElementPlacement.INSIDE);
	}

	app.activeDocument.save();

	#include "CreateAlliPhoneIcons.jsx";

	doResizeAndOutput(outputFilePath,{
	  "sizes":[
	    {"x":150,"y":150,"name":"scaled-25%.png"},
	    {"x":300,"y":300,"name":"scaled-50%.png"},
	    {"x":600,"y":600,"name":"scaled-100%.png"},
	    {"x":1200,"y":1200,"name":"scaled-200%.png"},
	    {"x":2400,"y":2400,"name":"scaled-400%.png"}
	  ],
	  "confirm":false,
	  "outputFolder":"test",
	  "traverseLayers":true
	});

}

smartProcess({
	"inputFile":"~/Downloads/itunesArtworkLimited.psd",
	"outputFolder":"~/Downloads/"
});
