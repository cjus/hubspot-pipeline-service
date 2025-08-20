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
var __asyncDelegator = (this && this.__asyncDelegator) || function (o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
};
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubSpotApiConnector = void 0;
exports.createHubSpotConnector = createHubSpotConnector;
var defaults_1 = require("./config/defaults");
var http_client_1 = require("./client/http-client");
var token_bucket_1 = require("./rate-limit/token-bucket");
var paginate_1 = require("./core/paginate");
var contacts_1 = require("./domains/contacts");
var companies_1 = require("./domains/companies");
var deals_1 = require("./domains/deals");
var tickets_1 = require("./domains/tickets");
var engagements_1 = require("./domains/engagements");
var HubSpotApiConnector = /** @class */ (function () {
    function HubSpotApiConnector() {
        var _this = this;
        this.connected = false;
        // Contacts
        this.listContacts = function (params) { return _this.domain.listContacts(params); };
        this.getContact = function (params) { return _this.domain.getContact(params); };
        this.streamContacts = function (params) { return _this.domain.streamContacts(params); };
        this.getContacts = function (params) { return _this.domain.getContacts(params); };
        // Companies
        this.listCompanies = function (params) { return _this.domain.listCompanies(params); };
        this.getCompany = function (params) { return _this.domain.getCompany(params); };
        this.streamCompanies = function (params) { return _this.domain.streamCompanies(params); };
        this.getCompanies = function (params) { return _this.domain.getCompanies(params); };
        // Deals
        this.listDeals = function (params) { return _this.domain.listDeals(params); };
        this.getDeal = function (params) { return _this.domain.getDeal(params); };
        this.streamDeals = function (params) { return _this.domain.streamDeals(params); };
        this.getDeals = function (params) { return _this.domain.getDeals(params); };
        // Tickets
        this.listTickets = function (params) { return _this.domain.listTickets(params); };
        this.getTicket = function (params) { return _this.domain.getTicket(params); };
        this.streamTickets = function (params) { return _this.domain.streamTickets(params); };
        this.getTickets = function (params) { return _this.domain.getTickets(params); };
        // Engagements
        this.listEngagements = function (params) { return _this.domain.listEngagements(params); };
        this.getEngagement = function (params) { return _this.domain.getEngagement(params); };
        this.streamEngagements = function (params) { return _this.domain.streamEngagements(params); };
        this.getEngagements = function (params) { return _this.domain.getEngagements(params); };
    }
    HubSpotApiConnector.prototype.initialize = function (userConfig) {
        var _this = this;
        var _a, _b, _c, _d;
        this.config = (0, defaults_1.withDerivedDefaults)(userConfig);
        this.http = new http_client_1.HttpClient(this.config, {
            applyAuth: function (_a) {
                var _b, _c, _d;
                var headers = _a.headers;
                if (((_b = _this.config) === null || _b === void 0 ? void 0 : _b.auth.type) === "bearer") {
                    var token = (_d = (_c = _this.config) === null || _c === void 0 ? void 0 : _c.auth.bearer) === null || _d === void 0 ? void 0 : _d.token;
                    if (!token)
                        throw new Error("Missing bearer token");
                    headers["Authorization"] = "Bearer ".concat(token);
                }
            },
        });
        var rps = (_b = (_a = this.config.rateLimit) === null || _a === void 0 ? void 0 : _a.requestsPerSecond) !== null && _b !== void 0 ? _b : 0;
        var capacity = (_d = (_c = this.config.rateLimit) === null || _c === void 0 ? void 0 : _c.burstCapacity) !== null && _d !== void 0 ? _d : rps;
        if (rps > 0)
            this.limiter = new token_bucket_1.TokenBucketLimiter({ capacity: capacity, refillPerSec: rps });
    };
    HubSpotApiConnector.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.connected = true;
                return [2 /*return*/];
            });
        });
    };
    HubSpotApiConnector.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.connected = false;
                return [2 /*return*/];
            });
        });
    };
    HubSpotApiConnector.prototype.isConnected = function () {
        return this.connected;
    };
    HubSpotApiConnector.prototype.requireClient = function () {
        if (!this.http)
            throw new Error("Connector not initialized");
        return this.http;
    };
    HubSpotApiConnector.prototype.send = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.limiter) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.limiter.waitForSlot()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.requireClient().request(opts)];
                }
            });
        });
    };
    HubSpotApiConnector.prototype.request = function (opts) {
        return this.send(opts);
    };
    // Generic paginator (advanced)
    HubSpotApiConnector.prototype.paginate = function (options) {
        return __asyncGenerator(this, arguments, function paginate_2() {
            var sendLite;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sendLite = function (args) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, this.send(args)];
                        }); }); };
                        return [5 /*yield**/, __values(__asyncDelegator(__asyncValues((0, paginate_1.paginateCursor)({ send: sendLite, path: options.path, query: options.query, pageSize: options.pageSize, extractItems: options.extractItems, extractNextCursor: options.extractNextCursor }))))];
                    case 1: return [4 /*yield*/, __await.apply(void 0, [_a.sent()])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HubSpotApiConnector.prototype, "domain", {
        // Build domain delegates
        get: function () {
            var _this = this;
            var sendLite = function (args) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, this.send(args)];
            }); }); };
            return __assign(__assign(__assign(__assign(__assign({}, (0, contacts_1.buildContactsDomain)(sendLite)), (0, companies_1.buildCompaniesDomain)(sendLite)), (0, deals_1.buildDealsDomain)(sendLite)), (0, tickets_1.buildTicketsDomain)(sendLite)), (0, engagements_1.buildEngagementsDomain)(sendLite));
        },
        enumerable: false,
        configurable: true
    });
    return HubSpotApiConnector;
}());
exports.HubSpotApiConnector = HubSpotApiConnector;
function createHubSpotConnector() {
    return new HubSpotApiConnector();
}
//# sourceMappingURL=index.js.map