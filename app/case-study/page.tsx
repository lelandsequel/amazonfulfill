import React from "react";

export default function FFROCaseStudy() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-6 space-y-16">
            {/* HEADER */}
            <section className="space-y-4">
                <h1 className="text-4xl font-bold">
                    Fulfillment Forecast & Routing Optimizer (FFRO)
                </h1>
                <p className="text-xl text-gray-600">
                    AI-assisted capacity forecasting and routing recommendations for Amazon Operations.
                </p>
                <p className="text-gray-500">Leland Jourdan II • JourdanLabs • 2025</p>
            </section>

            {/* NETWORK COMPLEXITY & CHALLENGES */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Network Complexity & Challenges</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        <strong>Rapid Fluctuations:</strong> Regional demand spikes, carrier availability changes, and weather disruptions.
                    </li>
                    <li>
                        <strong>Current Reality:</strong> Planning relies on static dashboards, manual forecasting, and spreadsheets.
                    </li>
                    <li>
                        <strong>The Problem:</strong> Bottlenecks are discovered too late, with no clear prioritization.
                    </li>
                    <li>
                        <strong>The Need:</strong> A shift from reactive firefighting to proactive, AI-driven intelligence.
                    </li>
                </ul>
            </section>

            {/* FFRO SOLUTION OVERVIEW */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">FFRO Solution Overview</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        <strong>Predicts SLA Risk:</strong> Identifies potential service level failures before they occur.
                    </li>
                    <li>
                        <strong>Surfaces Bottlenecks:</strong> Region-by-region capacity imbalance detection.
                    </li>
                    <li>
                        <strong>Recommends Routing Shifts:</strong> Suggests concrete percentage adjustments to increase efficiency.
                    </li>
                    <li>
                        <strong>Rapid What-If Scenarios:</strong> Planners test assumptions instantly.
                    </li>
                </ul>
            </section>

            {/* USER PERSONAS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">User Personas</h2>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-bold">Regional Operations Planner</h3>
                        <p><strong>Primary User:</strong> Needs early warnings of capacity risks and routing recommendations.</p>
                        <p><strong>Pain Points:</strong> Overwhelming data volume and time pressure.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold">Fulfillment Center Manager</h3>
                        <p><strong>Secondary User:</strong> Needs to understand how volume shifts affect local FC utilization.</p>
                        <p><strong>Pain Points:</strong> Reactive planning and lack of upstream visibility.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold">Last-Mile Delivery Supervisor</h3>
                        <p><strong>Tertiary User:</strong> Needs forecasts on DSP capacity and bottleneck identification.</p>
                        <p><strong>Pain Points:</strong> Late notification of volume surges.</p>
                    </div>
                </div>
            </section>

            {/* HOW FFRO WORKS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">How FFRO Works</h2>

                <h3 className="text-xl font-semibold">Input</h3>
                <ul className="list-disc ml-6">
                    <li>Origin FC(s)</li>
                    <li>Destination Regions</li>
                    <li>Time Window (1–14 days)</li>
                    <li>Optional Assumptions</li>
                </ul>

                <h3 className="text-xl font-semibold pt-4">AI Processing</h3>
                <ul className="list-disc ml-6">
                    <li>Forecast Demand</li>
                    <li>Regional Capacity</li>
                    <li>Carrier Availability</li>
                    <li>Historic Bottlenecks</li>
                </ul>

                <h3 className="text-xl font-semibold pt-4">Output</h3>
                <ul className="list-disc ml-6">
                    <li>Risk Score (0–100)</li>
                    <li>Regional Breakdown</li>
                    <li>Routing Recommendations</li>
                    <li>Interactive “What-If” Scenarios</li>
                </ul>
            </section>

            {/* ACTIONABLE RECOMMENDATIONS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Actionable Recommendations</h2>

                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        <strong>Region 7A:</strong> 84% SLA stress probability. Capacity shortfall of 12%.
                        <em>Recommendation:</em> Shift 2.5% of load to Region 7D.
                    </li>
                    <li>
                        <strong>FC CLTI:</strong> Expected to exceed optimal load by 9%.
                        <em>Recommendation:</em> Rebalance 11% of outbound volume to RDU2.
                    </li>
                    <li>
                        <strong>Carrier Blue Logistics:</strong> 15% lower reliability than baseline.
                        <em>Recommendation:</em> Route 18% of volume to carriers X and Y.
                    </li>
                </ul>
            </section>

            {/* MVP FEATURES */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">MVP Core Features</h2>

                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Risk Prediction:</strong> SLA failure identification via minimal inputs.</li>
                    <li><strong>Routing Recommendations:</strong> Data-driven regional and carrier shifts.</li>
                    <li><strong>Scenario Simulation:</strong> Instant recalculation of risk based on adjustments.</li>
                </ul>
            </section>

            {/* USER EXPERIENCE FLOW */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">User Experience Flow</h2>

                <ol className="list-decimal ml-6 space-y-2">
                    <li>Input Entry — Enter constraints and forecast assumptions.</li>
                    <li>Analyze — AI engine processes data.</li>
                    <li>Results — View risk score & recommendations.</li>
                    <li>Scenario Test — Adjust assumptions & rerun.</li>
                    <li>Export & Action — Share results & implement shifts.</li>
                </ol>
            </section>

            {/* BUSINESS IMPACT */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Business Impact & Metrics</h2>

                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        <strong>Reduces SLA Breaches:</strong> Predictive alerts reduce surprises 3–14 days ahead.
                    </li>
                    <li>
                        <strong>Increases Planning Efficiency:</strong> 50% reduction in manual scenario testing.
                    </li>
                    <li>
                        <strong>Improves Routing Decisions:</strong> Structured recommendations optimize cost & speed.
                    </li>
                    <li>
                        <strong>Standardizes Excellence:</strong> 90% planner adoption rate across regions.
                    </li>
                </ul>
            </section>

            {/* FUTURE ROADMAP */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Future Roadmap</h2>

                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        <strong>v1.0 MVP (8–12 weeks):</strong> Core risk prediction & routing intelligence.
                    </li>
                    <li>
                        <strong>v1.5 Enhanced Data (+12 weeks):</strong> Real data integration & region-specific models.
                    </li>
                    <li>
                        <strong>v2.0 Advanced Intelligence (+16 weeks):</strong> Multi-region optimization & daily digests.
                    </li>
                    <li>
                        <strong>v3.0 Full Platform (+20 weeks):</strong> Simulation engine, ML models, full Ops integration.
                    </li>
                </ul>
            </section>
        </div>
    );
}
