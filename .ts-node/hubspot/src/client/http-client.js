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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
var errors_1 = require("../types/errors");
var hook_middleware_1 = require("./middleware/hook-middleware");
var node_http_1 = __importDefault(require("node:http"));
var node_https_1 = __importDefault(require("node:https"));
var node_url_1 = require("node:url");
var HttpClient = /** @class */ (function () {
    function HttpClient(config, options) {
        if (options === void 0) { options = {}; }
        this.config = config;
        this.options = options;
    }
    HttpClient.prototype.buildUrl = function (path, query) {
        var _a;
        var url = new node_url_1.URL(path.startsWith("http") ? path : "".concat(this.config.baseUrl).concat(path));
        var qp = __assign(__assign({}, ((_a = this.config.defaultQueryParams) !== null && _a !== void 0 ? _a : {})), (query !== null && query !== void 0 ? query : {}));
        for (var _i = 0, _b = Object.entries(qp); _i < _b.length; _i++) {
            var _c = _b[_i], k = _c[0], v = _c[1];
            if (v === undefined || v === null)
                continue;
            url.searchParams.set(k, String(v));
        }
        return url.toString();
    };
    HttpClient.prototype.sleep = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (r) { return setTimeout(r, ms); })];
            });
        });
    };
    HttpClient.prototype.calculateDelay = function (attempt) {
        var _a, _b, _c, _d, _e, _f;
        var initial = (_b = (_a = this.config.retry) === null || _a === void 0 ? void 0 : _a.initialDelayMs) !== null && _b !== void 0 ? _b : 1000;
        var max = (_d = (_c = this.config.retry) === null || _c === void 0 ? void 0 : _c.maxDelayMs) !== null && _d !== void 0 ? _d : 30000;
        var mult = (_f = (_e = this.config.retry) === null || _e === void 0 ? void 0 : _e.backoffMultiplier) !== null && _f !== void 0 ? _f : 2;
        var base = Math.min(initial * Math.pow(mult, attempt - 1), max);
        var jitter = base * (0.5 + Math.random() * 0.5);
        return Math.floor(jitter);
    };
    HttpClient.prototype.shouldRetry = function (status, attempt) {
        var _a, _b, _c, _d;
        var retryables = (_b = (_a = this.config.retry) === null || _a === void 0 ? void 0 : _a.retryableStatusCodes) !== null && _b !== void 0 ? _b : [408, 425, 429, 500, 502, 503, 504];
        var withinAttempts = attempt < ((_d = (_c = this.config.retry) === null || _c === void 0 ? void 0 : _c.maxAttempts) !== null && _d !== void 0 ? _d : 3);
        return withinAttempts && retryables.includes(status);
    };
    HttpClient.prototype.request = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var start, path, url, headers, req, aborted, abortReason, hooks, timeoutMs, attempt, lastError, retryBudget, budgetDeadline, _a, status_1, resHeaders, text, hdrs, _i, _b, _c, k, v, value, data, retryAfter, rateLimit, envelope, delayMs, err_1;
            var _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
            return __generator(this, function (_v) {
                switch (_v.label) {
                    case 0:
                        start = Date.now();
                        path = opts.path.startsWith("/") ? opts.path : "/".concat(opts.path);
                        url = this.buildUrl(path, opts.query);
                        headers = __assign(__assign({}, ((_d = this.config.defaultHeaders) !== null && _d !== void 0 ? _d : {})), ((_e = opts.headers) !== null && _e !== void 0 ? _e : {}));
                        // Apply connector-provided auth (provider-specific)
                        if (this.options.applyAuth) {
                            this.options.applyAuth({ headers: headers });
                        }
                        req = {
                            method: opts.method,
                            url: url,
                            headers: headers,
                            body: opts.body,
                        };
                        aborted = false;
                        hooks = (0, hook_middleware_1.applyHookPipeline)((_f = this.config.hooks) !== null && _f !== void 0 ? _f : {}, (_g = opts.operation) !== null && _g !== void 0 ? _g : opts.method, function (type) { return ({
                            type: type,
                            operation: opts.operation,
                            request: req,
                            abort: function (reason) {
                                aborted = true;
                                abortReason = reason !== null && reason !== void 0 ? reason : "Aborted by hook";
                            },
                        }); });
                        return [4 /*yield*/, hooks.beforeRequest()];
                    case 1:
                        _v.sent();
                        if (aborted) {
                            throw new errors_1.ConnectorError({ message: abortReason || "Aborted", code: "CANCELLED", source: "userHook" });
                        }
                        timeoutMs = (_j = (_h = opts.timeoutMs) !== null && _h !== void 0 ? _h : this.config.timeoutMs) !== null && _j !== void 0 ? _j : 30000;
                        attempt = 0;
                        retryBudget = (_l = (_k = this.config.retry) === null || _k === void 0 ? void 0 : _k.retryBudgetMs) !== null && _l !== void 0 ? _l : 60000;
                        budgetDeadline = start + retryBudget;
                        _v.label = 2;
                    case 2:
                        if (!true) return [3 /*break*/, 19];
                        attempt += 1;
                        _v.label = 3;
                    case 3:
                        _v.trys.push([3, 9, , 18]);
                        return [4 /*yield*/, this.nodeHttpRequest(req.url, {
                                method: req.method,
                                headers: req.headers,
                                body: req.body ? (typeof req.body === "string" ? req.body : JSON.stringify(req.body)) : undefined,
                                timeoutMs: timeoutMs,
                            })];
                    case 4:
                        _a = _v.sent(), status_1 = _a.status, resHeaders = _a.headers, text = _a.text;
                        hdrs = {};
                        for (_i = 0, _b = Object.entries(resHeaders); _i < _b.length; _i++) {
                            _c = _b[_i], k = _c[0], v = _c[1];
                            value = Array.isArray(v) ? v.join(", ") : (v !== null && v !== void 0 ? v : "");
                            hdrs[k.toLowerCase()] = value;
                        }
                        data = undefined;
                        try {
                            data = text ? JSON.parse(text) : undefined;
                        }
                        catch (e) {
                            throw new errors_1.ConnectorError({ message: "Failed to parse JSON", code: "PARSING_ERROR", source: "deserialize" });
                        }
                        retryAfter = Number(hdrs["retry-after"]);
                        rateLimit = {
                            limit: Number((_m = hdrs["x-hubspot-ratelimit-daily"]) !== null && _m !== void 0 ? _m : hdrs["x-hubspot-ratelimit-secondly"]),
                            remaining: Number((_o = hdrs["x-hubspot-ratelimit-daily-remaining"]) !== null && _o !== void 0 ? _o : hdrs["x-hubspot-ratelimit-secondly-remaining"]),
                            reset: Number(hdrs["x-hubspot-ratelimit-reset"]),
                            retryAfterSeconds: Number.isFinite(retryAfter) ? retryAfter : undefined,
                        };
                        envelope = {
                            data: data,
                            status: status_1,
                            headers: hdrs,
                            meta: {
                                timestamp: new Date().toISOString(),
                                durationMs: Date.now() - start,
                                requestId: (_p = hdrs["x-request-id"]) !== null && _p !== void 0 ? _p : hdrs["x-trace"],
                                retryCount: attempt - 1,
                                rateLimit: rateLimit,
                            },
                        };
                        if (!(!(status_1 >= 200 && status_1 < 300) && this.shouldRetry(status_1, attempt))) return [3 /*break*/, 7];
                        return [4 /*yield*/, hooks.onRetry(attempt)];
                    case 5:
                        _v.sent();
                        delayMs = ((_q = this.config.retry) === null || _q === void 0 ? void 0 : _q.respectRetryAfter) && rateLimit.retryAfterSeconds
                            ? rateLimit.retryAfterSeconds * 1000
                            : this.calculateDelay(attempt);
                        if (Date.now() + delayMs > budgetDeadline) {
                            throw new errors_1.ConnectorError({ message: "Retry budget exceeded", code: "TIMEOUT" });
                        }
                        return [4 /*yield*/, this.sleep(delayMs)];
                    case 6:
                        _v.sent();
                        return [3 /*break*/, 2];
                    case 7: return [4 /*yield*/, hooks.afterResponse(envelope)];
                    case 8:
                        _v.sent();
                        return [2 /*return*/, envelope];
                    case 9:
                        err_1 = _v.sent();
                        lastError = err_1;
                        return [4 /*yield*/, hooks.onError(err_1)];
                    case 10:
                        _v.sent();
                        if ((err_1 === null || err_1 === void 0 ? void 0 : err_1.code) === "ETIMEDOUT" || (err_1 === null || err_1 === void 0 ? void 0 : err_1.message) === "Request timed out") {
                            throw new errors_1.ConnectorError({ message: "Request timed out", code: "TIMEOUT", source: "transport", retryable: true });
                        }
                        if (!(err_1 instanceof errors_1.ConnectorError)) return [3 /*break*/, 14];
                        if (!(this.shouldRetry((_r = err_1.statusCode) !== null && _r !== void 0 ? _r : 0, attempt) && Date.now() < budgetDeadline)) return [3 /*break*/, 13];
                        return [4 /*yield*/, hooks.onRetry(attempt)];
                    case 11:
                        _v.sent();
                        return [4 /*yield*/, this.sleep(this.calculateDelay(attempt))];
                    case 12:
                        _v.sent();
                        return [3 /*break*/, 2];
                    case 13: throw err_1;
                    case 14:
                        if (!(attempt < ((_t = (_s = this.config.retry) === null || _s === void 0 ? void 0 : _s.maxAttempts) !== null && _t !== void 0 ? _t : 3) && Date.now() < budgetDeadline)) return [3 /*break*/, 17];
                        return [4 /*yield*/, hooks.onRetry(attempt)];
                    case 15:
                        _v.sent();
                        return [4 /*yield*/, this.sleep(this.calculateDelay(attempt))];
                    case 16:
                        _v.sent();
                        return [3 /*break*/, 2];
                    case 17: throw new errors_1.ConnectorError({ message: String((_u = err_1 === null || err_1 === void 0 ? void 0 : err_1.message) !== null && _u !== void 0 ? _u : err_1), code: "NETWORK_ERROR", source: "transport", retryable: true });
                    case 18: return [3 /*break*/, 2];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    HttpClient.prototype.nodeHttpRequest = function (urlStr, opts) {
        return new Promise(function (resolve, reject) {
            var u = new node_url_1.URL(urlStr);
            var isHttps = u.protocol === "https:";
            var lib = isHttps ? node_https_1.default : node_http_1.default;
            var req = lib.request({
                protocol: u.protocol,
                hostname: u.hostname,
                port: u.port || (isHttps ? 443 : 80),
                path: "".concat(u.pathname).concat(u.search),
                method: opts.method,
                headers: opts.headers,
            }, function (res) {
                var chunks = [];
                res.on("data", function (c) { return chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)); });
                res.on("end", function () {
                    var text = Buffer.concat(chunks).toString("utf8");
                    resolve({ status: res.statusCode || 0, headers: res.headers, text: text });
                });
            });
            req.setTimeout(opts.timeoutMs, function () {
                req.destroy(new Error("Request timed out"));
            });
            req.on("error", function (err) { return reject(err); });
            if (opts.body)
                req.write(opts.body);
            req.end();
        });
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
//# sourceMappingURL=http-client.js.map