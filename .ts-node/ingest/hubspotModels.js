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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubSpotDealPipeline = exports.HubSpotDealRawPipeline = exports.hubspotDeadLetterTable = void 0;
var __typia_transform__accessExpressionAsString = __importStar(require("typia/lib/internal/_accessExpressionAsString.js"));
var __typia_transform__validateReport = __importStar(require("typia/lib/internal/_validateReport.js"));
var __typia_transform__createStandardSchema = __importStar(require("typia/lib/internal/_createStandardSchema.js"));
var __typia_transform__assertGuard = __importStar(require("typia/lib/internal/_assertGuard.js"));
var typia_1 = __importDefault(require("typia"));
var moose_lib_1 = require("@514labs/moose-lib");
exports.hubspotDeadLetterTable = new moose_lib_1.OlapTable("HubSpotDealDeadLetter", {
    orderByFields: ["failedAt"],
}, {
    version: "3.1",
    components: {
        schemas: {
            DeadLetterModel: {
                type: "object",
                properties: {
                    originalRecord: {
                        $ref: "#/components/schemas/Recordstringany",
                        description: "The original record that failed processing"
                    },
                    errorMessage: {
                        type: "string",
                        description: "Human-readable error message describing the failure"
                    },
                    errorType: {
                        type: "string",
                        description: "Classification of the error type (e.g., \"ValidationError\", \"TransformError\")"
                    },
                    failedAt: {
                        type: "string",
                        description: "Timestamp when the failure occurred",
                        format: "date-time"
                    },
                    source: {
                        oneOf: [
                            {
                                "const": "api"
                            },
                            {
                                "const": "transform"
                            },
                            {
                                "const": "table"
                            }
                        ],
                        description: "The source component where the failure occurred"
                    }
                },
                required: [
                    "originalRecord",
                    "errorMessage",
                    "errorType",
                    "failedAt",
                    "source"
                ],
                description: "Base model for dead letter queue entries.\nContains the original failed record along with error information."
            },
            Recordstringany: {
                type: "object",
                properties: {},
                required: [],
                description: "Construct a type with a set of properties K of type T",
                additionalProperties: {}
            }
        }
    },
    schemas: [
        {
            $ref: "#/components/schemas/DeadLetterModel"
        }
    ]
}, JSON.parse("[{\"name\":\"originalRecord\",\"data_type\":\"Json\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"errorMessage\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"errorType\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"failedAt\",\"data_type\":\"DateTime\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"source\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]}]"), {
    validate: function (data) {
        var result = (function () { var _io0 = function (input) { return "object" === typeof input.originalRecord && null !== input.originalRecord && false === Array.isArray(input.originalRecord) && _io1(input.originalRecord) && "string" === typeof input.errorMessage && "string" === typeof input.errorType && input.failedAt instanceof Date && ("api" === input.source || "transform" === input.source || "table" === input.source); }; var _io1 = function (input) { return Object.keys(input).every(function (key) {
            var value = input[key];
            if (undefined === value)
                return true;
            return true;
        }); }; var _vo0 = function (input, _path, _exceptionable) {
            if (_exceptionable === void 0) { _exceptionable = true; }
            return [("object" === typeof input.originalRecord && null !== input.originalRecord && false === Array.isArray(input.originalRecord) || _report(_exceptionable, {
                    path: _path + ".originalRecord",
                    expected: "Record<string, any>",
                    value: input.originalRecord
                })) && _vo1(input.originalRecord, _path + ".originalRecord", true && _exceptionable) || _report(_exceptionable, {
                    path: _path + ".originalRecord",
                    expected: "Record<string, any>",
                    value: input.originalRecord
                }), "string" === typeof input.errorMessage || _report(_exceptionable, {
                    path: _path + ".errorMessage",
                    expected: "string",
                    value: input.errorMessage
                }), "string" === typeof input.errorType || _report(_exceptionable, {
                    path: _path + ".errorType",
                    expected: "string",
                    value: input.errorType
                }), input.failedAt instanceof Date || _report(_exceptionable, {
                    path: _path + ".failedAt",
                    expected: "Date",
                    value: input.failedAt
                }), "api" === input.source || "transform" === input.source || "table" === input.source || _report(_exceptionable, {
                    path: _path + ".source",
                    expected: "(\"api\" | \"table\" | \"transform\")",
                    value: input.source
                })].every(function (flag) { return flag; });
        }; var _vo1 = function (input, _path, _exceptionable) {
            if (_exceptionable === void 0) { _exceptionable = true; }
            return [false === _exceptionable || Object.keys(input).map(function (key) {
                    var value = input[key];
                    if (undefined === value)
                        return true;
                    return true;
                }).every(function (flag) { return flag; })].every(function (flag) { return flag; });
        }; var __is = function (input) { return "object" === typeof input && null !== input && _io0(input); }; var errors; var _report; return __typia_transform__createStandardSchema._createStandardSchema(function (input) {
            if (false === __is(input)) {
                errors = [];
                _report = __typia_transform__validateReport._validateReport(errors);
                (function (input, _path, _exceptionable) {
                    if (_exceptionable === void 0) { _exceptionable = true; }
                    return ("object" === typeof input && null !== input || _report(true, {
                        path: _path + "",
                        expected: "DeadLetterModel",
                        value: input
                    })) && _vo0(input, _path + "", true) || _report(true, {
                        path: _path + "",
                        expected: "DeadLetterModel",
                        value: input
                    });
                })(input, "$input", true);
                var success = 0 === errors.length;
                return success ? {
                    success: success,
                    data: input
                } : {
                    success: success,
                    errors: errors,
                    data: input
                };
            }
            return {
                success: true,
                data: input
            };
        }); })()(data);
        return {
            success: result.success,
            data: result.success ? result.data : undefined,
            errors: result.success ? undefined : result.errors
        };
    },
    assert: (function () { var _io0 = function (input) { return "object" === typeof input.originalRecord && null !== input.originalRecord && false === Array.isArray(input.originalRecord) && _io1(input.originalRecord) && "string" === typeof input.errorMessage && "string" === typeof input.errorType && input.failedAt instanceof Date && ("api" === input.source || "transform" === input.source || "table" === input.source); }; var _io1 = function (input) { return Object.keys(input).every(function (key) {
        var value = input[key];
        if (undefined === value)
            return true;
        return true;
    }); }; var _ao0 = function (input, _path, _exceptionable) {
        if (_exceptionable === void 0) { _exceptionable = true; }
        return (("object" === typeof input.originalRecord && null !== input.originalRecord && false === Array.isArray(input.originalRecord) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".originalRecord",
            expected: "Record<string, any>",
            value: input.originalRecord
        }, _errorFactory)) && _ao1(input.originalRecord, _path + ".originalRecord", true && _exceptionable) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".originalRecord",
            expected: "Record<string, any>",
            value: input.originalRecord
        }, _errorFactory)) && ("string" === typeof input.errorMessage || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".errorMessage",
            expected: "string",
            value: input.errorMessage
        }, _errorFactory)) && ("string" === typeof input.errorType || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".errorType",
            expected: "string",
            value: input.errorType
        }, _errorFactory)) && (input.failedAt instanceof Date || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".failedAt",
            expected: "Date",
            value: input.failedAt
        }, _errorFactory)) && ("api" === input.source || "transform" === input.source || "table" === input.source || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".source",
            expected: "(\"api\" | \"table\" | \"transform\")",
            value: input.source
        }, _errorFactory));
    }; var _ao1 = function (input, _path, _exceptionable) {
        if (_exceptionable === void 0) { _exceptionable = true; }
        return false === _exceptionable || Object.keys(input).every(function (key) {
            var value = input[key];
            if (undefined === value)
                return true;
            return true;
        });
    }; var __is = function (input) { return "object" === typeof input && null !== input && _io0(input); }; var _errorFactory; return function (input, errorFactory) {
        if (false === __is(input)) {
            _errorFactory = errorFactory;
            (function (input, _path, _exceptionable) {
                if (_exceptionable === void 0) { _exceptionable = true; }
                return ("object" === typeof input && null !== input || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.createAssert",
                    path: _path + "",
                    expected: "DeadLetterModel",
                    value: input
                }, _errorFactory)) && _ao0(input, _path + "", true) || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.createAssert",
                    path: _path + "",
                    expected: "DeadLetterModel",
                    value: input
                }, _errorFactory);
            })(input, "$input", true);
        }
        return input;
    }; })(),
    is: (function () { var _io0 = function (input) { return "object" === typeof input.originalRecord && null !== input.originalRecord && false === Array.isArray(input.originalRecord) && _io1(input.originalRecord) && "string" === typeof input.errorMessage && "string" === typeof input.errorType && input.failedAt instanceof Date && ("api" === input.source || "transform" === input.source || "table" === input.source); }; var _io1 = function (input) { return Object.keys(input).every(function (key) {
        var value = input[key];
        if (undefined === value)
            return true;
        return true;
    }); }; return function (input) { return "object" === typeof input && null !== input && _io0(input); }; })()
});
/** Raw HubSpot deal ingestion */
exports.HubSpotDealRawPipeline = new moose_lib_1.IngestPipeline("HubSpotDealRaw", {
    table: false,
    stream: true,
    ingest: true,
    deadLetterQueue: { destination: exports.hubspotDeadLetterTable },
}, {
    version: "3.1",
    components: {
        schemas: {
            HubSpotDealRaw: {
                type: "object",
                properties: {
                    id: {
                        type: "string"
                    },
                    properties: {
                        $ref: "#/components/schemas/HubSpotDealProperties"
                    },
                    createdAt: {
                        type: "string"
                    },
                    updatedAt: {
                        type: "string"
                    },
                    archived: {
                        type: "boolean"
                    },
                    associations: {
                        $ref: "#/components/schemas/HubSpotDealAssociations"
                    }
                },
                required: [
                    "id",
                    "properties",
                    "createdAt",
                    "updatedAt",
                    "archived",
                    "associations"
                ],
                description: "Raw HubSpot deal data directly from API"
            },
            HubSpotDealProperties: {
                type: "object",
                properties: {},
                required: [],
                additionalProperties: {
                    oneOf: [
                        {
                            type: "null"
                        },
                        {
                            type: "string"
                        }
                    ]
                }
            },
            HubSpotDealAssociations: {
                type: "object",
                properties: {
                    contacts: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    companies: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    }
                },
                required: [
                    "contacts",
                    "companies"
                ]
            }
        }
    },
    schemas: [
        {
            $ref: "#/components/schemas/HubSpotDealRaw"
        }
    ]
}, JSON.parse("[{\"name\":\"id\",\"data_type\":\"String\",\"primary_key\":true,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"properties\",\"data_type\":{\"keyType\":\"String\",\"valueType\":\"String\"},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"createdAt\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"updatedAt\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"archived\",\"data_type\":\"Boolean\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"associations\",\"data_type\":{\"name\":\"HubSpotDealAssociations\",\"columns\":[{\"name\":\"contacts\",\"data_type\":{\"elementNullable\":false,\"elementType\":\"String\"},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"companies\",\"data_type\":{\"elementNullable\":false,\"elementType\":\"String\"},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]}],\"jwt\":false},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]}]"), {
    validate: function (data) {
        var result = (function () { var _io0 = function (input) { return "string" === typeof input.id && ("object" === typeof input.properties && null !== input.properties && false === Array.isArray(input.properties) && _io1(input.properties)) && "string" === typeof input.createdAt && "string" === typeof input.updatedAt && "boolean" === typeof input.archived && ("object" === typeof input.associations && null !== input.associations && _io2(input.associations)); }; var _io1 = function (input) { return Object.keys(input).every(function (key) {
            var value = input[key];
            if (undefined === value)
                return true;
            return null === value || undefined === value || "string" === typeof value;
        }); }; var _io2 = function (input) { return Array.isArray(input.contacts) && input.contacts.every(function (elem) { return "string" === typeof elem; }) && (Array.isArray(input.companies) && input.companies.every(function (elem) { return "string" === typeof elem; })); }; var _vo0 = function (input, _path, _exceptionable) {
            if (_exceptionable === void 0) { _exceptionable = true; }
            return ["string" === typeof input.id || _report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id
                }), ("object" === typeof input.properties && null !== input.properties && false === Array.isArray(input.properties) || _report(_exceptionable, {
                    path: _path + ".properties",
                    expected: "HubSpotDealProperties",
                    value: input.properties
                })) && _vo1(input.properties, _path + ".properties", true && _exceptionable) || _report(_exceptionable, {
                    path: _path + ".properties",
                    expected: "HubSpotDealProperties",
                    value: input.properties
                }), "string" === typeof input.createdAt || _report(_exceptionable, {
                    path: _path + ".createdAt",
                    expected: "string",
                    value: input.createdAt
                }), "string" === typeof input.updatedAt || _report(_exceptionable, {
                    path: _path + ".updatedAt",
                    expected: "string",
                    value: input.updatedAt
                }), "boolean" === typeof input.archived || _report(_exceptionable, {
                    path: _path + ".archived",
                    expected: "boolean",
                    value: input.archived
                }), ("object" === typeof input.associations && null !== input.associations || _report(_exceptionable, {
                    path: _path + ".associations",
                    expected: "HubSpotDealAssociations",
                    value: input.associations
                })) && _vo2(input.associations, _path + ".associations", true && _exceptionable) || _report(_exceptionable, {
                    path: _path + ".associations",
                    expected: "HubSpotDealAssociations",
                    value: input.associations
                })].every(function (flag) { return flag; });
        }; var _vo1 = function (input, _path, _exceptionable) {
            if (_exceptionable === void 0) { _exceptionable = true; }
            return [false === _exceptionable || Object.keys(input).map(function (key) {
                    var value = input[key];
                    if (undefined === value)
                        return true;
                    return null === value || undefined === value || "string" === typeof value || _report(_exceptionable, {
                        path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
                        expected: "(null | string | undefined)",
                        value: value
                    });
                }).every(function (flag) { return flag; })].every(function (flag) { return flag; });
        }; var _vo2 = function (input, _path, _exceptionable) {
            if (_exceptionable === void 0) { _exceptionable = true; }
            return [(Array.isArray(input.contacts) || _report(_exceptionable, {
                    path: _path + ".contacts",
                    expected: "Array<string>",
                    value: input.contacts
                })) && input.contacts.map(function (elem, _index3) { return "string" === typeof elem || _report(_exceptionable, {
                    path: _path + ".contacts[" + _index3 + "]",
                    expected: "string",
                    value: elem
                }); }).every(function (flag) { return flag; }) || _report(_exceptionable, {
                    path: _path + ".contacts",
                    expected: "Array<string>",
                    value: input.contacts
                }), (Array.isArray(input.companies) || _report(_exceptionable, {
                    path: _path + ".companies",
                    expected: "Array<string>",
                    value: input.companies
                })) && input.companies.map(function (elem, _index4) { return "string" === typeof elem || _report(_exceptionable, {
                    path: _path + ".companies[" + _index4 + "]",
                    expected: "string",
                    value: elem
                }); }).every(function (flag) { return flag; }) || _report(_exceptionable, {
                    path: _path + ".companies",
                    expected: "Array<string>",
                    value: input.companies
                })].every(function (flag) { return flag; });
        }; var __is = function (input) { return "object" === typeof input && null !== input && _io0(input); }; var errors; var _report; return __typia_transform__createStandardSchema._createStandardSchema(function (input) {
            if (false === __is(input)) {
                errors = [];
                _report = __typia_transform__validateReport._validateReport(errors);
                (function (input, _path, _exceptionable) {
                    if (_exceptionable === void 0) { _exceptionable = true; }
                    return ("object" === typeof input && null !== input || _report(true, {
                        path: _path + "",
                        expected: "HubSpotDealRaw",
                        value: input
                    })) && _vo0(input, _path + "", true) || _report(true, {
                        path: _path + "",
                        expected: "HubSpotDealRaw",
                        value: input
                    });
                })(input, "$input", true);
                var success = 0 === errors.length;
                return success ? {
                    success: success,
                    data: input
                } : {
                    success: success,
                    errors: errors,
                    data: input
                };
            }
            return {
                success: true,
                data: input
            };
        }); })()(data);
        return {
            success: result.success,
            data: result.success ? result.data : undefined,
            errors: result.success ? undefined : result.errors
        };
    },
    assert: (function () { var _io0 = function (input) { return "string" === typeof input.id && ("object" === typeof input.properties && null !== input.properties && false === Array.isArray(input.properties) && _io1(input.properties)) && "string" === typeof input.createdAt && "string" === typeof input.updatedAt && "boolean" === typeof input.archived && ("object" === typeof input.associations && null !== input.associations && _io2(input.associations)); }; var _io1 = function (input) { return Object.keys(input).every(function (key) {
        var value = input[key];
        if (undefined === value)
            return true;
        return null === value || undefined === value || "string" === typeof value;
    }); }; var _io2 = function (input) { return Array.isArray(input.contacts) && input.contacts.every(function (elem) { return "string" === typeof elem; }) && (Array.isArray(input.companies) && input.companies.every(function (elem) { return "string" === typeof elem; })); }; var _ao0 = function (input, _path, _exceptionable) {
        if (_exceptionable === void 0) { _exceptionable = true; }
        return ("string" === typeof input.id || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".id",
            expected: "string",
            value: input.id
        }, _errorFactory)) && (("object" === typeof input.properties && null !== input.properties && false === Array.isArray(input.properties) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".properties",
            expected: "HubSpotDealProperties",
            value: input.properties
        }, _errorFactory)) && _ao1(input.properties, _path + ".properties", true && _exceptionable) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".properties",
            expected: "HubSpotDealProperties",
            value: input.properties
        }, _errorFactory)) && ("string" === typeof input.createdAt || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".createdAt",
            expected: "string",
            value: input.createdAt
        }, _errorFactory)) && ("string" === typeof input.updatedAt || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".updatedAt",
            expected: "string",
            value: input.updatedAt
        }, _errorFactory)) && ("boolean" === typeof input.archived || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".archived",
            expected: "boolean",
            value: input.archived
        }, _errorFactory)) && (("object" === typeof input.associations && null !== input.associations || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".associations",
            expected: "HubSpotDealAssociations",
            value: input.associations
        }, _errorFactory)) && _ao2(input.associations, _path + ".associations", true && _exceptionable) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".associations",
            expected: "HubSpotDealAssociations",
            value: input.associations
        }, _errorFactory));
    }; var _ao1 = function (input, _path, _exceptionable) {
        if (_exceptionable === void 0) { _exceptionable = true; }
        return false === _exceptionable || Object.keys(input).every(function (key) {
            var value = input[key];
            if (undefined === value)
                return true;
            return null === value || undefined === value || "string" === typeof value || __typia_transform__assertGuard._assertGuard(_exceptionable, {
                method: "____moose____typia.createAssert",
                path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
                expected: "(null | string | undefined)",
                value: value
            }, _errorFactory);
        });
    }; var _ao2 = function (input, _path, _exceptionable) {
        if (_exceptionable === void 0) { _exceptionable = true; }
        return ((Array.isArray(input.contacts) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".contacts",
            expected: "Array<string>",
            value: input.contacts
        }, _errorFactory)) && input.contacts.every(function (elem, _index3) { return "string" === typeof elem || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".contacts[" + _index3 + "]",
            expected: "string",
            value: elem
        }, _errorFactory); }) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".contacts",
            expected: "Array<string>",
            value: input.contacts
        }, _errorFactory)) && ((Array.isArray(input.companies) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".companies",
            expected: "Array<string>",
            value: input.companies
        }, _errorFactory)) && input.companies.every(function (elem, _index4) { return "string" === typeof elem || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".companies[" + _index4 + "]",
            expected: "string",
            value: elem
        }, _errorFactory); }) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".companies",
            expected: "Array<string>",
            value: input.companies
        }, _errorFactory));
    }; var __is = function (input) { return "object" === typeof input && null !== input && _io0(input); }; var _errorFactory; return function (input, errorFactory) {
        if (false === __is(input)) {
            _errorFactory = errorFactory;
            (function (input, _path, _exceptionable) {
                if (_exceptionable === void 0) { _exceptionable = true; }
                return ("object" === typeof input && null !== input || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.createAssert",
                    path: _path + "",
                    expected: "HubSpotDealRaw",
                    value: input
                }, _errorFactory)) && _ao0(input, _path + "", true) || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.createAssert",
                    path: _path + "",
                    expected: "HubSpotDealRaw",
                    value: input
                }, _errorFactory);
            })(input, "$input", true);
        }
        return input;
    }; })(),
    is: (function () { var _io0 = function (input) { return "string" === typeof input.id && ("object" === typeof input.properties && null !== input.properties && false === Array.isArray(input.properties) && _io1(input.properties)) && "string" === typeof input.createdAt && "string" === typeof input.updatedAt && "boolean" === typeof input.archived && ("object" === typeof input.associations && null !== input.associations && _io2(input.associations)); }; var _io1 = function (input) { return Object.keys(input).every(function (key) {
        var value = input[key];
        if (undefined === value)
            return true;
        return null === value || undefined === value || "string" === typeof value;
    }); }; var _io2 = function (input) { return Array.isArray(input.contacts) && input.contacts.every(function (elem) { return "string" === typeof elem; }) && (Array.isArray(input.companies) && input.companies.every(function (elem) { return "string" === typeof elem; })); }; return function (input) { return "object" === typeof input && null !== input && _io0(input); }; })()
});
/** Processed HubSpot deal storage */
exports.HubSpotDealPipeline = new moose_lib_1.IngestPipeline("HubSpotDeal", {
    table: { engine: moose_lib_1.ClickHouseEngines.MergeTree, orderByFields: ["id"] }, // Store processed data in ClickHouse
    stream: true, // Buffer processed records
    ingest: false, // No direct API; only derived from raw data
    deadLetterQueue: {
        destination: exports.hubspotDeadLetterTable,
    },
}, {
    version: "3.1",
    components: {
        schemas: {
            HubSpotDeal: {
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
                    dealType: {
                        type: "string"
                    },
                    closeDate: {
                        type: "string",
                        format: "date-time"
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time"
                    },
                    lastModifiedAt: {
                        type: "string",
                        format: "date-time"
                    },
                    ownerId: {
                        type: "string"
                    },
                    stageProbability: {
                        type: "number"
                    },
                    forecastAmount: {
                        type: "number"
                    },
                    projectedAmount: {
                        type: "number"
                    },
                    daysToClose: {
                        type: "number"
                    },
                    isWon: {
                        type: "boolean"
                    },
                    isClosed: {
                        type: "boolean"
                    },
                    isArchived: {
                        type: "boolean"
                    },
                    contactCount: {
                        type: "number"
                    },
                    noteCount: {
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
                    },
                    customProperties: {
                        $ref: "#/components/schemas/Recordstringany"
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
                    "lastModifiedAt",
                    "stageProbability",
                    "forecastAmount",
                    "projectedAmount",
                    "isWon",
                    "isClosed",
                    "isArchived",
                    "contactCount",
                    "noteCount",
                    "associatedContacts",
                    "associatedCompanies",
                    "customProperties"
                ],
                description: "Processed/normalized HubSpot deal data"
            },
            Recordstringany: {
                type: "object",
                properties: {},
                required: [],
                description: "Construct a type with a set of properties K of type T",
                additionalProperties: {}
            }
        }
    },
    schemas: [
        {
            $ref: "#/components/schemas/HubSpotDeal"
        }
    ]
}, JSON.parse("[{\"name\":\"id\",\"data_type\":\"String\",\"primary_key\":true,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"dealName\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"amount\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"currency\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"stage\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"stageLabel\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"pipeline\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"pipelineLabel\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"dealType\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"closeDate\",\"data_type\":\"DateTime\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"createdAt\",\"data_type\":\"DateTime\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"lastModifiedAt\",\"data_type\":\"DateTime\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"ownerId\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"stageProbability\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"forecastAmount\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"projectedAmount\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"daysToClose\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"isWon\",\"data_type\":\"Boolean\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"isClosed\",\"data_type\":\"Boolean\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"isArchived\",\"data_type\":\"Boolean\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"contactCount\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"noteCount\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"associatedContacts\",\"data_type\":{\"elementNullable\":false,\"elementType\":\"String\"},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"associatedCompanies\",\"data_type\":{\"elementNullable\":false,\"elementType\":\"String\"},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"customProperties\",\"data_type\":\"Json\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]}]"), {
    validate: function (data) {
        var result = (function () { var _io0 = function (input) { return "string" === typeof input.id && "string" === typeof input.dealName && "number" === typeof input.amount && "string" === typeof input.currency && "string" === typeof input.stage && "string" === typeof input.stageLabel && "string" === typeof input.pipeline && "string" === typeof input.pipelineLabel && (undefined === input.dealType || "string" === typeof input.dealType) && (undefined === input.closeDate || input.closeDate instanceof Date) && input.createdAt instanceof Date && input.lastModifiedAt instanceof Date && (undefined === input.ownerId || "string" === typeof input.ownerId) && "number" === typeof input.stageProbability && "number" === typeof input.forecastAmount && "number" === typeof input.projectedAmount && (undefined === input.daysToClose || "number" === typeof input.daysToClose) && "boolean" === typeof input.isWon && "boolean" === typeof input.isClosed && "boolean" === typeof input.isArchived && "number" === typeof input.contactCount && "number" === typeof input.noteCount && (Array.isArray(input.associatedContacts) && input.associatedContacts.every(function (elem) { return "string" === typeof elem; })) && (Array.isArray(input.associatedCompanies) && input.associatedCompanies.every(function (elem) { return "string" === typeof elem; })) && ("object" === typeof input.customProperties && null !== input.customProperties && false === Array.isArray(input.customProperties) && _io1(input.customProperties)); }; var _io1 = function (input) { return Object.keys(input).every(function (key) {
            var value = input[key];
            if (undefined === value)
                return true;
            return true;
        }); }; var _vo0 = function (input, _path, _exceptionable) {
            if (_exceptionable === void 0) { _exceptionable = true; }
            return ["string" === typeof input.id || _report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id
                }), "string" === typeof input.dealName || _report(_exceptionable, {
                    path: _path + ".dealName",
                    expected: "string",
                    value: input.dealName
                }), "number" === typeof input.amount || _report(_exceptionable, {
                    path: _path + ".amount",
                    expected: "number",
                    value: input.amount
                }), "string" === typeof input.currency || _report(_exceptionable, {
                    path: _path + ".currency",
                    expected: "string",
                    value: input.currency
                }), "string" === typeof input.stage || _report(_exceptionable, {
                    path: _path + ".stage",
                    expected: "string",
                    value: input.stage
                }), "string" === typeof input.stageLabel || _report(_exceptionable, {
                    path: _path + ".stageLabel",
                    expected: "string",
                    value: input.stageLabel
                }), "string" === typeof input.pipeline || _report(_exceptionable, {
                    path: _path + ".pipeline",
                    expected: "string",
                    value: input.pipeline
                }), "string" === typeof input.pipelineLabel || _report(_exceptionable, {
                    path: _path + ".pipelineLabel",
                    expected: "string",
                    value: input.pipelineLabel
                }), undefined === input.dealType || "string" === typeof input.dealType || _report(_exceptionable, {
                    path: _path + ".dealType",
                    expected: "(string | undefined)",
                    value: input.dealType
                }), undefined === input.closeDate || input.closeDate instanceof Date || _report(_exceptionable, {
                    path: _path + ".closeDate",
                    expected: "(Date | undefined)",
                    value: input.closeDate
                }), input.createdAt instanceof Date || _report(_exceptionable, {
                    path: _path + ".createdAt",
                    expected: "Date",
                    value: input.createdAt
                }), input.lastModifiedAt instanceof Date || _report(_exceptionable, {
                    path: _path + ".lastModifiedAt",
                    expected: "Date",
                    value: input.lastModifiedAt
                }), undefined === input.ownerId || "string" === typeof input.ownerId || _report(_exceptionable, {
                    path: _path + ".ownerId",
                    expected: "(string | undefined)",
                    value: input.ownerId
                }), "number" === typeof input.stageProbability || _report(_exceptionable, {
                    path: _path + ".stageProbability",
                    expected: "number",
                    value: input.stageProbability
                }), "number" === typeof input.forecastAmount || _report(_exceptionable, {
                    path: _path + ".forecastAmount",
                    expected: "number",
                    value: input.forecastAmount
                }), "number" === typeof input.projectedAmount || _report(_exceptionable, {
                    path: _path + ".projectedAmount",
                    expected: "number",
                    value: input.projectedAmount
                }), undefined === input.daysToClose || "number" === typeof input.daysToClose || _report(_exceptionable, {
                    path: _path + ".daysToClose",
                    expected: "(number | undefined)",
                    value: input.daysToClose
                }), "boolean" === typeof input.isWon || _report(_exceptionable, {
                    path: _path + ".isWon",
                    expected: "boolean",
                    value: input.isWon
                }), "boolean" === typeof input.isClosed || _report(_exceptionable, {
                    path: _path + ".isClosed",
                    expected: "boolean",
                    value: input.isClosed
                }), "boolean" === typeof input.isArchived || _report(_exceptionable, {
                    path: _path + ".isArchived",
                    expected: "boolean",
                    value: input.isArchived
                }), "number" === typeof input.contactCount || _report(_exceptionable, {
                    path: _path + ".contactCount",
                    expected: "number",
                    value: input.contactCount
                }), "number" === typeof input.noteCount || _report(_exceptionable, {
                    path: _path + ".noteCount",
                    expected: "number",
                    value: input.noteCount
                }), (Array.isArray(input.associatedContacts) || _report(_exceptionable, {
                    path: _path + ".associatedContacts",
                    expected: "Array<string>",
                    value: input.associatedContacts
                })) && input.associatedContacts.map(function (elem, _index3) { return "string" === typeof elem || _report(_exceptionable, {
                    path: _path + ".associatedContacts[" + _index3 + "]",
                    expected: "string",
                    value: elem
                }); }).every(function (flag) { return flag; }) || _report(_exceptionable, {
                    path: _path + ".associatedContacts",
                    expected: "Array<string>",
                    value: input.associatedContacts
                }), (Array.isArray(input.associatedCompanies) || _report(_exceptionable, {
                    path: _path + ".associatedCompanies",
                    expected: "Array<string>",
                    value: input.associatedCompanies
                })) && input.associatedCompanies.map(function (elem, _index4) { return "string" === typeof elem || _report(_exceptionable, {
                    path: _path + ".associatedCompanies[" + _index4 + "]",
                    expected: "string",
                    value: elem
                }); }).every(function (flag) { return flag; }) || _report(_exceptionable, {
                    path: _path + ".associatedCompanies",
                    expected: "Array<string>",
                    value: input.associatedCompanies
                }), ("object" === typeof input.customProperties && null !== input.customProperties && false === Array.isArray(input.customProperties) || _report(_exceptionable, {
                    path: _path + ".customProperties",
                    expected: "Record<string, any>",
                    value: input.customProperties
                })) && _vo1(input.customProperties, _path + ".customProperties", true && _exceptionable) || _report(_exceptionable, {
                    path: _path + ".customProperties",
                    expected: "Record<string, any>",
                    value: input.customProperties
                })].every(function (flag) { return flag; });
        }; var _vo1 = function (input, _path, _exceptionable) {
            if (_exceptionable === void 0) { _exceptionable = true; }
            return [false === _exceptionable || Object.keys(input).map(function (key) {
                    var value = input[key];
                    if (undefined === value)
                        return true;
                    return true;
                }).every(function (flag) { return flag; })].every(function (flag) { return flag; });
        }; var __is = function (input) { return "object" === typeof input && null !== input && _io0(input); }; var errors; var _report; return __typia_transform__createStandardSchema._createStandardSchema(function (input) {
            if (false === __is(input)) {
                errors = [];
                _report = __typia_transform__validateReport._validateReport(errors);
                (function (input, _path, _exceptionable) {
                    if (_exceptionable === void 0) { _exceptionable = true; }
                    return ("object" === typeof input && null !== input || _report(true, {
                        path: _path + "",
                        expected: "HubSpotDeal",
                        value: input
                    })) && _vo0(input, _path + "", true) || _report(true, {
                        path: _path + "",
                        expected: "HubSpotDeal",
                        value: input
                    });
                })(input, "$input", true);
                var success = 0 === errors.length;
                return success ? {
                    success: success,
                    data: input
                } : {
                    success: success,
                    errors: errors,
                    data: input
                };
            }
            return {
                success: true,
                data: input
            };
        }); })()(data);
        return {
            success: result.success,
            data: result.success ? result.data : undefined,
            errors: result.success ? undefined : result.errors
        };
    },
    assert: (function () { var _io0 = function (input) { return "string" === typeof input.id && "string" === typeof input.dealName && "number" === typeof input.amount && "string" === typeof input.currency && "string" === typeof input.stage && "string" === typeof input.stageLabel && "string" === typeof input.pipeline && "string" === typeof input.pipelineLabel && (undefined === input.dealType || "string" === typeof input.dealType) && (undefined === input.closeDate || input.closeDate instanceof Date) && input.createdAt instanceof Date && input.lastModifiedAt instanceof Date && (undefined === input.ownerId || "string" === typeof input.ownerId) && "number" === typeof input.stageProbability && "number" === typeof input.forecastAmount && "number" === typeof input.projectedAmount && (undefined === input.daysToClose || "number" === typeof input.daysToClose) && "boolean" === typeof input.isWon && "boolean" === typeof input.isClosed && "boolean" === typeof input.isArchived && "number" === typeof input.contactCount && "number" === typeof input.noteCount && (Array.isArray(input.associatedContacts) && input.associatedContacts.every(function (elem) { return "string" === typeof elem; })) && (Array.isArray(input.associatedCompanies) && input.associatedCompanies.every(function (elem) { return "string" === typeof elem; })) && ("object" === typeof input.customProperties && null !== input.customProperties && false === Array.isArray(input.customProperties) && _io1(input.customProperties)); }; var _io1 = function (input) { return Object.keys(input).every(function (key) {
        var value = input[key];
        if (undefined === value)
            return true;
        return true;
    }); }; var _ao0 = function (input, _path, _exceptionable) {
        if (_exceptionable === void 0) { _exceptionable = true; }
        return ("string" === typeof input.id || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".id",
            expected: "string",
            value: input.id
        }, _errorFactory)) && ("string" === typeof input.dealName || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".dealName",
            expected: "string",
            value: input.dealName
        }, _errorFactory)) && ("number" === typeof input.amount || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".amount",
            expected: "number",
            value: input.amount
        }, _errorFactory)) && ("string" === typeof input.currency || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".currency",
            expected: "string",
            value: input.currency
        }, _errorFactory)) && ("string" === typeof input.stage || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".stage",
            expected: "string",
            value: input.stage
        }, _errorFactory)) && ("string" === typeof input.stageLabel || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".stageLabel",
            expected: "string",
            value: input.stageLabel
        }, _errorFactory)) && ("string" === typeof input.pipeline || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".pipeline",
            expected: "string",
            value: input.pipeline
        }, _errorFactory)) && ("string" === typeof input.pipelineLabel || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".pipelineLabel",
            expected: "string",
            value: input.pipelineLabel
        }, _errorFactory)) && (undefined === input.dealType || "string" === typeof input.dealType || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".dealType",
            expected: "(string | undefined)",
            value: input.dealType
        }, _errorFactory)) && (undefined === input.closeDate || input.closeDate instanceof Date || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".closeDate",
            expected: "(Date | undefined)",
            value: input.closeDate
        }, _errorFactory)) && (input.createdAt instanceof Date || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".createdAt",
            expected: "Date",
            value: input.createdAt
        }, _errorFactory)) && (input.lastModifiedAt instanceof Date || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".lastModifiedAt",
            expected: "Date",
            value: input.lastModifiedAt
        }, _errorFactory)) && (undefined === input.ownerId || "string" === typeof input.ownerId || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".ownerId",
            expected: "(string | undefined)",
            value: input.ownerId
        }, _errorFactory)) && ("number" === typeof input.stageProbability || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".stageProbability",
            expected: "number",
            value: input.stageProbability
        }, _errorFactory)) && ("number" === typeof input.forecastAmount || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".forecastAmount",
            expected: "number",
            value: input.forecastAmount
        }, _errorFactory)) && ("number" === typeof input.projectedAmount || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".projectedAmount",
            expected: "number",
            value: input.projectedAmount
        }, _errorFactory)) && (undefined === input.daysToClose || "number" === typeof input.daysToClose || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".daysToClose",
            expected: "(number | undefined)",
            value: input.daysToClose
        }, _errorFactory)) && ("boolean" === typeof input.isWon || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".isWon",
            expected: "boolean",
            value: input.isWon
        }, _errorFactory)) && ("boolean" === typeof input.isClosed || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".isClosed",
            expected: "boolean",
            value: input.isClosed
        }, _errorFactory)) && ("boolean" === typeof input.isArchived || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".isArchived",
            expected: "boolean",
            value: input.isArchived
        }, _errorFactory)) && ("number" === typeof input.contactCount || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".contactCount",
            expected: "number",
            value: input.contactCount
        }, _errorFactory)) && ("number" === typeof input.noteCount || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".noteCount",
            expected: "number",
            value: input.noteCount
        }, _errorFactory)) && ((Array.isArray(input.associatedContacts) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".associatedContacts",
            expected: "Array<string>",
            value: input.associatedContacts
        }, _errorFactory)) && input.associatedContacts.every(function (elem, _index3) { return "string" === typeof elem || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".associatedContacts[" + _index3 + "]",
            expected: "string",
            value: elem
        }, _errorFactory); }) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".associatedContacts",
            expected: "Array<string>",
            value: input.associatedContacts
        }, _errorFactory)) && ((Array.isArray(input.associatedCompanies) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".associatedCompanies",
            expected: "Array<string>",
            value: input.associatedCompanies
        }, _errorFactory)) && input.associatedCompanies.every(function (elem, _index4) { return "string" === typeof elem || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".associatedCompanies[" + _index4 + "]",
            expected: "string",
            value: elem
        }, _errorFactory); }) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".associatedCompanies",
            expected: "Array<string>",
            value: input.associatedCompanies
        }, _errorFactory)) && (("object" === typeof input.customProperties && null !== input.customProperties && false === Array.isArray(input.customProperties) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".customProperties",
            expected: "Record<string, any>",
            value: input.customProperties
        }, _errorFactory)) && _ao1(input.customProperties, _path + ".customProperties", true && _exceptionable) || __typia_transform__assertGuard._assertGuard(_exceptionable, {
            method: "____moose____typia.createAssert",
            path: _path + ".customProperties",
            expected: "Record<string, any>",
            value: input.customProperties
        }, _errorFactory));
    }; var _ao1 = function (input, _path, _exceptionable) {
        if (_exceptionable === void 0) { _exceptionable = true; }
        return false === _exceptionable || Object.keys(input).every(function (key) {
            var value = input[key];
            if (undefined === value)
                return true;
            return true;
        });
    }; var __is = function (input) { return "object" === typeof input && null !== input && _io0(input); }; var _errorFactory; return function (input, errorFactory) {
        if (false === __is(input)) {
            _errorFactory = errorFactory;
            (function (input, _path, _exceptionable) {
                if (_exceptionable === void 0) { _exceptionable = true; }
                return ("object" === typeof input && null !== input || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.createAssert",
                    path: _path + "",
                    expected: "HubSpotDeal",
                    value: input
                }, _errorFactory)) && _ao0(input, _path + "", true) || __typia_transform__assertGuard._assertGuard(true, {
                    method: "____moose____typia.createAssert",
                    path: _path + "",
                    expected: "HubSpotDeal",
                    value: input
                }, _errorFactory);
            })(input, "$input", true);
        }
        return input;
    }; })(),
    is: (function () { var _io0 = function (input) { return "string" === typeof input.id && "string" === typeof input.dealName && "number" === typeof input.amount && "string" === typeof input.currency && "string" === typeof input.stage && "string" === typeof input.stageLabel && "string" === typeof input.pipeline && "string" === typeof input.pipelineLabel && (undefined === input.dealType || "string" === typeof input.dealType) && (undefined === input.closeDate || input.closeDate instanceof Date) && input.createdAt instanceof Date && input.lastModifiedAt instanceof Date && (undefined === input.ownerId || "string" === typeof input.ownerId) && "number" === typeof input.stageProbability && "number" === typeof input.forecastAmount && "number" === typeof input.projectedAmount && (undefined === input.daysToClose || "number" === typeof input.daysToClose) && "boolean" === typeof input.isWon && "boolean" === typeof input.isClosed && "boolean" === typeof input.isArchived && "number" === typeof input.contactCount && "number" === typeof input.noteCount && (Array.isArray(input.associatedContacts) && input.associatedContacts.every(function (elem) { return "string" === typeof elem; })) && (Array.isArray(input.associatedCompanies) && input.associatedCompanies.every(function (elem) { return "string" === typeof elem; })) && ("object" === typeof input.customProperties && null !== input.customProperties && false === Array.isArray(input.customProperties) && _io1(input.customProperties)); }; var _io1 = function (input) { return Object.keys(input).every(function (key) {
        var value = input[key];
        if (undefined === value)
            return true;
        return true;
    }); }; return function (input) { return "object" === typeof input && null !== input && _io0(input); }; })()
});
//# sourceMappingURL=hubspotModels.js.map