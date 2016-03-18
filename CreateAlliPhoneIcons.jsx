
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

//create a new slideshow package
function doResizeAndOutput(location, config)
{

   	// Select Icon file
		var file = File(location); //hard code a filename

		if(file == null) return; // cancelled.
        app.open(file);
		var path =  file.absoluteURI.substr(0,file.absoluteURI.lastIndexOf("/")+1);


	    // Check document resolution
		if(activeDocument.resolution!=72){
			activeDocument.resizeImage(null,activeDocument.height,72,ResampleMethod.BICUBIC);
		}

		// export save options
		var options = new ExportOptionsSaveForWeb();
				options.includeProfile = true;
				options.interlaced = false;
				options.transparency = true;
				options.optimized = true;
				options.PNG8 = false;

		// Resize icons from largest to smallest - to preserve quality on resizing.
		// Use configuration for determining x, y and filename.
		for(var i in config.sizes) {
			activeDocument.resizeImage(null,config.sizes[i].x,config.sizes[i].y,ResampleMethod.BICUBIC);
			activeDocument.exportDocument(File(path + "/"+config.sizes[i].name), ExportType.SAVEFORWEB, options);

			// Undo Resize so we are working with crisp resizing.
			app.activeDocument.activeHistoryState = app.activeDocument.historyStates[app.activeDocument.historyStates.length - 2];
		}
		activeDocument.close(SaveOptions.DONOTSAVECHANGES);
		if(config.confirm === true) {
	    alert("Done\nAll the new icons have been saved beside your original icons.")
		}

}
