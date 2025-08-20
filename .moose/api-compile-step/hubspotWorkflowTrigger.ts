import ____moose____typia from "typia";
import { ConsumptionApi } from "@514labs/moose-lib";
interface WorkflowTriggerParams {
    workflowName?: string;
    force?: boolean;
}
interface WorkflowExecutionResponse {
    success: boolean;
    workflowName: string;
    executionId: string;
    status: "started" | "failed";
    message: string;
    startTime: string;
    error?: string;
}
export const HubSpotWorkflowTriggerApi = new ConsumptionApi<WorkflowTriggerParams, WorkflowExecutionResponse>("hubspot-workflow-trigger", (params, utils) => {
    const assertGuard = ____moose____typia.http.createAssertQuery<WorkflowTriggerParams>();
    const searchParams = new URLSearchParams(params as any);
    const processedParams = assertGuard(searchParams);
    return (async ({ workflowName = "hubspotDataSync", force = false }, { client }) => {
        const startTime = new Date().toISOString();
        const executionId = `${workflowName}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        try {
            if (!process.env.HUBSPOT_TOKEN) {
                throw new Error("HUBSPOT_TOKEN environment variable is required for workflow execution");
            }
            if (workflowName !== "hubspotDataSync") {
                throw new Error(`Unknown workflow: ${workflowName}. Available workflows: hubspotDataSync`);
            }
            void client.workflow.execute(workflowName, {});
            return {
                success: true,
                workflowName,
                executionId,
                status: "started",
                message: `Workflow ${workflowName} triggered successfully`,
                startTime,
            };
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            return {
                success: false,
                workflowName,
                executionId,
                status: "failed",
                message: `Failed to trigger workflow: ${message}`,
                startTime,
                error: message,
            };
        }
    })(processedParams, utils);
}, {}, ____moose____typia.json.schemas<[
    WorkflowTriggerParams
]>(), JSON.parse("[{\"name\":\"workflowName\",\"data_type\":\"String\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]},{\"name\":\"force\",\"data_type\":\"Boolean\",\"primary_key\":false,\"required\":false,\"unique\":false,\"default\":null,\"annotations\":[]}]") as any, ____moose____typia.json.schemas<[
    WorkflowExecutionResponse
]>());
