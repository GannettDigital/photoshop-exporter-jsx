function run(){
    var layer = activeDocument.activeLayer; //Grab the currently selected layer

    //Calculate length and width based on the rectangular bounds of the selected layer
    var length = layer.bounds[2]-layer.bounds[0]; //Grab the length
    var width = layer.bounds[3]-layer.bounds[1]; //Grab the width

    $.writeln("layer: "+activeDocument.activeLayer)
    $.writeln("width: "+ width)
    $.writeln("length: "+length)

    $.writeln(layer.bounds.join(","));
    //Create a text layer
    // var textLayer = activeDocument.artLayers.add(); //Make a new layer on the canvas
    // textLayer.kind = LayerKind.TEXT; //Make that layer a text layer
    // textLayer.name = "Dimensions"; //Name the layer "Dimensions"
    // var textReference = textLayer.textItem; //Create a textItem which we'll use to fill the text layer
    // textReference.contents = "Length: " + length + " Width: " + width; //Set the contents of that textItem to the length and width

}
run();
