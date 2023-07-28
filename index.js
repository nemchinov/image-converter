"use strict";
exports.__esModule = true;
var fs = require("fs");
var Converter = /** @class */ (function () {
    function Converter() {
    }
    Converter.prototype.start = function () {
        console.log('started');
        fs.readdir(this.filesDir, function (err, files) {
            files.forEach(function (file) {
                console.log(file);
            });
        });
        console.log('finished');
    };
    Object.defineProperty(Converter.prototype, "filesDir", {
        get: function () {
            if (!process.env.PATH) {
                throw new Error('Please, specify PATH argument');
            }
            return process.env.PATH;
        },
        enumerable: false,
        configurable: true
    });
    return Converter;
}());
var generator = new Converter();
generator.start();
