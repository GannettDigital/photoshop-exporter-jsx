//load library
#include "lib/smartProcess.jsx";
#include "lib/displaySelectionUI.jsx";

var validFiles = ["iTunesArtwork.psd", "LaunchPad.psd", "LaunchPhone.psd", "logo_dark.psd", "logo_white.psd", "feature_graphic.psd", "logo_onboarding.psd", "notification_icon.psd", "site-masthead-logo.psd", "site-nav-logo-dark.psd", "footer-logo@2x.psd"];

var userSelections = displaySelectionUI(validFiles);


var generateConfigs = function (file) {
    var configiOS = {
        "inputFile": userSelections.userInputFolder + "/" + userSelections.file,
        "confirm": false,
        "outputBaseFolder": userSelections.userOutputFolder,
        "outputFolder": "iOS",
        "traverseLayers": true
    };

    var configAndroid = {
        "inputFile": userSelections.userInputFolder + "/" + userSelections.file,
        "confirm": false,
        "outputBaseFolder": userSelections.userOutputFolder,
        "outputFolder": "Android",
        "traverseLayers": true
    };

    var configDesktop = {
        "inputFile": userSelections.userInputFolder + "/" + userSelections.file,
        "confirm": false,
        "outputBaseFolder": userSelections.userOutputFolder,
        "outputFolder": "Desktop",
        "traverseLayers": true
    }

    var configMobileWeb = {
        "inputFile": userSelections.userInputFolder + "/" + userSelections.file,
        "confirm": false,
        "outputBaseFolder": userSelections.userOutputFolder,
        "outputFolder": "MobileWeb",
        "traverseLayers": true
    }

    var configAmazon = {
        "inputFile": userSelections.userInputFolder + "/" + userSelections.file,
        "confirm": false,
        "outputBaseFolder": userSelections.userOutputFolder,
        "outputFolder": "Amazon",
        "traverseLayers": true
    }

    var configSam = {
        "inputFile": userSelections.userInputFolder + "/" + userSelections.file,
        "confirm": false,
        "outputBaseFolder": userSelections.userOutputFolder,
        "outputFolder": "SAM",
        "traverseLayers": true
    }

    if (file === "iTunesArtwork.psd") {

        configiOS.sizes = [
            {"x": 76, "y": 76, "name": "Icon-76.png"},
            {"x": 152, "y": 152, "name": "Icon-76@2x.png"},
            {"x": 167, "y": 167, "name": "Icon-83.5@2x.png"},
            {"x": 120, "y": 120, "name": "Icon-60@2x.png"},
            {"x": 180, "y": 180, "name": "Icon-60@3x.png"},
            {"x": 40, "y": 40, "name": "Icon-40.png"},
            {"x": 80, "y": 80, "name": "Icon-40@2x.png"},
            {"x": 120, "y": 120, "name": "Icon-40@3x.png"},
            {"x": 29, "y": 29, "name": "Icon-29.png"},
            {"x": 58, "y": 58, "name": "Icon-29@2x.png"},
            {"x": 87, "y": 87, "name": "Icon-29@3x.png"},
            {"x": 1024, "y": 1024, "name": "iTunesArtwork.png"}
        ];

        configAndroid.sizes = [
            {"x": 64, "y": 64, "name": "icon.png", "subFolder": "drawable-hdpi", "canvasSize": {"x": 72, "y": 72}},
            {"x": 84, "y": 84, "name": "icon.png", "subFolder": "drawable-xhdpi", "canvasSize": {"x": 96, "y": 96}},
            {"x": 128, "y": 128, "name": "icon.png", "subFolder": "drawable-xxhdpi", "canvasSize": {"x": 144, "y": 144}},
            {"x": 168, "y": 168, "name": "icon.png", "subFolder": "drawable-xxxhdpi", "canvasSize": {"x": 192, "y": 192}},
            {"x": 512, "y": 512, "name": "GooglePlayIcon.png"}
        ];

        configMobileWeb.sizes = [
            {"x": 114, "y": 114, "name": "native-ios-114.png"},
            {"x": 65, "y": 65, "name": "android-icon.png"},
            {"x": 130, "y": 130, "name": "android-icon@2x.png"}
        ];

        configAmazon.sizes = [
            {"x": 108, "y": 108, "name": "icon-108.png"},
            {"x": 512, "y": 512, "name": "icon-512.png"}
        ];

        return [configiOS, configAndroid, configMobileWeb, configAmazon];

    } else if (file === "LaunchPad.psd") {
        configiOS.sizes = [
            {"x": 600, "y": 600, "name": "LaunchPad.png"},
            {"x": 1200, "y": 1200, "name": "LaunchPad@2x.png"}
        ];
        return [configiOS];

    } else if (file === "LaunchPhone.psd") {
        configiOS.sizes = [
            {"x": 270, "y": 270, "name": "LaunchPhone.png"},
            {"x": 540, "y": 540, "name": "LaunchPhone@2x.png"},
            {"x": 1000, "y": 1000, "name": "LaunchPhone@3x.png"}
        ];

        configAndroid.sizes = [
            {"x": 468, "y": 468, "name": "branding_logo_large.png", "subFolder": "drawable-hdpi"},
            {"x": 624, "y": 624, "name": "branding_logo_large.png", "subFolder": "drawable-xhdpi"},
            {"x": 936, "y": 936, "name": "branding_logo_large.png", "subFolder": "drawable-xxhdpi"},
            {"x": 1248, "y": 1248, "name": "branding_logo_large.png", "subFolder": "drawable-xxxhdpi"}
        ];

        return [configiOS, configAndroid];

    } else if (file === "logo_dark.psd") {
        configiOS.sizes = [
            {"x": 172, "y": 32, "name": "logo_dark.png"},
            {"x": 340, "y": 64, "name": "logo_dark@2x.png"},
            {"x": 510, "y": 96, "name": "logo_dark@3x.png"}
        ];
        configiOS.autocrop = true;


        configMobileWeb.sizes = [
            {"x": 160, "y": 30, "name": "logo-main.png"},
            {"x": 320, "y": 60, "name": "logo-main2x.png"}
        ];

        configSam.sizes = [
            {"x": 133, "y": 25, "name": "logo_sm.png"},
            {"x": 133, "y": 25, "name": "logo_sm_dark.png"},
            {"x": 266, "y": 50, "name": "logo_sm@2x.png"}
        ];

        return [configiOS, configSam, configMobileWeb];

    } else if (file === "logo_white.psd") {
        configiOS.sizes = [
            {"x": 172, "y": 32, "name": "logo_white.png"},
            {"x": 340, "y": 64, "name": "logo_white@2x.png"},
            {"x": 510, "y": 96, "name": "logo_white@3x.png"}
        ];
        configiOS.autocrop = true;

        configAndroid.sizes = [
            {"x": 255, "y": 48, "name": "logo_default.png", "subFolder": "drawable-hdpi"},
            {"x": 340, "y": 64, "name": "logo_default.png", "subFolder": "drawable-xhdpi"},
            {"x": 510, "y": 96, "name": "logo_default.png", "subFolder": "drawable-xxhdpi"},
            {"x": 680, "y": 128, "name": "logo_default.png", "subFolder": "drawable-xxxhdpi"},
            {"x": 255, "y": 48, "name": "logo_default_trans.png", "subFolder": "drawable-hdpi"},
            {"x": 340, "y": 64, "name": "logo_default_trans.png", "subFolder": "drawable-xhdpi"},
            {"x": 510, "y": 96, "name": "logo_default_trans.png", "subFolder": "drawable-xxhdpi"},
            {"x": 680, "y": 128, "name": "logo_default_trans.png", "subFolder": "drawable-xxxhdpi"},
            {"x": 112, "y": 21, "name": "widget_header.png", "subFolder": "drawable-hdpi"},
            {"x": 149, "y": 28, "name": "widget_header.png", "subFolder": "drawable-xhdpi"},
            {"x": 224, "y": 42, "name": "widget_header.png", "subFolder": "drawable-xxhdpi"},
            {"x": 298, "y": 56, "name": "widget_header.png", "subFolder": "drawable-xxxhdpi"}
        ];

        configSam.sizes = [
            {"x": 133, "y": 25, "name": "logo_sm_white.png"},
            {"x": 266, "y": 50, "name": "logo_sm_white@2x.png"},
            {"x": 426, "y": 80, "name": "logo_sm_white_40h@2x.png"}
        ];

        return [configiOS, configAndroid, configSam];
    } else if (file === "feature_graphic.psd") {
        configAndroid.sizes = [
            {"x": 1024, "y": 500, "name": "feature_graphic.png"}
        ];
        return [configAndroid];

    } else if (file === "logo_onboarding.psd") {
        configiOS.sizes = [
            {"x": 510, "y": 120, "name": "welcomescreen_logo.png"},
            {"x": 1020, "y": 240, "name": "welcomescreen_logo@2x.png"},
            {"x": 1530, "y": 360, "name": "welcomescreen_logo@3x.png"}
        ];
        configAndroid.sizes = [
            {"x": 765, "y": 180, "name": "welcomescreen_logo.png", "subFolder": "drawable-hdpi"},
            {"x": 1020, "y": 240, "name": "welcomescreen_logo.png", "subFolder": "drawable-xhdpi"},
            {"x": 1530, "y": 360, "name": "welcomescreen_logo.png", "subFolder": "drawable-xxhdpi"},
            {"x": 2040, "y": 480, "name": "welcomescreen_logo.png", "subFolder": "drawable-xxxhdpi"}
        ];

        return [configiOS, configAndroid];
    } else if (file === "notification_icon.psd") {
        configAndroid.sizes = [
            {"x": 60, "y": 60, "name": "notification_icon.png", "subFolder": "drawable-hdpi"},
            {"x": 80, "y": 80, "name": "notification_icon.png", "subFolder": "drawable-xhdpi"},
            {"x": 120, "y": 120, "name": "notification_icon.png", "subFolder": "drawable-xxhdpi"},
            {"x": 160, "y": 160, "name": "notification_icon.png", "subFolder": "drawable-xxxhdpi"}
        ];

        configDesktop.sizes = [
            {"x": 32, "y": 32, "name": "favicon.png"},
            {"x": 16, "y": 16, "name": "favicon-16.png"},
            {"x": 32, "y": 32, "name": "favicon-32.png"},
            {"x": 64, "y": 64, "name": "favicon-64.png"}
        ]

        return [configAndroid, configDesktop];
    } else if (file === "site-masthead-logo.psd") {
        configDesktop.sizes = [
            {"x": 800, "y": 160, "name": "site-masthead-logo@2x.png"},
            {"x": 400, "y": 80, "name": "site-masthead-logo.png"}
        ];
        configDesktop.autocrop = true;
        return [configDesktop];

    } else if (file === "site-nav-logo-dark.psd") {
        configDesktop.sizes = [
            {"x": 500, "y": 80, "name": "site-nav-logo-dark@2x.png"},
        ];
        configDesktop.autocrop = true;
        return [configDesktop];

    } else if (file === "footer-logo.psd") {
        configDesktop.sizes = [
            {"x": 360, "y": 54, "name": "footer-logo.png"},
            {"x": 720, "y": 108, "name": "footer-logo@2x.png"}
        ];
        return [configDesktop];

    } else {
        return false;
    }
}

if (userSelections.file === "All files") {
    $.writeln("-------Processing all files. This is going to take a while.-------");
    for (var i = 0; i < validFiles.length; i++) {

        var configs = generateConfigs(validFiles[i]);
        if ((configs !== false) && (configs.length > 0)) {
            for (var j = 0; j < configs.length; j++) {
                configs[j].inputFile = userSelections.userInputFolder + "/" + validFiles[i];
                smartProcess(configs[j]);
            }
        }
    }
} else {
    $.writeln("-------Processing just an individual file-------")
    var configs = generateConfigs(userSelections.file);
    for (var i = 0; i < configs.length; i++) {
        smartProcess(configs[i]);
    }
}
