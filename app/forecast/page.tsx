'use client';

import { useState } from 'react';
import { DataGrid } from '@/components/ui/data-grid';
import { ForecastAssessment, ScenarioInput, RegionRisk, FulfillmentRecommendation } from '@/types/forecast';

export default function ForecastPage() {
    const [input, setInput] = useState<ScenarioInput>({
        originFCs: 'DFW7, SAT1',
        destinationRegions: 'Southwest, Midwest',
        timeWindowDays: 7,
        notes: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<ForecastAssessment | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleRunSimulation = async () => {
        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch('/api/forecast/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(input)
            });

            if (!response.ok) {
                throw new Error('Failed to run simulation');
            }

            const data = await response.json();
            setResult(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const riskColor = (score: number) => {
        if (score >= 80) return 'bg-green-100 text-green-800 border-green-200';
        if (score >= 60) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        if (score >= 40) return 'bg-orange-100 text-orange-800 border-orange-200';
        return 'bg-red-100 text-red-800 border-red-200';
    };

    const columns = [
        { header: 'Region', accessorKey: 'region' as keyof RegionRisk },
        {
            header: 'Risk Score (0-100)',
            accessorKey: 'riskScore' as keyof RegionRisk,
            cell: (item: RegionRisk) => (
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${riskColor(item.riskScore)}`}>
                    {item.riskScore}
                </span>
            )
        },
        { header: 'Primary Driver', accessorKey: 'summary' as keyof RegionRisk },
        {
            header: 'Top Recommendation',
            accessorKey: 'recommendations' as keyof RegionRisk,
            cell: (item: RegionRisk) => item.recommendations[0] || '-'
        }
    ];

    return (
        <div className="space-y-8 max-w-6xl mx-auto pb-12">

            {/* Header & Input Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-[#232f3e]">Demand Forecast Simulator</h1>
                        <p className="text-gray-500 text-sm mt-1">Run "What-If" scenarios to identify network stress across regions.</p>
                    </div>
                    <button
                        onClick={handleRunSimulation}
                        disabled={isLoading}
                        className="px-6 py-2 bg-[#ff9900] text-black font-bold rounded hover:bg-[#ffad33] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Running Simulation...' : 'Run Simulation'}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Origin Fulfillment Centers</label>
                            <input
                                type="text"
                                value={input.originFCs}
                                onChange={(e) => setInput({ ...input, originFCs: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-transparent"
                                placeholder="e.g. ONT2, LAX9, PHX6"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Destination Regions</label>
                            <input
                                type="text"
                                value={input.destinationRegions}
                                onChange={(e) => setInput({ ...input, destinationRegions: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-transparent"
                                placeholder="e.g. SoCal, AZ, NV, Pacific NW"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Time Window (Days)</label>
                            <input
                                type="number"
                                value={input.timeWindowDays}
                                onChange={(e) => setInput({ ...input, timeWindowDays: parseInt(e.target.value) || 0 })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-transparent"
                                min="1" max="30"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Scenario Notes / Context</label>
                            <textarea
                                value={input.notes}
                                onChange={(e) => setInput({ ...input, notes: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-transparent h-[42px] min-h-[42px]"
                                placeholder="e.g. Prime Day promo, Carrier capacity constraints..."
                                style={{ height: '42px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Error State */}
            {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
                    <strong>Error:</strong> {error}
                </div>
            )}

            {/* Results Section */}
            {result && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

                    {/* Top Level Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Overall Score */}
                        <div className={`p-6 rounded-lg border-l-4 shadow-sm bg-white ${riskColor(result.overallRiskScore).replace('bg-', 'border-')}`}>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Network Health Score</h3>
                            <div className="flex items-end mt-2">
                                <span className={`text-4xl font-extrabold ${riskColor(result.overallRiskScore).split(' ')[1]}`}>
                                    {result.overallRiskScore}
                                </span>
                                <span className="text-gray-400 text-lg ml-1 mb-1">/ 100</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{result.scenarioSummary}</p>
                        </div>

                        {/* Key Risks */}
                        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 col-span-2">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Critical Risks Identified</h3>
                            <ul className="space-y-2">
                                {result.keyRisks.map((risk, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span className="text-gray-700 text-sm">{risk}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* AI Recommendations */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                        <h3 className="text-lg font-bold text-[#232f3e] mb-4 flex items-center">
                            <span className="mr-2">⚡</span> Strategic Recommendations
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {result.globalRecommendations.map((rec, idx) => (
                                <div key={idx} className="bg-white p-4 rounded border border-blue-100 shadow-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-gray-800 text-sm">{rec.title}</h4>
                                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${rec.priority === 'high' ? 'bg-red-100 text-red-700' :
                                                rec.priority === 'medium' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {rec.priority}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-600">{rec.description}</p>
                                    <p className="text-xs font-semibold text-[#007185] mt-2">Impact: {rec.expectedImpact}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Regional Data Grid */}
                    <div>
                        <h3 className="text-lg font-bold text-[#232f3e] mb-4">Regional Breakdown</h3>
                        <DataGrid
                            data={result.regionRisks}
                            columns={columns}
                            title={`Analysis for ${result.timeHorizon}`}
                        />
                    </div>

                </div>
            )}
        </div>
    );
}
