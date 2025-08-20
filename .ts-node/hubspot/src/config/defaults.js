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
Object.defineProperty(exports, "__esModule", { value: true });
exports.withDerivedDefaults = withDerivedDefaults;
function withDerivedDefaults(user) {
    var base = {
        baseUrl: "https://api.hubapi.com",
        timeoutMs: 30000,
        userAgent: "connector-factory-hubspot/0.1.0",
        defaultHeaders: {
            Accept: "application/json",
        },
        defaultQueryParams: {},
        auth: user.auth,
        retry: {
            maxAttempts: 3,
            initialDelayMs: 1000,
            maxDelayMs: 30000,
            backoffMultiplier: 2,
            retryableStatusCodes: [408, 425, 429, 500, 502, 503, 504],
            retryBudgetMs: 60000,
            respectRetryAfter: true,
        },
        rateLimit: {
            // HubSpot documented burst limit baseline (varies by plan); start conservative
            requestsPerSecond: 15,
            concurrentRequests: 10,
            burstCapacity: 30,
            adaptiveFromHeaders: true,
        },
        hooks: {},
    };
    return __assign(__assign(__assign({}, base), user), { retry: __assign(__assign({}, base.retry), user.retry), rateLimit: __assign(__assign({}, base.rateLimit), user.rateLimit), defaultHeaders: __assign(__assign({}, base.defaultHeaders), user.defaultHeaders), defaultQueryParams: __assign(__assign({}, base.defaultQueryParams), user.defaultQueryParams) });
}
//# sourceMappingURL=defaults.js.map