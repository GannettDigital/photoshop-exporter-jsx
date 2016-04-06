
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
}

//create a new slideshow package
function doResizeAndOutput(location, config)
{

   	// Select Icon file

		if(typeof location === "object"){
			//single config object passed, prompt user for file
			config = location;
			var file = File.openDialog("Select a file to process.", /\.(jpe|jpg|jpeg|gif|png|tif|tiff|bmp|psd)/i);
		} else {
			var file = File(location); //hard code a filename
		}

		if(file == null) return; // cancelled.
        app.open(file);
		var path =  file.absoluteURI.substr(0,file.absoluteURI.lastIndexOf("/")+1);

		//get output folder setup
		var outputFolderPath = (config.outputFolder !== undefined) ? path+'/'+config.outputFolder : path;
		var outputFolder = new Folder(outputFolderPath);
		if(!outputFolder.exists) outputFolder.create();



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
				options.PNG8 = false;

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
					var layerName = activeDocument.layerSets[i].name;

					for(var j in config.sizes) {
						var fullOutputFolderPath = (config.sizes[j].subFolder !== undefined) ? outputFolderPath+'/'+layerName+'/'+config.sizes[j].subFolder : outputFolderPath+'/'+layerName;
						var outputFolder = new Folder(fullOutputFolderPath);
						if(!outputFolder.exists) outputFolder.create();

						activeDocument.resizeImage(null,config.sizes[j].x,config.sizes[j].y,ResampleMethod.BICUBIC);
						activeDocument.exportDocument(File(fullOutputFolderPath + "/"+config.sizes[j].name), ExportType.SAVEFORWEB, options);

						// Undo Resize so we are working with crisp resizing.
						app.activeDocument.activeHistoryState = app.activeDocument.historyStates[app.activeDocument.historyStates.length - 2];
					}
				}
			}
		} else {
			//output the current state of the file, based on the config
			for(var i in config.sizes) {
				var fullOutputFolderPath = (config.sizes[i].subFolder !== undefined) ? outputFolderPath+'/'+config.sizes[i].subFolder : outputFolderPath;
				var outputFolder = new Folder(fullOutputFolderPath);
				if(!outputFolder.exists) outputFolder.create();

				activeDocument.resizeImage(null,config.sizes[i].x,config.sizes[i].y,ResampleMethod.BICUBIC);
				activeDocument.exportDocument(File(fullOutputFolderPath + "/"+config.sizes[i].name), ExportType.SAVEFORWEB, options);

				// Undo Resize so we are working with crisp resizing.
				app.activeDocument.activeHistoryState = app.activeDocument.historyStates[app.activeDocument.historyStates.length - 2];
			}
		}



		// activeDocument.close(SaveOptions.DONOTSAVECHANGES);
		if(config.confirm === true) {
	    alert("Done\nAll the new icons have been saved beside your original icons.")
		}





}
