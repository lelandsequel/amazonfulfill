import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/openai';
import type { ScenarioInput, ForecastAssessment } from '@/types/forecast';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as Partial<ScenarioInput>;
        const { originFCs, destinationRegions, timeWindowDays, notes } = body;

        if (!originFCs || !destinationRegions || !timeWindowDays) {
            return NextResponse.json(
                { error: 'originFCs, destinationRegions, and timeWindowDays are required' },
                { status: 400 },
            );
        }

        const safeTimeWindow = Math.max(1, Math.min(30, Number(timeWindowDays) || 1));
        const nowIso = new Date().toISOString();

        const prompt = `
You are an operations and logistics planner for Amazon's fulfillment and last-mile network.

You will be given a scenario that includes:
- origin fulfillment centers,
- destination regions,
- a time horizon in days,
- and optional notes (e.g., promotions, staffing constraints, known issues).

Your job is to:
1) Assess the relative risk of service-level issues (SLA stress) in this scenario.
2) Identify which regions appear riskiest and why.
3) Recommend specific routing or capacity actions to mitigate risk.
4) Highlight opportunities where spare capacity or routing could be leveraged.

Use reasoning based on common fulfillment and last-mile patterns: capacity vs. forecast, carrier reliability, geographic adjacency, and cross-region routing flexibility.

Scenario:
- Origin FCs: ${originFCs}
- Destination Regions: ${destinationRegions}
- Time window: ${safeTimeWindow} days
- Notes: ${notes || 'None provided'}

Return ONLY valid JSON in this exact shape:

{
  "id": string,
  "scenarioSummary": string,
  "overallRiskScore": number,
  "keyRisks": string[],
  "keyOpportunities": string[],
  "regionRisks": [
    {
      "region": string,
      "riskScore": number,
      "summary": string,
      "drivers": string[],
      "recommendations": string[]
    }
  ],
  "globalRecommendations": [
    {
      "title": string,
      "description": string,
      "priority": "high" | "medium" | "low",
      "expectedImpact": string
    }
  ],
  "timeHorizon": string,
  "generatedAt": string
}
`.trim();

        // ADAPTATION NOTE: The user requested 'openai.responses.create' which is not part of the standard v4 Node SDK.
        // I have adapted this to use the standard 'chat.completions.create' method while preserving the prompt and logic.
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o', // Using gpt-4o as the robust standard model
            messages: [
                { role: 'system', content: 'You are an operations and logistics planner.' },
                { role: 'user', content: prompt }
            ],
            response_format: { type: 'json_object' },
        });

        const content = completion.choices[0].message.content;
        const parsed = JSON.parse(content || '{}') as ForecastAssessment;

        // Basic sanity checks; add defaults if missing.
        if (typeof parsed.overallRiskScore !== 'number') {
            parsed.overallRiskScore = 50;
        }
        if (!parsed.generatedAt) {
            parsed.generatedAt = nowIso;
        }
        if (!parsed.timeHorizon) {
            parsed.timeHorizon = `${safeTimeWindow} day(s)`;
        }
        if (!parsed.id) {
            parsed.id = `ffro-${Date.now()}`;
        }

        return NextResponse.json(parsed);
    } catch (error: any) {
        console.error('Forecast analyze error:', error);
        return NextResponse.json(
            { error: 'Failed to analyze fulfillment scenario' },
            { status: 500 },
        );
    }
}
