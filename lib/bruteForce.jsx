
//set unit preferences
var strtRulerUnits = app.preferences.rulerUnits;
var strtTypeUnits = app.preferences.typeUnits;
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;


/////////////////////////////////////////////////////////////////////////////////////////////

var hideAllLayerSets = function(doc) {
	for(var i =0; i<doc.layerSets.length; i++) {
		doc.layerSets[i].visible = false;
	}
};

var useFolder = function(path) {
	path = path.replace('//','/');
	var outputFolder = new Folder(path);
	if(!outputFolder.exists) {
		outputFolder.create();
		$.writeln("Created new folder: " + path);
	} else {
		$.writeln("Used existing folder: " + path);
	}
	return outputFolder;
};

// Select Icon file
var location = "~/Sites/photoshop-exporter-jsx/test/blank.psd";
var file = File(location); //hard code a filename

// if(file === null) return; // cancelled.
app.open(file);


var docRef = app.activeDocument;
var placeRef = new File("~/Sites/photoshop-exporter-jsx/test/test.psd");
PlaceFile(placeRef);
MakeSmartLayer();
// RasterizeSmart();

// Place file as Smart
function PlaceFile(placeRef) {
   function cTID(s) {return app.charIDToTypeID(s); };
   var desc = new ActionDescriptor();
   desc.putPath(cTID('null'), new File(placeRef));
   desc.putEnumerated(cTID('FTcs'), cTID('QCSt'), cTID('Qcsa') );
   var ldesc = new ActionDescriptor();
   ldesc.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0.000000 );
   ldesc.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0.000000 );
   desc.putObject(cTID('Ofst'), cTID('Ofst'), ldesc);
   executeAction(cTID('Plc '), desc, DialogModes.NO);
   // Resize the layer
   var layer = app.activeDocument.activeLayer;
   layer.resize(100, 100);
   return layer;
}

// Make a Smart Layer
function MakeSmartLayer() {
   function cTID(s) { return app.charIDToTypeID(s); };
   function sTID(s) { return app.stringIDToTypeID(s); };
   executeAction(sTID('newPlacedLayer'), undefined, DialogModes.NO);
}

var DebugDoc = function(){
	var layerset = app.activeDocument.layerSets.add();
	layerset.name = "voltron-property";

	$.writeln(app.activeDocument.artLayers.length);
	for(var i =0; i<app.activeDocument.artLayers.length; i++) {
		// app.activeDocument.artLayers[i].visible = false;
		if(app.activeDocument.artLayers[i].name !== "Background") {
			app.activeDocument.artLayers[i].move(layerset, ElementPlacement.INSIDE);	
		}

	}
	$.writeln("done");
};

DebugDoc();
