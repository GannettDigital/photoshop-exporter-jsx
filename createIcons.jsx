#include "CreateAlliPhoneIcons.jsx"

var location = "~/Downloads/_TEST/iTunesArtwork.psd";
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
  ],
  "confirm":false,
  "outputFolder":"iOS"
}

doResizeAndOutput(location, config); //iOS

var androidConfig = {
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
  "confirm":false,
  "outputFolder":"android"
}

doResizeAndOutput(location, androidConfig); //iOS

var secondLocation = "~/Downloads/_TEST/LaunchImage@2x.psd";
var secondConfig = {
  "sizes":[
    {"x":76,"y":76,"name":"fancy-Icon-76.png"},
    {"x":100,"y":100,"name":"fancy-Icon-76-huge.png"}
  ],
  "confirm":false,
  "outputFolder":"iOS"
}

doResizeAndOutput(secondLocation, secondConfig); //iOS
