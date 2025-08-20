import ____moose____typia from "typia";
import { IngestPipeline, Key, OlapTable, DeadLetterModel, ClickHouseEngines } from "@514labs/moose-lib";
/** Raw HubSpot deal data directly from API */
export interface HubSpotDealRaw {
    id: Key<string>;
    properties: HubSpotDealProperties;
    createdAt: string;
    updatedAt: string;
    archived: boolean;
    associations: HubSpotDealAssociations;
}
export interface HubSpotDealProperties {
    [key: string]: string | null | undefined;
}
export interface HubSpotDealAssociations {
    contacts: string[];
    companies: string[];
}
/** Processed/normalized HubSpot deal data */
export interface HubSpotDeal {
    id: Key<string>;
    dealName: string;
    amount: number;
    currency: string;
    stage: string;
    stageLabel: string;
    pipeline: string;
    pipelineLabel: string;
    dealType?: string;
    closeDate?: Date;
    createdAt: Date;
    lastModifiedAt: Date;
    ownerId?: string;
    stageProbability: number;
    forecastAmount: number;
    projectedAmount: number;
    daysToClose?: number;
    isWon: boolean;
    isClosed: boolean;
    isArchived: boolean;
    contactCount: number;
    noteCount: number;
    associatedContacts: string[];
    associatedCompanies: string[];
    customProperties: Record<string, any>;
}
export const hubspotDeadLetterTable = new OlapTable<DeadLetterModel>("HubSpotDealDeadLetter", {
    orderByFields: ["failedAt"],
}, ____moose____typia.json.schemas<[
    DeadLetterModel
]>(), JSON.parse("[{\"name\":\"originalRecord\",\"data_type\":\"Json\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"errorMessage\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"errorType\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"failedAt\",\"data_type\":\"DateTime\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"source\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]}]") as any, {
    validate: (data: unknown) => {
        const result = ____moose____typia.createValidate<DeadLetterModel>()(data);
        return {
            success: result.success,
            data: result.success ? result.data : undefined,
            errors: result.success ? undefined : result.errors
        };
    },
    assert: ____moose____typia.createAssert<DeadLetterModel>(),
    is: ____moose____typia.createIs<DeadLetterModel>()
});
/** Raw HubSpot deal ingestion */
export const HubSpotDealRawPipeline = new IngestPipeline<HubSpotDealRaw>("HubSpotDealRaw", {
    table: false,
    stream: true,
    ingest: true,
    deadLetterQueue: { destination: hubspotDeadLetterTable },
}, ____moose____typia.json.schemas<[
    HubSpotDealRaw
]>(), JSON.parse("[{\"name\":\"id\",\"data_type\":\"String\",\"primary_key\":true,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"properties\",\"data_type\":{\"keyType\":\"String\",\"valueType\":\"String\"},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"createdAt\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"updatedAt\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"archived\",\"data_type\":\"Boolean\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"associations\",\"data_type\":{\"name\":\"HubSpotDealAssociations\",\"columns\":[{\"name\":\"contacts\",\"data_type\":{\"elementNullable\":false,\"elementType\":\"String\"},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"companies\",\"data_type\":{\"elementNullable\":false,\"elementType\":\"String\"},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]}],\"jwt\":false},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]}]") as any, {
    validate: (data: unknown) => {
        const result = ____moose____typia.createValidate<HubSpotDealRaw>()(data);
        return {
            success: result.success,
            data: result.success ? result.data : undefined,
            errors: result.success ? undefined : result.errors
        };
    },
    assert: ____moose____typia.createAssert<HubSpotDealRaw>(),
    is: ____moose____typia.createIs<HubSpotDealRaw>()
});
/** Processed HubSpot deal storage */
export const HubSpotDealPipeline = new IngestPipeline<HubSpotDeal>("HubSpotDeal", {
    table: { engine: ClickHouseEngines.MergeTree, orderByFields: ["id"] }, // Store processed data in ClickHouse
    stream: true, // Buffer processed records
    ingest: false, // No direct API; only derived from raw data
    deadLetterQueue: {
        destination: hubspotDeadLetterTable,
    },
}, ____moose____typia.json.schemas<[
    HubSpotDeal
]>(), JSON.parse("[{\"name\":\"id\",\"data_type\":\"String\",\"primary_key\":true,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"dealName\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"amount\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"currency\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"stage\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"stageLabel\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"pipeline\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"pipelineLabel\",\"data_type\":\"String\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"dealType\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"closeDate\",\"data_type\":\"DateTime\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"createdAt\",\"data_type\":\"DateTime\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"lastModifiedAt\",\"data_type\":\"DateTime\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"ownerId\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"stageProbability\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"forecastAmount\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"projectedAmount\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"daysToClose\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"isWon\",\"data_type\":\"Boolean\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"isClosed\",\"data_type\":\"Boolean\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"isArchived\",\"data_type\":\"Boolean\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"contactCount\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"noteCount\",\"data_type\":\"Float\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"associatedContacts\",\"data_type\":{\"elementNullable\":false,\"elementType\":\"String\"},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"associatedCompanies\",\"data_type\":{\"elementNullable\":false,\"elementType\":\"String\"},\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"customProperties\",\"data_type\":\"Json\",\"primary_key\":false,\"required\":true,\"unique\":false,\"default\":null,\"annotations\":[]}]") as any, {
    validate: (data: unknown) => {
        const result = ____moose____typia.createValidate<HubSpotDeal>()(data);
        return {
            success: result.success,
            data: result.success ? result.data : undefined,
            errors: result.success ? undefined : result.errors
        };
    },
    assert: ____moose____typia.createAssert<HubSpotDeal>(),
    is: ____moose____typia.createIs<HubSpotDeal>()
});
