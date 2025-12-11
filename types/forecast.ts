export interface ScenarioInput {
    originFCs: string;           // free text, e.g. "ONT2, LAX9"
    destinationRegions: string;  // free text, e.g. "SoCal, AZ, NV"
    timeWindowDays: number;      // e.g. 3, 7, 14
    notes?: string;              // promos, constraints, assumptions
}

export interface RegionRisk {
    region: string;
    riskScore: number; // 0–100, higher = safer / lower risk
    summary: string;
    drivers: string[]; // bullet points of what's driving risk
    recommendations: string[]; // region-specific actions
}

export interface FulfillmentRecommendation {
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    expectedImpact: string;
}

export interface ForecastAssessment {
    id: string;
    scenarioSummary: string;
    overallRiskScore: number; // 0–100
    keyRisks: string[];
    keyOpportunities: string[];
    regionRisks: RegionRisk[];
    globalRecommendations: FulfillmentRecommendation[];
    timeHorizon: string; // human-readable version of time window
    generatedAt: string; // ISO date string
}

export type ApiResponse =
    | { success: true; data: ForecastAssessment }
    | { success: false; error: string };
