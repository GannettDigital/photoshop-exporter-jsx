
/***********************************************************************

iPhone App Icon Export for iPhone 4/3 Touch and iPad.

Creates all 6 icons sizes that are required for these devices from homescreen, retina display, spotlight search

1. To use this script, double click the script file, photoshop will launch and ask you for a 512x512 icon file of any image format (jpeg, psd, gif, png etc.)
2. Select the file and photos shop will create 6 icon files and save these with the correct names in the save folder as the 512 image.

3. Add these images into your iPhone project and update you app plist.
Read Apples Q&Q 1686 on how to add this icons to your info plist
http://developer.apple.com/iphone/library/qa/qa2010/qa1686.html

Hope you like this script, hit John Ballinger up on Twitter @sponno on from his website www.bluespark.co.nz

Please keep this Attribution here if you are going to redistrubte this code. Thanks
Creative Commons Attribution 3.0 New Zealand License
http://creativecommons.org/licenses/by/3.0/nz/

************************************************************************/

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
	var outputFolder = new Folder(path);
	if(!outputFolder.exists) {
		outputFolder.create();
		$.writeln("Created new folder: " + path);
	} else {
		$.writeln("Used existing folder: " + path);
	}
	return outputFolder;
};

var processDocument = function(config, propertyName, activeDocument, options) {
	//get output folder setup

	// var baseFolderPath, baseFolder;
	// if(propertyName !== null) {
	// 	baseFolderPath = (config.outputFolder !== undefined) ? config.filePath+'/'+config.outputFolder : config.filePath;
	// 	baseFolder = useFolder(baseFolderPath);
	// } else {
	//
	// }


	for(var j in config.sizes) {
		var historyStateCounter = 2;
		// var fullOutputFolderPath = "";
		// if(propertyName !== null){
		// 	fullOutputFolderPath = (config.sizes[j].subFolder !== undefined) ? outputFolderPath+'/'+propertyName+'/'+config.sizes[j].subFolder : outputFolderPath+'/'+propertyName;
		// } else {
		// 	fullOutputFolderPath = (config.sizes[j].subFolder !== undefined) ? outputFolderPath+'/'+config.sizes[j].subFolder : outputFolderPath+'/';
		// }

		var possiblePathSegments = [config.filePath, propertyName, config.outputFolder, config.sizes[j].subFolder];
		var path = [];
		for(var i in possiblePathSegments) {
			if(possiblePathSegments[i] !== null) {
				path.push(possiblePathSegments[i]);
			}
		}


		//
		// var outputFolderPathSegments = (propertyName !== null) ? [propertyName,baseFolderPath] : [baseFolderPath];
		// if(config.sizes[j].subFolder !== undefined) {
		// 	outputFolderPathSegments.push(config.sizes[j].subFolder);
		// }

		var fullOutputFolderPath = path.join("/");
		var outputFolder = useFolder(fullOutputFolderPath);

		activeDocument.resizeImage(null,config.sizes[j].x,config.sizes[j].y,ResampleMethod.BICUBIC);
		//resize if canvas property has been set
		if(config.sizes[j].canvasSize && config.sizes[j].canvasSize !== null) {
			activeDocument.resizeCanvas(config.sizes[j].canvasSize.x,config.sizes[j].canvasSize.y,AnchorPosition.MIDDLECENTER);
			$.writeln("Changed size of canvas");
			historyStateCounter++;
		}
		activeDocument.exportDocument(File(fullOutputFolderPath + "/"+config.sizes[j].name), ExportType.SAVEFORWEB, options);

		// Undo Resize so we are working with crisp resizing.
		activeDocument.activeHistoryState = activeDocument.historyStates[activeDocument.historyStates.length - historyStateCounter];
		$.writeln(fullOutputFolderPath + "/"+config.sizes[j].name);
	}
};

//create a new slideshow package
var doResizeAndOutput = function(location, config) {

   	// Select Icon file
		var file;
		if(typeof location === "object"){
			//single config object passed, prompt user for file
			config = location;
			file = File.openDialog("Select a file to process.", /\.(jpe|jpg|jpeg|gif|png|tif|tiff|bmp|psd)/i);
		} else {
			file = File(location); //hard code a filename
		}

		if(file === null) return; // cancelled.
        app.open(file);
		var path =  file.absoluteURI.substr(0,file.absoluteURI.lastIndexOf("/")+1);
		config.filePath = path;

	    // Check document resolution
		if(activeDocument.resolution!=72){
			activeDocument.resizeImage(null,activeDocument.height,72,ResampleMethod.BICUBIC);
		}

		// export save options
		var options = new ExportOptionsSaveForWeb();
				options.includeProfile = false;
				options.interlaced = false;
				options.transparency = true;
				options.optimized = true;
				options.PNG8 = true;
				options.format = SaveDocumentType.PNG;


		// Resize icons from largest to smallest - to preserve quality on resizing.
		// Use configuration for determining x, y and filename.

		//Either traverse the layers in a document and output multiple sets of files
		//or just output one set of files for the whole doucment
		if(config.traverseLayers && (config.traverseLayers === true)) {
			//loop through layers
			//set all other layers to hidden
			//set this layer to visible
			//export using layer name as part of the path
			for(var i = 0; i<activeDocument.layerSets.length; i++) {
				//valid layer names must contain a dash
				if(activeDocument.layerSets[i].name.indexOf("-")>-1){
					hideAllLayerSets(activeDocument);
					activeDocument.layerSets[i].visible = true;
					var propertyName = activeDocument.layerSets[i].name;

					processDocument(config, propertyName, activeDocument, options);

				}
			}
		} else {
			//output the current state of the file, based on the config
			processDocument(config, null, activeDocument, options);
		}

		activeDocument.close(SaveOptions.DONOTSAVECHANGES);
		if(config.confirm === true) {
	    alert("Done\nAll the new icons have been saved beside your original icons.");
		}

};
