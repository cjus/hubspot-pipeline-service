"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCrudDomain = makeCrudDomain;
var paginate_1 = require("./paginate");
/**
 * makeCrudDomain
 *
 * Role in architecture:
 * - Creates a thin CRUD surface for a HubSpot CRM object path using the shared
 *   paginator and the connector's transport (`send`).
 * - Used by files in `src/domains/*` to bind a concrete API path and model types
 *   without duplicating request/pagination logic.
 *
 * Generics
 * - TObject: item model (e.g., `Contact`, `Company`)
 * - TListResponse: list API contract (e.g., `ContactsResponse`)
 * - TSingleResponse: single API contract (e.g., `ContactResponse`)
 *
 * Parameters
 * - objectPath: HubSpot REST path for the object (e.g., `/crm/v3/objects/contacts`)
 * - send: transport function provided by the connector that applies retries,
 *   rate‑limits, auth, and hooks.
 */
function makeCrudDomain(objectPath, send) {
    var _this = this;
    var api = {
        // GET /objects with properties/limit/after
        list: function (params) {
            var _a;
            var query = {};
            if ((_a = params === null || params === void 0 ? void 0 : params.properties) === null || _a === void 0 ? void 0 : _a.length)
                query.properties = params.properties.join(",");
            if (params === null || params === void 0 ? void 0 : params.limit)
                query.limit = params.limit;
            if (params === null || params === void 0 ? void 0 : params.after)
                query.after = params.after;
            return send({ method: "GET", path: objectPath, query: query });
        },
        // GET /objects/{id} with optional properties
        get: function (params) {
            var _a;
            var query = {};
            if ((_a = params === null || params === void 0 ? void 0 : params.properties) === null || _a === void 0 ? void 0 : _a.length)
                query.properties = params.properties.join(",");
            return send({ method: "GET", path: "".concat(objectPath, "/").concat(params.id), query: query });
        },
        // Async iterator over all items using cursor pagination
        streamAll: function (params) {
            return __asyncGenerator(this, arguments, function () {
                var query, _a, _b, _c, items, _i, items_1, item, e_1_1;
                var _d, e_1, _e, _f;
                var _g;
                return __generator(this, function (_h) {
                    switch (_h.label) {
                        case 0:
                            query = {};
                            if ((_g = params === null || params === void 0 ? void 0 : params.properties) === null || _g === void 0 ? void 0 : _g.length)
                                query.properties = params.properties.join(",");
                            _h.label = 1;
                        case 1:
                            _h.trys.push([1, 10, 11, 16]);
                            _a = true, _b = __asyncValues((0, paginate_1.paginateCursor)({ send: send, path: objectPath, query: query, pageSize: params === null || params === void 0 ? void 0 : params.pageSize }));
                            _h.label = 2;
                        case 2: return [4 /*yield*/, __await(_b.next())];
                        case 3:
                            if (!(_c = _h.sent(), _d = _c.done, !_d)) return [3 /*break*/, 9];
                            _f = _c.value;
                            _a = false;
                            items = _f;
                            _i = 0, items_1 = items;
                            _h.label = 4;
                        case 4:
                            if (!(_i < items_1.length)) return [3 /*break*/, 8];
                            item = items_1[_i];
                            return [4 /*yield*/, __await(item)];
                        case 5: return [4 /*yield*/, _h.sent()];
                        case 6:
                            _h.sent();
                            _h.label = 7;
                        case 7:
                            _i++;
                            return [3 /*break*/, 4];
                        case 8:
                            _a = true;
                            return [3 /*break*/, 2];
                        case 9: return [3 /*break*/, 16];
                        case 10:
                            e_1_1 = _h.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 16];
                        case 11:
                            _h.trys.push([11, , 14, 15]);
                            if (!(!_a && !_d && (_e = _b.return))) return [3 /*break*/, 13];
                            return [4 /*yield*/, __await(_e.call(_b))];
                        case 12:
                            _h.sent();
                            _h.label = 13;
                        case 13: return [3 /*break*/, 15];
                        case 14:
                            if (e_1) throw e_1.error;
                            return [7 /*endfinally*/];
                        case 15: return [7 /*endfinally*/];
                        case 16: return [2 /*return*/];
                    }
                });
            });
        },
        // Collect items into an array with an optional max cap
        getAll: function (params) { return __awaiter(_this, void 0, void 0, function () {
            var results, _a, _b, _c, item, e_2_1;
            var _d, e_2, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        results = [];
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 6, 7, 12]);
                        _a = true, _b = __asyncValues(api.streamAll({ properties: params === null || params === void 0 ? void 0 : params.properties, pageSize: params === null || params === void 0 ? void 0 : params.pageSize }));
                        _g.label = 2;
                    case 2: return [4 /*yield*/, _b.next()];
                    case 3:
                        if (!(_c = _g.sent(), _d = _c.done, !_d)) return [3 /*break*/, 5];
                        _f = _c.value;
                        _a = false;
                        item = _f;
                        results.push(item);
                        if ((params === null || params === void 0 ? void 0 : params.maxItems) && results.length >= params.maxItems)
                            return [3 /*break*/, 5];
                        _g.label = 4;
                    case 4:
                        _a = true;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_2_1 = _g.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _g.trys.push([7, , 10, 11]);
                        if (!(!_a && !_d && (_e = _b.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _e.call(_b)];
                    case 8:
                        _g.sent();
                        _g.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [2 /*return*/, results];
                }
            });
        }); },
    };
    return api;
}
//# sourceMappingURL=make-crud-domain.js.map