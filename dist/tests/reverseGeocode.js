"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var nominatim_browser_1 = require("../nominatim-browser");
var alsatian_1 = require("alsatian");
var ReverseGeocodeTestFixture = /** @class */ (function () {
    function ReverseGeocodeTestFixture() {
    }
    ReverseGeocodeTestFixture_1 = ReverseGeocodeTestFixture;
    ReverseGeocodeTestFixture.prototype.reverseGeocode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, nominatim_browser_1.reverseGeocode(ReverseGeocodeTestFixture_1.MINNEAPOLIS_LAT_LONG)];
                    case 1:
                        result = _a.sent();
                        alsatian_1.Expect(typeof (result.place_id)).toBe("string");
                        alsatian_1.Expect(typeof (result.licence)).toBe("string");
                        alsatian_1.Expect(typeof (result.lat)).toBe("string");
                        alsatian_1.Expect(typeof (result.lon)).toBe("string");
                        alsatian_1.Expect(result.display_name).toEqual("Minneapolis City Hall, South 4th Street, St Anthony West, Phillips, Minneapolis, Hennepin County, Minnesota, 55415, United States of America");
                        return [2 /*return*/];
                }
            });
        });
    };
    ReverseGeocodeTestFixture.prototype.reverseGeocodeWithAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, nominatim_browser_1.reverseGeocode(__assign({ addressdetails: true }, ReverseGeocodeTestFixture_1.MINNEAPOLIS_LAT_LONG))];
                    case 1:
                        result = _a.sent();
                        alsatian_1.Expect(typeof (result.place_id)).toBe("string");
                        alsatian_1.Expect(typeof (result.licence)).toBe("string");
                        alsatian_1.Expect(typeof (result.lat)).toBe("string");
                        alsatian_1.Expect(typeof (result.lon)).toBe("string");
                        alsatian_1.Expect(result.display_name).toEqual("Minneapolis City Hall, South 4th Street, St Anthony West, Phillips, Minneapolis, Hennepin County, Minnesota, 55415, United States of America");
                        alsatian_1.Expect(result.address).not.toBeNull();
                        alsatian_1.Expect(result.address).toBeDefined();
                        address = result.address;
                        alsatian_1.Expect(address.city).toEqual("Minneapolis");
                        alsatian_1.Expect(address.county).toEqual("Hennepin County");
                        alsatian_1.Expect(address.state).toEqual("Minnesota");
                        alsatian_1.Expect(address.country).toEqual("United States of America");
                        return [2 /*return*/];
                }
            });
        });
    };
    var ReverseGeocodeTestFixture_1;
    ReverseGeocodeTestFixture.MINNEAPOLIS_LAT_LONG = {
        lat: "44.9772995",
        lon: "-93.2654691",
    };
    __decorate([
        alsatian_1.AsyncTest(".reverseGeocode(): Should return data for coordinates"),
        alsatian_1.Timeout(5000)
    ], ReverseGeocodeTestFixture.prototype, "reverseGeocode", null);
    __decorate([
        alsatian_1.AsyncTest(".reverseGeocodeWithAddress(): Should return address data for coordinates"),
        alsatian_1.Timeout(5000)
    ], ReverseGeocodeTestFixture.prototype, "reverseGeocodeWithAddress", null);
    ReverseGeocodeTestFixture = ReverseGeocodeTestFixture_1 = __decorate([
        alsatian_1.TestFixture(".reverseGeocode test fixture")
    ], ReverseGeocodeTestFixture);
    return ReverseGeocodeTestFixture;
}());
exports.ReverseGeocodeTestFixture = ReverseGeocodeTestFixture;
