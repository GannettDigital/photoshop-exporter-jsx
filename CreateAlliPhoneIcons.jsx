
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
function doResizeAndOutput()
{

	   	// Select Icon file
		// var file = File.openDialog("Select your iPhone icon file, this should be 512 by 512 for best results, your new icon files will be saved here as well.", /\.(jpe|jpg|jpeg|gif|png|tif|tiff|bmp|psd)/i);
		var file = File("~/Downloads/_TEST/iTunesArtwork.psd"); //hard code a filename

		if(file == null) return; // cancelled.
        app.open(file);
		var path =  file.absoluteURI.substr(0,file.absoluteURI.lastIndexOf("/")+1);


	    // Check document resolution
		if(activeDocument.resolution!=72){
			activeDocument.resizeImage(null,activeDocument.height,72,ResampleMethod.BICUBIC);
		}

		// Png Save Options
		var pngOptions = new PNGSaveOptions();
		pngOptions.interlaced = false;

		// Resize icons from largest to smallest - to preserve quality on resizing.
		// Use configuration for determining x, y and filename.


		var config = {
			"sizes":[
				{"x":76,"y":76,"name":"Icon-76.png"},
				{"x":152,"y":152,"name":"Icon-76@2x.png"},
				{"x":167,"y":167,"name":"Icon-83.5@2x.png"},
				{"x":120,"y":120,"name":"Icon-60@2x.png"},
				{"x":180,"y":180,"name":"Icon-60@3x.png"},
				{"x":40,"y":40,"name":"Icon-40.png"},
				{"x":80,"y":80,"name":"Icon-40@2x.png"},
				{"x":120,"y":120,"name":"Icon-40@3x.png"},
				{"x":29,"y":29,"name":"Icon-29.png"},
				{"x":58,"y":58,"name":"Icon-29@2x.png"},
				{"x":87,"y":87,"name":"Icon-29@3x.png"}
			]
		}

		for(var i in config.sizes) {
			activeDocument.resizeImage(null,config.sizes[i].x,config.sizes[i].y,ResampleMethod.BICUBIC);
			activeDocument.saveAs(File(path + "/"+config.sizes[i].name), pngOptions, true);
			// Undo Resize so we are working with crisp resizing.
			app.activeDocument.activeHistoryState = app.activeDocument.historyStates[app.activeDocument.historyStates.length - 2];
		}
		activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    alert("Done\nAll the new icons have been saved beside your original icons.")

}
//create the slideshow source files
doResizeAndOutput();
