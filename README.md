# Fulfillment Forecast & Routing Optimizer (FFRO)

> **Role:** Product Management & Systems Architecture  
> **Company:** Amazon (Concept Case Study)  
> **Year:** 2025

**AI-assisted forecasting and routing recommendations for Amazon fulfillment and last-mile operations.**

This project is a high-fidelity MVP of an internal tool designed to help operations planners visualize network risk and make proactive routing decisions.

🔗 **Repository:** [github.com/lelandsequel/amazon-fulfillment-optimizer](https://github.com/lelandsequel/amazon-fulfillment-optimizer)

---

## 🚩 The Problem
Planners rely on fragmented dashboards and manual workflows to identify risk and make routing decisions. This leads to reactive planning, inconsistent service levels (SLA), and suboptimal capacity utilization.

## ⚡ The Solution
FFRO simulates the logic of an expert logistics planner. It ingests scenarios (Origin FCs, Destination Regions, Time Windows) and uses AI to:
1.  **Forecast Risk**: Assign a "Service Level Risk Score" (0-100) to the network and specific regions.
2.  **Identify Drivers**: Pinpoint specific issues like weather events, labor constraints, or carrier capacity.
3.  **Recommend Actions**: Provide strategic, prioritized routing changes to mitigate risk.

## 🚀 Key Impacts
-   **Improved SLA performance** through early detection of regional stress zones.
-   **Faster, more consistent routing decisions** across regions.
-   **Reduced operational cost** from better utilization and capacity balancing.

## 🛠️ Tech Stack
-   **Framework**: Next.js 16 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS 4 (Amazon-inspired aesthetic)
-   **AI Engine**: OpenAI GPT-4o (via Node SDK)

## 📦 Getting Started

1.  **Clone the repo**:
    ```bash
    git clone https://github.com/lelandsequel/amazon-fulfillment-optimizer.git
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment**:
    Rename `.env.example` to `.env` and add your OpenAI API Key:
    ```env
    OPENAI_API_KEY=sk-...
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

---

*This is a conceptual case-study tool built for a product management portfolio. It is not an official Amazon product.*
