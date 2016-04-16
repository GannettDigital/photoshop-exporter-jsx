#include "smartProcessFunctions.jsx";

//set unit preferences
var strtRulerUnits = app.preferences.rulerUnits;
var strtTypeUnits = app.preferences.typeUnits;
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;

/////////////////////////////////////////////////////////////////////////////////////////////
//start with input file
var inputFile = new File("~/Downloads/photoshop-exporter-jsx/test/test.psd");
app.open(inputFile);

//loop through each layer
var layerSetCount = app.activeDocument.layerSets.length;
for(var i = 0; i<layerSetCount; i++) {
	// hide all other layers
	hideAllLayerSets(app.activeDocument);
	// show this layer
	app.activeDocument.layerSets[i].visible = true;
	//save each visible layer as it's own file to a known temp place
	app.activeDocument.saveAs(new File("~/Downloads/photoshop-exporter-jsx/test/tmp-"+i+".psd"));
}

//start with output file
var outputFilePath = "~/Downloads/photoshop-exporter-jsx/test/blank.psd";
var outputFile = File(outputFilePath); //hard code a filename
app.open(outputFile);
//place temp input files
for(var i = 0; i<layerSetCount; i++) {
	var newLayer = PlaceFile(new File("~/Downloads/photoshop-exporter-jsx/test/tmp-"+i+".psd"));

	var layerset = app.activeDocument.layerSets.add();
	layerset.name = "layer-set-"+i;
	newLayer.move(layerset, ElementPlacement.INSIDE);
}
