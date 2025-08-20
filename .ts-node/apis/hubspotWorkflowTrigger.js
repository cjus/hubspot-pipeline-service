"use strict";
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
exports.HubSpotWorkflowTriggerApi = void 0;
var __typia_transform__assertGuard = __importStar(require("typia/lib/internal/_assertGuard.js"));
var __typia_transform__httpQueryParseURLSearchParams = __importStar(require("typia/lib/internal/_httpQueryParseURLSearchParams.js"));
var __typia_transform__httpQueryReadString = __importStar(require("typia/lib/internal/_httpQueryReadString.js"));
var __typia_transform__httpQueryReadBoolean = __importStar(require("typia/lib/internal/_httpQueryReadBoolean.js"));
var typia_1 = __importDefault(require("typia"));
var moose_lib_1 = require("@514labs/moose-lib");
exports.HubSpotWorkflowTriggerApi = new moose_lib_1.ConsumptionApi("hubspot-workflow-trigger", function (params, utils) {
    var assertGuard = (function () { var _io0 = function (input) { return (undefined === input.workflowName || "string" === typeof input.workflowName) && (undefined === input.force || "boolean" === typeof input.force); }; var _ao0 = function (input, _path, _exceptionable) {
        if (_exceptionable === void 0) { _exceptionable = true; }
        return (undefined === input.workflowName || "string" === typeof input.workflowName || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".workflowName",
            expected: "(string | undefined)",
            value: input.workflowName
        }, _errorFactory)) && (undefined === input.force || "boolean" === typeof input.force || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.http.createAssertQuery",
            path: _path + ".force",
            expected: "(boolean | undefined)",
            value: input.force
        }, _errorFactory));
    }; var __is = function (input) { return "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); }; var _errorFactory; var __assert = function (input, errorFactory) {
        if (false === __is(input)) {
            _errorFactory = errorFactory;
            (function (input, _path, _exceptionable) {
                if (_exceptionable === void 0) { _exceptionable = true; }
                return ("object" === typeof input && null !== input && false === Array.isArray(input) || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.http.createAssertQuery",
                    path: _path + "",
                    expected: "WorkflowTriggerParams",
                    value: input
                }, _errorFactory)) && _ao0(input, _path + "", true) || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.http.createAssertQuery",
                    path: _path + "",
                    expected: "WorkflowTriggerParams",
                    value: input
                }, _errorFactory);
            })(input, "$input", true);
        }
        return input;
    }; var __decode = function (input) {
        var _a, _b;
        input = __typia_transform__httpQueryParseURLSearchParams._httpQueryParseURLSearchParams(input);
        var output = {
            workflowName: (_a = __typia_transform__httpQueryReadString._httpQueryReadString(input.get("workflowName"))) !== null && _a !== void 0 ? _a : undefined,
            force: (_b = __typia_transform__httpQueryReadBoolean._httpQueryReadBoolean(input.get("force"))) !== null && _b !== void 0 ? _b : undefined
        };
        return output;
    }; return function (input, errorFactory) { return __assert(__decode(input), errorFactory); }; })();
    var searchParams = new URLSearchParams(params);
    var processedParams = assertGuard(searchParams);
    return (function (_a, _b) { return __awaiter(void 0, [_a, _b], void 0, function (_c, _d) {
        var startTime, executionId, message;
        var _e = _c.workflowName, workflowName = _e === void 0 ? "hubspotDataSync" : _e, _f = _c.force, force = _f === void 0 ? false : _f;
        var client = _d.client;
        return __generator(this, function (_g) {
            startTime = new Date().toISOString();
            executionId = "".concat(workflowName, "-").concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9));
            try {
                if (!process.env.HUBSPOT_TOKEN) {
                    throw new Error("HUBSPOT_TOKEN environment variable is required for workflow execution");
                }
                if (workflowName !== "hubspotDataSync") {
                    throw new Error("Unknown workflow: ".concat(workflowName, ". Available workflows: hubspotDataSync"));
                }
                void client.workflow.execute(workflowName, {});
                return [2 /*return*/, {
                        success: true,
                        workflowName: workflowName,
                        executionId: executionId,
                        status: "started",
                        message: "Workflow ".concat(workflowName, " triggered successfully"),
                        startTime: startTime,
                    }];
            }
            catch (error) {
                message = error instanceof Error ? error.message : "Unknown error";
                return [2 /*return*/, {
                        success: false,
                        workflowName: workflowName,
                        executionId: executionId,
                        status: "failed",
                        message: "Failed to trigger workflow: ".concat(message),
                        startTime: startTime,
                        error: message,
                    }];
            }
            return [2 /*return*/];
        });
    }); })(processedParams, utils);
}, {}, {
    version: "3.1",
    components: {
        schemas: {
            WorkflowTriggerParams: {
                type: "object",
                properties: {
                    workflowName: {
                        type: "string"
                    },
                    force: {
                        type: "boolean"
                    }
                },
                required: []
            }
        }
    },
    schemas: [
        {
            $ref: "#/components/schemas/WorkflowTriggerParams"
        }
    ]
}, JSON.parse("[{\"name\":\"workflowName\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"force\",\"data_type\":\"Boolean\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]}]"), {
    version: "3.1",
    components: {
        schemas: {
            WorkflowExecutionResponse: {
                type: "object",
                properties: {
                    success: {
                        type: "boolean"
                    },
                    workflowName: {
                        type: "string"
                    },
                    executionId: {
                        type: "string"
                    },
                    status: {
                        oneOf: [
                            {
                                "const": "started"
                            },
                            {
                                "const": "failed"
                            }
                        ]
                    },
                    message: {
                        type: "string"
                    },
                    startTime: {
                        type: "string"
                    },
                    error: {
                        type: "string"
                    }
                },
                required: [
                    "success",
                    "workflowName",
                    "executionId",
                    "status",
                    "message",
                    "startTime"
                ]
            }
        }
    },
    schemas: [
        {
            $ref: "#/components/schemas/WorkflowExecutionResponse"
        }
    ]
});
//# sourceMappingURL=hubspotWorkflowTrigger.js.map