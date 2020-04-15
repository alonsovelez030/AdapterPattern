"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HDMI = /** @class */ (function () {
    function HDMI() {
    }
    HDMI.prototype.obtenerVideoHD = function () {
        console.log("Video obtenido desde fuente HD.");
    };
    HDMI.prototype.obtenerAudioHD = function () {
        console.log("Audio obtenido desde fuente HD.");
    };
    return HDMI;
}());
exports.HDMI = HDMI;
