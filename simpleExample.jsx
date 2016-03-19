#include "CreateAlliPhoneIcons.jsx"

doResizeAndOutput("~/Downloads/_TEST/iTunesArtwork.psd", {
  "sizes":[
    {"x":76,"y":76,"name":"Icon-76.png","subFolder":"@1x"},
    {"x":152,"y":152,"name":"Icon-76@2x.png","subFolder":"@2x"},
  ],
  "confirm":false,
  "outputFolder":"iOS"
});
