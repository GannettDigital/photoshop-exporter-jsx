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


// Place file as Smart
var PlaceFile = function(placeRef) {
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
};

// Make a Smart Layer
var MakeSmartLayer = function() {
   function cTID(s) { return app.charIDToTypeID(s); };
   function sTID(s) { return app.stringIDToTypeID(s); };
   executeAction(sTID('newPlacedLayer'), undefined, DialogModes.NO);
};
