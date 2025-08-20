"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectorError = void 0;
var ConnectorError = /** @class */ (function (_super) {
    __extends(ConnectorError, _super);
    function ConnectorError(params) {
        var _a;
        var _this = _super.call(this, params.message) || this;
        _this.name = "ConnectorError";
        _this.code = params.code;
        _this.statusCode = params.statusCode;
        _this.retryable = params.retryable;
        _this.details = params.details;
        _this.requestId = params.requestId;
        _this.source = (_a = params.source) !== null && _a !== void 0 ? _a : "unknown";
        return _this;
    }
    return ConnectorError;
}(Error));
exports.ConnectorError = ConnectorError;
//# sourceMappingURL=errors.js.map