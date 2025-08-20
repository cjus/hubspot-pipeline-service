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
Object.defineProperty(exports, "__esModule", { value: true });
var hubspotModels_1 = require("./hubspotModels");
// Array of fake companies for obfuscating deal names
var FAKE_COMPANIES = [
    "Acme Corporation", "Global Dynamics", "TechNova Solutions", "Apex Industries",
    "Summit Enterprises", "NextGen Systems", "Horizon Technologies", "Atlas Corp",
    "Stellar Industries", "Phoenix Technologies", "Quantum Solutions", "Pinnacle Group",
    "Velocity Systems", "Infinity Corp", "Zenith Technologies", "Catalyst Solutions",
    "Nexus Enterprises", "Titan Industries", "Vortex Systems", "Eclipse Technologies",
    "Fusion Corp", "Matrix Solutions", "Orbital Systems", "Spectrum Enterprises",
    "Pulse Technologies", "Vertex Solutions", "Cosmos Industries", "Dynamo Corp",
    "Element Systems", "Frontier Technologies", "Genesis Solutions", "Helix Corp",
    "Impact Industries", "Kinetic Systems", "Lunar Technologies", "Meridian Corp",
    "Nova Solutions", "Omega Industries", "Paradigm Systems", "Quantum Leap Corp",
    "Radiant Technologies", "Synergy Solutions", "Turbo Industries", "Unity Corp",
    "Vector Systems", "Wavelength Technologies", "Xerion Solutions", "Zenith Corp"
];
// Deal types for variety
var DEAL_TYPES = [
    "Enterprise License", "Professional Services", "Annual Subscription",
    "Implementation Project", "Support Contract", "Consulting Agreement",
    "Software License", "Platform Migration", "Digital Transformation",
    "Cloud Infrastructure", "Security Audit", "Data Analytics Project"
];
// Check if data should be anonymized (defaults to false for real data)
var ANONYMIZE_DATA = process.env.ANONYMIZE_DATA === 'true';
// Log the anonymization mode on startup
console.log("\uD83D\uDD27 HubSpot Pipeline Mode: ".concat(ANONYMIZE_DATA ? 'ANONYMIZED DATA (Demo/Public Safe)' : 'REAL DATA (Internal Use)'));
// Helper function to generate deterministic random values based on deal ID
var getRandomFromId = function (dealId, arrayLength) {
    var hash = 0;
    for (var i = 0; i < dealId.length; i++) {
        var char = dealId.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash) % arrayLength;
};
// Transform raw HubSpot deal events to processed/normalized deal events
hubspotModels_1.HubSpotDealRawPipeline.stream.addTransform(hubspotModels_1.HubSpotDealPipeline.stream, function (rawDeal) { return __awaiter(void 0, void 0, void 0, function () {
    var props, dealName, amount, companyIndex, dealTypeIndex, originalAmount, baseAmount, multiplier, currency, stage, stageLabel, pipeline, pipelineLabel, parseDate, createdAt, lastModifiedAt, closeDate, ownerId, stageProbability, forecastAmount, projectedAmount, isWon, isClosed, daysToClose, diffTime, associatedContacts, associatedCompanies, contactCount, noteCount, standardProperties, customProperties, result;
    return __generator(this, function (_a) {
        props = rawDeal.properties;
        if (ANONYMIZE_DATA) {
            companyIndex = getRandomFromId(rawDeal.id, FAKE_COMPANIES.length);
            dealTypeIndex = getRandomFromId(rawDeal.id + "type", DEAL_TYPES.length);
            dealName = "".concat(FAKE_COMPANIES[companyIndex], " - ").concat(DEAL_TYPES[dealTypeIndex]);
            originalAmount = parseFloat(props.amount || "0") || 0;
            baseAmount = 100000;
            multiplier = (getRandomFromId(rawDeal.id + "amount", 100) + 1) / 2;
            amount = baseAmount + (originalAmount > 0 ? Math.max(originalAmount, baseAmount * multiplier) : baseAmount * multiplier);
            amount += 20001;
        }
        else {
            // Use real HubSpot data
            dealName = props.dealname || "Untitled Deal";
            amount = parseFloat(props.amount || "0") || 0;
        }
        currency = props.deal_currency_code || "USD";
        stage = props.dealstage || "unknown";
        stageLabel = props.dealstage_label || stage;
        pipeline = props.pipeline || "default";
        pipelineLabel = props.pipeline_label || pipeline;
        parseDate = function (dateStr) {
            if (!dateStr)
                return new Date();
            try {
                return new Date(dateStr);
            }
            catch (_a) {
                return new Date();
            }
        };
        createdAt = parseDate(props.createdate || undefined) || new Date(rawDeal.createdAt);
        lastModifiedAt = parseDate(props.hs_lastmodifieddate || undefined) || new Date(rawDeal.updatedAt);
        closeDate = props.closedate ? parseDate(props.closedate || undefined) : undefined;
        ownerId = props.hubspot_owner_id;
        stageProbability = parseFloat(props.hs_deal_stage_probability || "0") || 0;
        if (ANONYMIZE_DATA) {
            forecastAmount = parseFloat(props.hs_forecast_amount || "0") || amount * (stageProbability / 100);
            projectedAmount = parseFloat(props.hs_projected_amount || "0") || amount;
        }
        else {
            forecastAmount = parseFloat(props.hs_forecast_amount || props.amount || "0") || 0;
            projectedAmount = parseFloat(props.hs_projected_amount || props.amount || "0") || 0;
        }
        isWon = stage.toLowerCase().includes("won") || stage.toLowerCase().includes("closed");
        isClosed = isWon || stage.toLowerCase().includes("lost") || stage.toLowerCase().includes("closed");
        if (isClosed && closeDate) {
            diffTime = Math.abs(closeDate.getTime() - createdAt.getTime());
            daysToClose = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }
        associatedContacts = rawDeal.associations.contacts || [];
        associatedCompanies = rawDeal.associations.companies || [];
        contactCount = parseInt(props.num_associated_contacts || "0") || associatedContacts.length;
        noteCount = parseInt(props.num_contacted_notes || "0") || 0;
        standardProperties = new Set([
            'dealname', 'amount', 'dealstage', 'pipeline', 'dealtype', 'closedate',
            'createdate', 'hs_lastmodifieddate', 'hubspot_owner_id', 'amount_in_home_currency',
            'hs_deal_stage_probability', 'dealstage_label', 'pipeline_label', 'deal_currency_code',
            'hs_forecast_amount', 'hs_projected_amount', 'num_associated_contacts',
            'num_contacted_notes', 'days_to_close'
        ]);
        customProperties = {};
        Object.entries(props).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (!standardProperties.has(key) && value !== undefined && value !== null) {
                customProperties[key] = value;
            }
        });
        result = {
            id: rawDeal.id,
            dealName: dealName,
            amount: amount,
            currency: currency,
            stage: stage,
            stageLabel: stageLabel,
            pipeline: pipeline,
            pipelineLabel: pipelineLabel,
            dealType: props.dealtype || undefined,
            closeDate: closeDate,
            createdAt: createdAt,
            lastModifiedAt: lastModifiedAt,
            ownerId: ownerId || undefined,
            stageProbability: stageProbability,
            forecastAmount: forecastAmount,
            projectedAmount: projectedAmount,
            daysToClose: daysToClose,
            isWon: isWon,
            isClosed: isClosed,
            isArchived: rawDeal.archived,
            contactCount: contactCount,
            noteCount: noteCount,
            associatedContacts: associatedContacts,
            associatedCompanies: associatedCompanies,
            customProperties: customProperties
        };
        console.log("Processed HubSpot deal: ".concat(dealName, " (").concat(rawDeal.id, ") - ").concat(stage, " - $").concat(amount, " ").concat(ANONYMIZE_DATA ? '[ANONYMIZED]' : '[REAL DATA]'));
        return [2 /*return*/, result];
    });
}); });
// Add a streaming consumer to log raw HubSpot deal events
var printHubSpotDealEvent = function (rawDeal) {
    var displayName;
    if (ANONYMIZE_DATA) {
        // Generate obfuscated name for logging consistency
        var companyIndex = getRandomFromId(rawDeal.id, FAKE_COMPANIES.length);
        var dealTypeIndex = getRandomFromId(rawDeal.id + "type", DEAL_TYPES.length);
        displayName = "".concat(FAKE_COMPANIES[companyIndex], " - ").concat(DEAL_TYPES[dealTypeIndex]);
    }
    else {
        displayName = rawDeal.properties.dealname || "Untitled";
    }
    console.log("Received HubSpot Deal event:");
    console.log("  Deal ID: ".concat(rawDeal.id));
    console.log("  Deal Name: ".concat(displayName));
    console.log("  Amount: ".concat(rawDeal.properties.amount || "0"));
    console.log("  Stage: ".concat(rawDeal.properties.dealstage || "unknown"));
    console.log("  Updated: ".concat(rawDeal.updatedAt));
    console.log("  Anonymized: ".concat(ANONYMIZE_DATA ? 'Yes' : 'No'));
    console.log("---");
};
//# sourceMappingURL=hubspotTransforms.js.map