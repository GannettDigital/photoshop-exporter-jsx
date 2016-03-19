#Configuration-Driven Exports
##Icon export script for Adobe Photoshop

###Usage
From Photoshop, select the script from `File->Scripts->Browse...`, browse to createIcons.jsx, and select OK. Output files based on the configuration will be saved to the folder of the image (TODO: image selection).

###Minimal Configuration Object Syntax
This configuration will save a 76x76 image called `Icon-76.png` in a folder `./iOS/square` relative to the source psd.
```javascript
{
  "sizes":[
    {
      "x":76,
      "y":76,
      "name":"Icon-76.png",
      "subFolder":"square"
    }
    //...
  ],
  "outputFolder":"iOS" //create and/or target a folder relative to where the .psd is located
}
```

###Simple example execution script
If you don't provide the script with an explicit location as the first parameter, a `File Open` dialog will spawn to ask you to select a file.
```javascript
#include "CreateAlliPhoneIcons.jsx"
doResizeAndOutput({
  "sizes":[
    {"x":76,"y":76,"name":"Icon-76.png","subFolder":"@1x"},
    {"x":152,"y":152,"name":"Icon-76@2x.png","subFolder":"@2x"},
  ],
  "confirm":false,
  "outputFolder":"iOS"
});
```

###Sample Configuration Object for common iOS sizes
Suppressing confirmation dialog, as well as creating a base output folder only.
```javascript
{
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
  ],
  "confirm":false, //suppress confirmation dialog
  "outputFolder":"iOS" //create and/or target a folder relative to where the .psd is located
}
```

###Todo
- [x] define config format
- [x] get basic functionality working with config
- [x] improve documentation
- [x] add file/folder selection, and auto-detect
- [x] deal with alternate output file paths
- [ ] Add screenshots to the Readme
- [ ] Add Table of Contents to the Readme
- [ ] Add ability to traverse layers, rather than a file
- [ ] Consider being able to run a script across an entire folder


Based on the work by [John Ballinger](https://twitter.com/sponno), who released the original script under the [Creative Commons Attribution 3.0 New Zealand License](http://creativecommons.org/licenses/by/3.0/nz/)
