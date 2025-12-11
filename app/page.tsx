'use client';

import { useState } from 'react';
import type { ForecastAssessment } from '@/types/forecast';

function badgeClasses(score: number) {
  if (score >= 80) return 'bg-emerald-100 text-emerald-900 border-emerald-300';
  if (score >= 50) return 'bg-amber-100 text-amber-900 border-amber-300';
  return 'bg-red-100 text-red-900 border-red-300';
}

function formatDate(iso?: string) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString();
}

export default function HomePage() {
  const [originFCs, setOriginFCs] = useState('');
  const [destinationRegions, setDestinationRegions] = useState('');
  const [timeWindowDays, setTimeWindowDays] = useState(7);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [assessment, setAssessment] = useState<ForecastAssessment | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAssessment(null);

    try {
      const res = await fetch('/api/forecast/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          originFCs,
          destinationRegions,
          timeWindowDays,
          notes,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to analyze scenario');
      }

      const data = (await res.json()) as ForecastAssessment;
      setAssessment(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  function handleUseExample() {
    setOriginFCs('ONT2, LAX9');
    setDestinationRegions('SoCal, AZ, NV');
    setTimeWindowDays(5);
    setNotes('Prime Day tail promotions; carrier reliability soft in AZ; labor constraints at LAX9 nights.');
  }

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-gray-700">
          <p className="font-medium">
            Scenario-based forecasting for fulfillment and last-mile operations.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Enter a minimal scenario and FFRO will estimate risk, highlight hot spots, and suggest routing actions.
          </p>
        </div>
        <button
          type="button"
          onClick={handleUseExample}
          className="inline-flex items-center justify-center rounded-md border border-amber-500 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800 hover:bg-amber-100"
        >
          Use example scenario
        </button>
      </section>

      {error && (
        <div className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-800">
          <div className="font-semibold mb-1">Error</div>
          <div>{error}</div>
        </div>
      )}

      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-900">
          Scenario Input
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          Keep inputs simple; the goal is to illustrate how a planner might quickly test risk across regions.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              Origin Fulfillment Centers
            </label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              placeholder="e.g., ONT2, LAX9, PHX3"
              value={originFCs}
              onChange={(e) => setOriginFCs(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              Destination Regions
            </label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              placeholder="e.g., SoCal, AZ, NV"
              value={destinationRegions}
              onChange={(e) => setDestinationRegions(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="sm:w-40">
              <label className="mb-1 block text-xs font-medium text-gray-700">
                Time Window (days)
              </label>
              <input
                type="number"
                min={1}
                max={30}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                value={timeWindowDays}
                onChange={(e) => setTimeWindowDays(parseInt(e.target.value || '1', 10))}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              Notes (optional)
            </label>
            <textarea
              className="min-h-[80px] w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              placeholder="e.g., promotions, known carrier issues, staffing constraints, or unusual events."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-700 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="mr-2 inline-block h-3 w-3 animate-spin rounded-full border border-white border-t-transparent" />
                  Analyzing…
                </>
              ) : (
                'Analyze Scenario'
              )}
            </button>
          </div>
        </form>
      </section>

      {assessment && (
        <section className="space-y-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Assessment Overview
              </h2>
              <p className="mt-1 text-xs text-gray-600">
                {assessment.scenarioSummary}
              </p>
              <p className="mt-1 text-[11px] text-gray-500">
                Time horizon: {assessment.timeHorizon} • Generated:{' '}
                {formatDate(assessment.generatedAt)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-medium text-gray-600">
                Overall Risk Score
              </p>
              <div
                className={`mt-1 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${badgeClasses(
                  assessment.overallRiskScore,
                )}`}
              >
                {assessment.overallRiskScore}/100
              </div>
            </div>
          </header>

          {assessment.keyRisks && assessment.keyRisks.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-gray-900">
                Key Risks
              </h3>
              <ul className="mt-1 list-disc list-inside space-y-1 text-xs text-gray-700">
                {assessment.keyRisks.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          {assessment.keyOpportunities &&
            assessment.keyOpportunities.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold text-gray-900">
                  Key Opportunities
                </h3>
                <ul className="mt-1 list-disc list-inside space-y-1 text-xs text-gray-700">
                  {assessment.keyOpportunities.map((o, idx) => (
                    <li key={idx}>{o}</li>
                  ))}
                </ul>
              </div>
            )}

          {assessment.regionRisks && assessment.regionRisks.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-gray-900">
                Region-Level View
              </h3>
              <div className="mt-2 grid gap-3 md:grid-cols-2">
                {assessment.regionRisks.map((rr) => (
                  <div
                    key={rr.region}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs"
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-semibold text-gray-900">
                        {rr.region}
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${badgeClasses(
                          rr.riskScore,
                        )}`}
                      >
                        {rr.riskScore}/100
                      </span>
                    </div>
                    <p className="mb-2 text-gray-700">{rr.summary}</p>
                    {rr.drivers && rr.drivers.length > 0 && (
                      <div className="mb-2">
                        <p className="font-medium text-[11px] text-gray-800">
                          Drivers
                        </p>
                        <ul className="mt-1 list-disc list-inside space-y-0.5 text-[11px] text-gray-700">
                          {rr.drivers.map((d, idx) => (
                            <li key={idx}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {rr.recommendations && rr.recommendations.length > 0 && (
                      <div>
                        <p className="font-medium text-[11px] text-gray-800">
                          Recommendations
                        </p>
                        <ul className="mt-1 list-disc list-inside space-y-0.5 text-[11px] text-gray-700">
                          {rr.recommendations.map((rec, idx) => (
                            <li key={idx}>{rec}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {assessment.globalRecommendations &&
            assessment.globalRecommendations.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold text-gray-900">
                  Global Recommendations
                </h3>
                <div className="mt-2 grid gap-3 md:grid-cols-2">
                  {assessment.globalRecommendations.map((gr, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs"
                    >
                      <div className="mb-1 flex items-center justify-between">
                        <span className="font-semibold text-gray-900">
                          {gr.title}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-medium text-gray-800">
                          {gr.priority.toUpperCase()}
                        </span>
                      </div>
                      <p className="mb-2 text-gray-700">
                        {gr.description}
                      </p>
                      <p className="text-[11px] text-gray-600">
                        <span className="font-medium">Expected impact:</span>{' '}
                        {gr.expectedImpact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </section>
      )}
    </div>
  );
}
