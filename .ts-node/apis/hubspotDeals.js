"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.HubSpotDealPipelineApi = exports.HubSpotDealLookupApi = exports.HubSpotDealsAnalyticsApi = void 0;
var __typia_transform__assertGuard = __importStar(require("typia/lib/internal/_assertGuard.js"));
var __typia_transform__httpQueryParseURLSearchParams = __importStar(require("typia/lib/internal/_httpQueryParseURLSearchParams.js"));
var __typia_transform__httpQueryReadString = __importStar(require("typia/lib/internal/_httpQueryReadString.js"));
var __typia_transform__httpQueryReadNumber = __importStar(require("typia/lib/internal/_httpQueryReadNumber.js"));
var __typia_transform__httpQueryReadBoolean = __importStar(require("typia/lib/internal/_httpQueryReadBoolean.js"));
var typia_1 = __importDefault(require("typia"));
var moose_lib_1 = require("@514labs/moose-lib");
exports.HubSpotDealsAnalyticsApi = new moose_lib_1.ConsumptionApi("hubspot-deals-analytics", function (params, utils) {
    var assertGuard = (function () { var _io0 = function (input) { return (undefined === input.groupBy || "stage" === input.groupBy || "pipeline" === input.groupBy || "month" === input.groupBy) && (undefined === input.limit || "number" === typeof input.limit) && (undefined === input.includeArchived || "boolean" === typeof input.includeArchived) && (undefined === input.currency || "string" === typeof input.currency); }; var _ao0 = function (input, _path, _exceptionable) {
        if (_exceptionable === void 0) { _exceptionable = true; }
        return (undefined === input.groupBy || "stage" === input.groupBy || "pipeline" === input.groupBy || "month" === input.groupBy || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".groupBy",
            expected: "(\"month\" | \"pipeline\" | \"stage\" | undefined)",
            value: input.groupBy
        }, _errorFactory)) && (undefined === input.limit || "number" === typeof input.limit || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".limit",
            expected: "(number | undefined)",
            value: input.limit
        }, _errorFactory)) && (undefined === input.includeArchived || "boolean" === typeof input.includeArchived || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".includeArchived",
            expected: "(boolean | undefined)",
            value: input.includeArchived
        }, _errorFactory)) && (undefined === input.currency || "string" === typeof input.currency || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".currency",
            expected: "(string | undefined)",
            value: input.currency
        }, _errorFactory));
    }; var __is = function (input) { return "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); }; var _errorFactory; var __assert = function (input, errorFactory) {
        if (false === __is(input)) {
            _errorFactory = errorFactory;
            (function (input, _path, _exceptionable) {
                if (_exceptionable === void 0) { _exceptionable = true; }
                return ("object" === typeof input && null !== input && false === Array.isArray(input) || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.http.createAssertQuery",
                    path: _path + "",
                    expected: "HubSpotDealsAnalyticsQueryParams",
                    value: input
                }, _errorFactory)) && _ao0(input, _path + "", true) || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.http.createAssertQuery",
                    path: _path + "",
                    expected: "HubSpotDealsAnalyticsQueryParams",
                    value: input
                }, _errorFactory);
            })(input, "$input", true);
        }
        return input;
    }; var __decode = function (input) {
        var _a, _b, _c, _d;
        input = __typia_transform__httpQueryParseURLSearchParams._httpQueryParseURLSearchParams(input);
        var output = {
            groupBy: (_a = __typia_transform__httpQueryReadString._httpQueryReadString(input.get("groupBy"))) !== null && _a !== void 0 ? _a : undefined,
            limit: (_b = __typia_transform__httpQueryReadNumber._httpQueryReadNumber(input.get("limit"))) !== null && _b !== void 0 ? _b : undefined,
            includeArchived: (_c = __typia_transform__httpQueryReadBoolean._httpQueryReadBoolean(input.get("includeArchived"))) !== null && _c !== void 0 ? _c : undefined,
            currency: (_d = __typia_transform__httpQueryReadString._httpQueryReadString(input.get("currency"))) !== null && _d !== void 0 ? _d : undefined
        };
        return output;
    }; return function (input, errorFactory) { return __assert(__decode(input), errorFactory); }; })();
    var searchParams = new URLSearchParams(params);
    var processedParams = assertGuard(searchParams);
    return (function (_a, _b) { return __awaiter(void 0, [_a, _b], void 0, function (_c, _d) {
        var query, data, result;
        var _e = _c.groupBy, groupBy = _e === void 0 ? "stage" : _e, _f = _c.limit, limit = _f === void 0 ? 10 : _f, _g = _c.includeArchived, includeArchived = _g === void 0 ? false : _g, currency = _c.currency;
        var client = _d.client, sql = _d.sql;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    if (groupBy === "pipeline") {
                        if (currency) {
                            query = sql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        SELECT \n          pipeline as groupField,\n          pipelineLabel as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", " AND currency = ", "\n        GROUP BY pipeline, pipelineLabel\n        ORDER BY totalAmount DESC\n        LIMIT ", "\n      "], ["\n        SELECT \n          pipeline as groupField,\n          pipelineLabel as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", " AND currency = ", "\n        GROUP BY pipeline, pipelineLabel\n        ORDER BY totalAmount DESC\n        LIMIT ", "\n      "])), includeArchived, currency, limit);
                        }
                        else {
                            query = sql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        SELECT \n          pipeline as groupField,\n          pipelineLabel as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", "\n        GROUP BY pipeline, pipelineLabel\n        ORDER BY totalAmount DESC\n        LIMIT ", "\n      "], ["\n        SELECT \n          pipeline as groupField,\n          pipelineLabel as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", "\n        GROUP BY pipeline, pipelineLabel\n        ORDER BY totalAmount DESC\n        LIMIT ", "\n      "])), includeArchived, limit);
                        }
                    }
                    else if (groupBy === "month") {
                        if (currency) {
                            query = sql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        SELECT \n          toYYYYMM(createdAt) as groupField,\n          formatDateTime(createdAt, '%Y-%m') as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", " AND currency = ", "\n        GROUP BY toYYYYMM(createdAt), formatDateTime(createdAt, '%Y-%m')\n        ORDER BY groupField DESC\n        LIMIT ", "\n      "], ["\n        SELECT \n          toYYYYMM(createdAt) as groupField,\n          formatDateTime(createdAt, '%Y-%m') as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", " AND currency = ", "\n        GROUP BY toYYYYMM(createdAt), formatDateTime(createdAt, '%Y-%m')\n        ORDER BY groupField DESC\n        LIMIT ", "\n      "])), includeArchived, currency, limit);
                        }
                        else {
                            query = sql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        SELECT \n          toYYYYMM(createdAt) as groupField,\n          formatDateTime(createdAt, '%Y-%m') as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", "\n        GROUP BY toYYYYMM(createdAt), formatDateTime(createdAt, '%Y-%m')\n        ORDER BY groupField DESC\n        LIMIT ", "\n      "], ["\n        SELECT \n          toYYYYMM(createdAt) as groupField,\n          formatDateTime(createdAt, '%Y-%m') as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", "\n        GROUP BY toYYYYMM(createdAt), formatDateTime(createdAt, '%Y-%m')\n        ORDER BY groupField DESC\n        LIMIT ", "\n      "])), includeArchived, limit);
                        }
                    }
                    else {
                        if (currency) {
                            query = sql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        SELECT \n          stage as groupField,\n          stageLabel as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", " AND currency = ", "\n        GROUP BY stage, stageLabel\n        ORDER BY totalAmount DESC\n        LIMIT ", "\n      "], ["\n        SELECT \n          stage as groupField,\n          stageLabel as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", " AND currency = ", "\n        GROUP BY stage, stageLabel\n        ORDER BY totalAmount DESC\n        LIMIT ", "\n      "])), includeArchived, currency, limit);
                        }
                        else {
                            query = sql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        SELECT \n          stage as groupField,\n          stageLabel as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", "\n        GROUP BY stage, stageLabel\n        ORDER BY totalAmount DESC\n        LIMIT ", "\n      "], ["\n        SELECT \n          stage as groupField,\n          stageLabel as groupLabel,\n          count(*) as dealCount,\n          sum(amount) as totalAmount,\n          avg(amount) as avgAmount,\n          sum(case when isWon then amount else 0 end) as wonAmount,\n          count(case when isWon then 1 end) as wonCount,\n          round(count(case when isWon then 1 end) * 100.0 / count(*), 2) as winRate,\n          avg(daysToClose) as avgDaysToClose\n        FROM HubSpotDeal FINAL\n        WHERE isArchived = ", "\n        GROUP BY stage, stageLabel\n        ORDER BY totalAmount DESC\n        LIMIT ", "\n      "])), includeArchived, limit);
                        }
                    }
                    return [4 /*yield*/, client.query.execute(query)];
                case 1:
                    data = _h.sent();
                    return [4 /*yield*/, data.json()];
                case 2:
                    result = _h.sent();
                    return [2 /*return*/, result];
            }
        });
    }); })(processedParams, utils);
}, {}, {
    version: "3.1",
    components: {
        schemas: {
            HubSpotDealsAnalyticsQueryParams: {
                type: "object",
                properties: {
                    groupBy: {
                        oneOf: [
                            {
                                "const": "stage"
                            },
                            {
                                "const": "pipeline"
                            },
                            {
                                "const": "month"
                            }
                        ]
                    },
                    limit: {
                        type: "number"
                    },
                    includeArchived: {
                        type: "boolean"
                    },
                    currency: {
                        type: "string"
                    }
                },
                required: []
            }
        }
    },
    schemas: [
        {
            $ref: "#/components/schemas/HubSpotDealsAnalyticsQueryParams"
        }
    ]
}, JSON.parse("[{\"name\":\"groupBy\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"limit\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"includeArchived\",\"data_type\":\"Boolean\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"currency\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]}]"), {
    version: "3.1",
    components: {
        schemas: {
            HubSpotDealAnalyticsData: {
                type: "object",
                properties: {
                    groupField: {
                        type: "string"
                    },
                    groupLabel: {
                        type: "string"
                    },
                    dealCount: {
                        type: "number"
                    },
                    totalAmount: {
                        type: "number"
                    },
                    avgAmount: {
                        type: "number"
                    },
                    wonAmount: {
                        type: "number"
                    },
                    wonCount: {
                        type: "number"
                    },
                    winRate: {
                        type: "number"
                    },
                    avgDaysToClose: {
                        type: "number"
                    }
                },
                required: [
                    "groupField",
                    "groupLabel",
                    "dealCount",
                    "totalAmount",
                    "avgAmount",
                    "wonAmount",
                    "wonCount",
                    "winRate"
                ]
            }
        }
    },
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/HubSpotDealAnalyticsData"
            }
        }
    ]
});
exports.HubSpotDealLookupApi = new moose_lib_1.ConsumptionApi("hubspot-deal-lookup", function (params, utils) {
    var assertGuard = (function () { var _io0 = function (input) { return (undefined === input.dealId || "string" === typeof input.dealId) && (undefined === input.dealName || "string" === typeof input.dealName) && (undefined === input.ownerId || "string" === typeof input.ownerId) && (undefined === input.stage || "string" === typeof input.stage) && (undefined === input.limit || "number" === typeof input.limit); }; var _ao0 = function (input, _path, _exceptionable) {
        if (_exceptionable === void 0) { _exceptionable = true; }
        return (undefined === input.dealId || "string" === typeof input.dealId || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".dealId",
            expected: "(string | undefined)",
            value: input.dealId
        }, _errorFactory)) && (undefined === input.dealName || "string" === typeof input.dealName || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".dealName",
            expected: "(string | undefined)",
            value: input.dealName
        }, _errorFactory)) && (undefined === input.ownerId || "string" === typeof input.ownerId || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".ownerId",
            expected: "(string | undefined)",
            value: input.ownerId
        }, _errorFactory)) && (undefined === input.stage || "string" === typeof input.stage || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".stage",
            expected: "(string | undefined)",
            value: input.stage
        }, _errorFactory)) && (undefined === input.limit || "number" === typeof input.limit || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".limit",
            expected: "(number | undefined)",
            value: input.limit
        }, _errorFactory));
    }; var __is = function (input) { return "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); }; var _errorFactory; var __assert = function (input, errorFactory) {
        if (false === __is(input)) {
            _errorFactory = errorFactory;
            (function (input, _path, _exceptionable) {
                if (_exceptionable === void 0) { _exceptionable = true; }
                return ("object" === typeof input && null !== input && false === Array.isArray(input) || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.http.createAssertQuery",
                    path: _path + "",
                    expected: "HubSpotDealLookupQueryParams",
                    value: input
                }, _errorFactory)) && _ao0(input, _path + "", true) || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.http.createAssertQuery",
                    path: _path + "",
                    expected: "HubSpotDealLookupQueryParams",
                    value: input
                }, _errorFactory);
            })(input, "$input", true);
        }
        return input;
    }; var __decode = function (input) {
        var _a, _b, _c, _d, _e;
        input = __typia_transform__httpQueryParseURLSearchParams._httpQueryParseURLSearchParams(input);
        var output = {
            dealId: (_a = __typia_transform__httpQueryReadString._httpQueryReadString(input.get("dealId"))) !== null && _a !== void 0 ? _a : undefined,
            dealName: (_b = __typia_transform__httpQueryReadString._httpQueryReadString(input.get("dealName"))) !== null && _b !== void 0 ? _b : undefined,
            ownerId: (_c = __typia_transform__httpQueryReadString._httpQueryReadString(input.get("ownerId"))) !== null && _c !== void 0 ? _c : undefined,
            stage: (_d = __typia_transform__httpQueryReadString._httpQueryReadString(input.get("stage"))) !== null && _d !== void 0 ? _d : undefined,
            limit: (_e = __typia_transform__httpQueryReadNumber._httpQueryReadNumber(input.get("limit"))) !== null && _e !== void 0 ? _e : undefined
        };
        return output;
    }; return function (input, errorFactory) { return __assert(__decode(input), errorFactory); }; })();
    var searchParams = new URLSearchParams(params);
    var processedParams = assertGuard(searchParams);
    return (function (_a, _b) { return __awaiter(void 0, [_a, _b], void 0, function (_c, _d) {
        var query, data, result;
        var dealId = _c.dealId, dealName = _c.dealName, ownerId = _c.ownerId, stage = _c.stage, _e = _c.limit, limit = _e === void 0 ? 20 : _e;
        var client = _d.client, sql = _d.sql;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (dealId) {
                        query = sql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE id = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "], ["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE id = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "])), dealId, limit);
                    }
                    else if (dealName && ownerId && stage) {
                        query = sql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE dealName ILIKE ", " AND ownerId = ", " AND stage = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "], ["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE dealName ILIKE ", " AND ownerId = ", " AND stage = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "])), "%".concat(dealName, "%"), ownerId, stage, limit);
                    }
                    else if (dealName && ownerId) {
                        query = sql(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE dealName ILIKE ", " AND ownerId = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "], ["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE dealName ILIKE ", " AND ownerId = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "])), "%".concat(dealName, "%"), ownerId, limit);
                    }
                    else if (dealName && stage) {
                        query = sql(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE dealName ILIKE ", " AND stage = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "], ["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE dealName ILIKE ", " AND stage = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "])), "%".concat(dealName, "%"), stage, limit);
                    }
                    else if (dealName) {
                        query = sql(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE dealName ILIKE ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "], ["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE dealName ILIKE ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "])), "%".concat(dealName, "%"), limit);
                    }
                    else if (ownerId && stage) {
                        query = sql(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE ownerId = ", " AND stage = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "], ["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE ownerId = ", " AND stage = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "])), ownerId, stage, limit);
                    }
                    else if (ownerId) {
                        query = sql(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE ownerId = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "], ["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE ownerId = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "])), ownerId, limit);
                    }
                    else if (stage) {
                        query = sql(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE stage = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "], ["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      WHERE stage = ", "\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "])), stage, limit);
                    }
                    else {
                        query = sql(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "], ["\n      SELECT \n        id, dealName, amount, currency, stage, stageLabel, pipeline, pipelineLabel,\n        closeDate, createdAt, ownerId, isWon, isClosed, contactCount,\n        associatedContacts, associatedCompanies\n      FROM HubSpotDeal FINAL\n      ORDER BY lastModifiedAt DESC\n      LIMIT ", "\n    "])), limit);
                    }
                    return [4 /*yield*/, client.query.execute(query)];
                case 1:
                    data = _f.sent();
                    return [4 /*yield*/, data.json()];
                case 2:
                    result = _f.sent();
                    return [2 /*return*/, result];
            }
        });
    }); })(processedParams, utils);
}, {}, {
    version: "3.1",
    components: {
        schemas: {
            HubSpotDealLookupQueryParams: {
                type: "object",
                properties: {
                    dealId: {
                        type: "string"
                    },
                    dealName: {
                        type: "string"
                    },
                    ownerId: {
                        type: "string"
                    },
                    stage: {
                        type: "string"
                    },
                    limit: {
                        type: "number"
                    }
                },
                required: []
            }
        }
    },
    schemas: [
        {
            $ref: "#/components/schemas/HubSpotDealLookupQueryParams"
        }
    ]
}, JSON.parse("[{\"name\":\"dealId\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"dealName\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"ownerId\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"stage\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"limit\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]}]"), {
    version: "3.1",
    components: {
        schemas: {
            HubSpotDealData: {
                type: "object",
                properties: {
                    id: {
                        type: "string"
                    },
                    dealName: {
                        type: "string"
                    },
                    amount: {
                        type: "number"
                    },
                    currency: {
                        type: "string"
                    },
                    stage: {
                        type: "string"
                    },
                    stageLabel: {
                        type: "string"
                    },
                    pipeline: {
                        type: "string"
                    },
                    pipelineLabel: {
                        type: "string"
                    },
                    closeDate: {
                        type: "string"
                    },
                    createdAt: {
                        type: "string"
                    },
                    ownerId: {
                        type: "string"
                    },
                    isWon: {
                        type: "boolean"
                    },
                    isClosed: {
                        type: "boolean"
                    },
                    contactCount: {
                        type: "number"
                    },
                    associatedContacts: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    associatedCompanies: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    }
                },
                required: [
                    "id",
                    "dealName",
                    "amount",
                    "currency",
                    "stage",
                    "stageLabel",
                    "pipeline",
                    "pipelineLabel",
                    "createdAt",
                    "isWon",
                    "isClosed",
                    "contactCount",
                    "associatedContacts",
                    "associatedCompanies"
                ]
            }
        }
    },
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/HubSpotDealData"
            }
        }
    ]
});
exports.HubSpotDealPipelineApi = new moose_lib_1.ConsumptionApi("hubspot-deal-pipeline", function (params, utils) {
    var assertGuard = (function () { var _io0 = function (input) { return (undefined === input.daysBack || "number" === typeof input.daysBack) && (undefined === input.limit || "number" === typeof input.limit); }; var _ao0 = function (input, _path, _exceptionable) {
        if (_exceptionable === void 0) { _exceptionable = true; }
        return (undefined === input.daysBack || "number" === typeof input.daysBack || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".daysBack",
            expected: "(number | undefined)",
            value: input.daysBack
        }, _errorFactory)) && (undefined === input.limit || "number" === typeof input.limit || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".limit",
            expected: "(number | undefined)",
            value: input.limit
        }, _errorFactory));
    }; var __is = function (input) { return "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); }; var _errorFactory; var __assert = function (input, errorFactory) {
        if (false === __is(input)) {
            _errorFactory = errorFactory;
            (function (input, _path, _exceptionable) {
                if (_exceptionable === void 0) { _exceptionable = true; }
                return ("object" === typeof input && null !== input && false === Array.isArray(input) || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.http.createAssertQuery",
                    path: _path + "",
                    expected: "__type",
                    value: input
                }, _errorFactory)) && _ao0(input, _path + "", true) || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.http.createAssertQuery",
                    path: _path + "",
                    expected: "__type",
                    value: input
                }, _errorFactory);
            })(input, "$input", true);
        }
        return input;
    }; var __decode = function (input) {
        var _a, _b;
        input = __typia_transform__httpQueryParseURLSearchParams._httpQueryParseURLSearchParams(input);
        var output = {
            daysBack: (_a = __typia_transform__httpQueryReadNumber._httpQueryReadNumber(input.get("daysBack"))) !== null && _a !== void 0 ? _a : undefined,
            limit: (_b = __typia_transform__httpQueryReadNumber._httpQueryReadNumber(input.get("limit"))) !== null && _b !== void 0 ? _b : undefined
        };
        return output;
    }; return function (input, errorFactory) { return __assert(__decode(input), errorFactory); }; })();
    var searchParams = new URLSearchParams(params);
    var processedParams = assertGuard(searchParams);
    return (function (_a, _b) { return __awaiter(void 0, [_a, _b], void 0, function (_c, _d) {
        var query, data, result;
        var _e = _c.daysBack, daysBack = _e === void 0 ? 30 : _e, _f = _c.limit, limit = _f === void 0 ? 10 : _f;
        var client = _d.client, sql = _d.sql;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    query = sql(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    SELECT \n      pipeline,\n      pipelineLabel,\n      count(*) as totalDeals,\n      sum(amount) as totalValue,\n      sum(case when isWon then 1 else 0 end) as wonDeals,\n      sum(case when isWon then amount else 0 end) as wonValue,\n      sum(case when isClosed and not isWon then 1 else 0 end) as lostDeals,\n      avg(case when isClosed then daysToClose end) as avgDaysToClose,\n      round(sum(case when isWon then 1 else 0 end) * 100.0 / count(*), 2) as conversionRate\n    FROM HubSpotDeal FINAL\n    WHERE createdAt >= subtractDays(now(), ", ")\n    GROUP BY pipeline, pipelineLabel\n    ORDER BY totalValue DESC\n    LIMIT ", "\n  "], ["\n    SELECT \n      pipeline,\n      pipelineLabel,\n      count(*) as totalDeals,\n      sum(amount) as totalValue,\n      sum(case when isWon then 1 else 0 end) as wonDeals,\n      sum(case when isWon then amount else 0 end) as wonValue,\n      sum(case when isClosed and not isWon then 1 else 0 end) as lostDeals,\n      avg(case when isClosed then daysToClose end) as avgDaysToClose,\n      round(sum(case when isWon then 1 else 0 end) * 100.0 / count(*), 2) as conversionRate\n    FROM HubSpotDeal FINAL\n    WHERE createdAt >= subtractDays(now(), ", ")\n    GROUP BY pipeline, pipelineLabel\n    ORDER BY totalValue DESC\n    LIMIT ", "\n  "])), daysBack, limit);
                    return [4 /*yield*/, client.query.execute(query)];
                case 1:
                    data = _g.sent();
                    return [4 /*yield*/, data.json()];
                case 2:
                    result = _g.sent();
                    return [2 /*return*/, result];
            }
        });
    }); })(processedParams, utils);
}, {}, {
    version: "3.1",
    components: {
        schemas: {}
    },
    schemas: [
        {
            type: "object",
            properties: {
                daysBack: {
                    type: "number"
                },
                limit: {
                    type: "number"
                }
            },
            required: []
        }
    ]
}, JSON.parse("[{\"name\":\"daysBack\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"limit\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]}]"), {
    version: "3.1",
    components: {
        schemas: {
            HubSpotPipelinePerformanceData: {
                type: "object",
                properties: {
                    pipeline: {
                        type: "string"
                    },
                    pipelineLabel: {
                        type: "string"
                    },
                    totalDeals: {
                        type: "number"
                    },
                    totalValue: {
                        type: "number"
                    },
                    wonDeals: {
                        type: "number"
                    },
                    wonValue: {
                        type: "number"
                    },
                    lostDeals: {
                        type: "number"
                    },
                    avgDaysToClose: {
                        type: "number"
                    },
                    conversionRate: {
                        type: "number"
                    }
                },
                required: [
                    "pipeline",
                    "pipelineLabel",
                    "totalDeals",
                    "totalValue",
                    "wonDeals",
                    "wonValue",
                    "lostDeals",
                    "avgDaysToClose",
                    "conversionRate"
                ]
            }
        }
    },
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/HubSpotPipelinePerformanceData"
            }
        }
    ]
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
//# sourceMappingURL=hubspotDeals.js.map