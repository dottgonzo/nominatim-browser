"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Axios = require("axios");
var NominatimError = /** @class */ (function (_super) {
    __extends(NominatimError, _super);
    function NominatimError(message, requestData) {
        var _this = _super.call(this, message) || this;
        _this.requestData = requestData;
        console.log("New nominatim error", requestData);
        return _this;
    }
    return NominatimError;
}(Error));
exports.NominatimError = NominatimError;
/**
Creates a webrequest to the given path.
*/
function createRequest(path, data) {
    //Result should be in JSON
    data["format"] = "json";
    var url = 'https://nominatim.openstreetmap.org';
    if (data.nominatimUrl)
        url = data.nominatimUrl;
    if (data.additionalStaticParamsToUrl)
        path = path + '?' + data.additionalStaticParamsToUrl;
    var request = Axios({
        url: url + "/" + path,
        method: "GET",
        params: data,
        responseType: "json",
    });
    return request;
}
;
/**
* Finishes a web request and automatically resolves or rejects it. Pass an optional callback to receive the
* response's string content and the promise resolver.
* @param message The web request method.
* @param resolve The promise resolver.
* @param reject The promise rejecter.
*/
function finishRequest(request) {
    // While it would be nicer to use Bluebird's Promise.resolve here rather than manually resolving and rejecting,
    // we would then lose the error message.
    return new Promise(function (res, rej) {
        request.then(function (resp) {
            if (resp.status > 205 || resp.status < 200) {
                return rej(new NominatimError("Response for request did not indicate success. " + resp.status + " " + resp.statusText + ".", resp.data));
            }
            ;
            res(resp.data);
        }).catch(function (e) { return rej(new NominatimError(e.message, e)); });
    });
}
;
/**
 * Creates and handles a complete web request.
 * @param method The request's HTTP method.
 * @param path The request's path.
 * @param data The request's optional querystring or body data object.
 */
function handleFullRequest(path, data) {
    var request = createRequest(path, data);
    return finishRequest(request);
}
;
/**
 * Lookup the latitude and longitude data for a given address.
 */
function geocode(data) {
    return handleFullRequest("search", data);
}
exports.geocode = geocode;
/**
 * Lookup the address data for a pair of latitude and longitude coordinates.
 */
function reverseGeocode(data) {
    return handleFullRequest("reverse", data);
}
exports.reverseGeocode = reverseGeocode;
/**
 * Lookup the address of one or multiple OSM objects like node, way or relation.
 */
function lookupAddress(data) {
    return handleFullRequest("lookup", data);
}
exports.lookupAddress = lookupAddress;
var NominatimGeocoder = /** @class */ (function () {
    function NominatimGeocoder(options) {
        this.url = 'https://nominatim.openstreetmap.org';
        if (options && options.url)
            this.url = options.url;
        if (options && options.additionalStaticParamsToUrl)
            this.additionalStaticParamsToUrl = options.additionalStaticParamsToUrl;
    }
    NominatimGeocoder.prototype.geocode = function (address) {
        return geocode({ nominatimUrl: this.url, additionalStaticParamsToUrl: this.additionalStaticParamsToUrl, q: address });
    };
    NominatimGeocoder.prototype.reverse = function (query) {
        return reverseGeocode({
            nominatimUrl: this.url,
            additionalStaticParamsToUrl: this.additionalStaticParamsToUrl,
            lat: query[0].toString(),
            lon: query[1].toString(),
            addressdetails: true
        });
    };
    return NominatimGeocoder;
}());
exports.NominatimGeocoder = NominatimGeocoder;
