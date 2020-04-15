"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var hdmi_class_1 = require("./adaptee/hdmi.class");
var HDMItoRCAClass = /** @class */ (function (_super) {
    __extends(HDMItoRCAClass, _super);
    function HDMItoRCAClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HDMItoRCAClass.prototype.obtenerCanalVideo = function () {
        console.log('Convertir fuente de video HD a Video analógico');
        this.obtenerVideoHD();
        console.log('---------');
    };
    ;
    HDMItoRCAClass.prototype.obtenerCanalAudioDcho = function () {
        console.log('Convertir fuente de audio HD a Audio analógico Derecho');
        this.obtenerAudioHD();
        console.log('---------');
    };
    ;
    HDMItoRCAClass.prototype.obtenerCanalAudioIzdo = function () {
        console.log('Convertir fuente de audio HD a Audio analógico Izquierdo');
        this.obtenerAudioHD();
        console.log('---------');
    };
    ;
    return HDMItoRCAClass;
}(hdmi_class_1.HDMI));
exports.HDMItoRCAClass = HDMItoRCAClass;
