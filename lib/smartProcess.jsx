//set unit preferences
var strtRulerUnits = app.preferences.rulerUnits;
var strtTypeUnits = app.preferences.typeUnits;
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;
app.displayDialogs = DialogModes.NO;

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
		if(app.activeDocument.layerSets[i].name.indexOf("+")==0) {
			layerSets.push(app.activeDocument.layerSets[i].name);
		}
	}

	$.writeln("---layer sets---");
	$.writeln(layerSets);

	//delete all non-folder layers
	// if(app.activeDocument.artLayers.length > 0) {
	// 	try{
	// 		app.activeDocument.artLayers.removeAll();
	// 	} catch(e){
	// 		$.writeln("No extra layers to remove");
	// 	}
	// }

	var layerSetCount = layerSets.length;
	for(var i = 0; i<layerSetCount; i++) {
		// hide all other layersets
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
	if(app.activeDocument.layerSets.length > 0) {
		try{
			app.activeDocument.layerSets.removeAll();
		} catch(e) {
			$.writeln("No layersets to delete");
		}
	}
	//place temp input files
	for(var i = 0; i<layerSetCount; i++) {
		var newLayer = PlaceFile(new File(tempPath+ "tmp-"+layerSets[i]+".psd"));
          newLayer.name = layerSets[i];
	  /* var layerset = app.activeDocument.layerSets.add();
	     layerset.name =
	     newLayer.move(layerset, ElementPlacement.INSIDE);
	     $.writeln("MOVE DEBUG: moved "+newLayer.name+" aka tmp-"+layerSets[i]+".psd into "+layerset.name);
	     if(app.activeDocument.artLayers.length>1) {
	     confirm("problem")
	     } */
	}


	//test code
	// $.writeln("***alternate layer deletion strategy for output doc***")
	var layersHidden = 0;
	if(app.activeDocument.artLayers.length>1){
		for(var i=0; i<app.activeDocument.artLayers.length; i++) {
			app.activeDocument.artLayers[i].visible = false;
			layersHidden++;
		}
	} else {
		$.writeln("no current artlayers other than Background");
	}
	if(layersHidden>0) $.writeln("Layers hidden: " + layersHidden);

	app.activeDocument.save();

	#include "CreateAlliPhoneIcons.jsx";


		app.activeDocument.save();
		app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
		app.open(new File(outputFilePath));


	doResizeAndOutput(outputFilePath,config);

}
