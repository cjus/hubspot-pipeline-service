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
Object.defineProperty(exports, "__esModule", { value: true });
exports.hubspotDataSyncWorkflow = exports.syncHubSpotDealsTask = void 0;
var moose_lib_1 = require("@514labs/moose-lib");
var src_1 = require("./hubspot/src");
function syncHubSpotDeals() {
    return __awaiter(this, void 0, void 0, function () {
        var token, connector, dealProperties, dealCount, successCount, errorCount, _a, _b, _c, deal, cleanProperties, _i, _d, _e, key, value, dealData, response, _f, _g, _h, err_1, e_1_1;
        var _j, e_1, _k, _l;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0:
                    token = process.env.HUBSPOT_TOKEN;
                    if (!token)
                        throw new Error("HUBSPOT_TOKEN environment variable is required");
                    console.log("🚀 Starting HubSpot deals sync...");
                    connector = (0, src_1.createHubSpotConnector)();
                    connector.initialize({
                        auth: { type: "bearer", bearer: { token: token } },
                        rateLimit: { requestsPerSecond: 10, burstCapacity: 10 },
                    });
                    return [4 /*yield*/, connector.connect()];
                case 1:
                    _m.sent();
                    dealProperties = [
                        "dealname", "amount", "dealstage", "pipeline", "dealtype",
                        "closedate", "createdate", "hs_lastmodifieddate", "hubspot_owner_id",
                        "deal_currency_code", "dealstage_label", "pipeline_label",
                        "hs_deal_stage_probability", "hs_forecast_amount", "hs_projected_amount",
                        "num_associated_contacts", "num_contacted_notes", "days_to_close"
                    ];
                    dealCount = 0, successCount = 0, errorCount = 0;
                    _m.label = 2;
                case 2:
                    _m.trys.push([2, 12, 13, 18]);
                    _a = true, _b = __asyncValues(connector.streamDeals({ properties: dealProperties, pageSize: 100 }));
                    _m.label = 3;
                case 3: return [4 /*yield*/, _b.next()];
                case 4:
                    if (!(_c = _m.sent(), _j = _c.done, !_j)) return [3 /*break*/, 11];
                    _l = _c.value;
                    _a = false;
                    deal = _l;
                    dealCount++;
                    _m.label = 5;
                case 5:
                    _m.trys.push([5, 9, , 10]);
                    cleanProperties = {};
                    for (_i = 0, _d = Object.entries(deal.properties || {}); _i < _d.length; _i++) {
                        _e = _d[_i], key = _e[0], value = _e[1];
                        if (value !== null && value !== undefined && value !== "")
                            cleanProperties[key] = String(value);
                    }
                    dealData = {
                        id: deal.id,
                        properties: cleanProperties,
                        createdAt: deal.createdAt,
                        updatedAt: deal.updatedAt,
                        archived: deal.archived || false,
                        associations: { contacts: [], companies: [] },
                    };
                    return [4 /*yield*/, fetch("http://localhost:4000/ingest/HubSpotDealRaw", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(dealData),
                        })];
                case 6:
                    response = _m.sent();
                    if (!!response.ok) return [3 /*break*/, 8];
                    _f = Error.bind;
                    _h = (_g = "Moose ingestion error ".concat(response.status, ": ")).concat;
                    return [4 /*yield*/, response.text()];
                case 7: throw new (_f.apply(Error, [void 0, _h.apply(_g, [_m.sent()])]))();
                case 8:
                    successCount++;
                    if (dealCount % 50 === 0)
                        console.log("\uD83D\uDCCA Processed ".concat(dealCount, " total (").concat(successCount, " ok, ").concat(errorCount, " errs)"));
                    return [3 /*break*/, 10];
                case 9:
                    err_1 = _m.sent();
                    errorCount++;
                    console.error("\u274C Error ingesting deal ".concat(dealCount, ":"), err_1);
                    return [3 /*break*/, 10];
                case 10:
                    _a = true;
                    return [3 /*break*/, 3];
                case 11: return [3 /*break*/, 18];
                case 12:
                    e_1_1 = _m.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 18];
                case 13:
                    _m.trys.push([13, , 16, 17]);
                    if (!(!_a && !_j && (_k = _b.return))) return [3 /*break*/, 15];
                    return [4 /*yield*/, _k.call(_b)];
                case 14:
                    _m.sent();
                    _m.label = 15;
                case 15: return [3 /*break*/, 17];
                case 16:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 17: return [7 /*endfinally*/];
                case 18: return [4 /*yield*/, connector.disconnect()];
                case 19:
                    _m.sent();
                    console.log("✅ HubSpot sync completed!", { dealCount: dealCount, successCount: successCount, errorCount: errorCount });
                    return [2 /*return*/];
            }
        });
    });
}
exports.syncHubSpotDealsTask = new moose_lib_1.Task("syncHubSpotDeals", {
    run: function () { return __awaiter(void 0, void 0, void 0, function () {
        var startTime, duration;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("🔄 Starting HubSpot deals sync workflow with connector...");
                    startTime = Date.now();
                    return [4 /*yield*/, syncHubSpotDeals()];
                case 1:
                    _a.sent();
                    duration = Math.round((Date.now() - startTime) / 1000);
                    console.log("\u2705 HubSpot deals sync completed successfully in ".concat(duration, "s"));
                    return [2 /*return*/];
            }
        });
    }); },
    retries: 3,
    timeout: "1m",
});
exports.hubspotDataSyncWorkflow = new moose_lib_1.Workflow("hubspotDataSync", {
    startingTask: exports.syncHubSpotDealsTask,
    retries: 2,
    timeout: "1m",
    // schedule: "@every 30s",
});
//# sourceMappingURL=hubspotWorkflow.js.map