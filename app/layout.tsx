import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'FFRO – Fulfillment Forecast & Routing Optimizer',
  description:
    'Amazon-inspired internal tool concept for forecasting fulfillment risk and routing recommendations.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F3F4F6] text-[#111827] antialiased">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-10 pt-8">
          <header className="mb-6 border-b border-gray-200 pb-4">
            <h1 className="text-2xl font-semibold tracking-tight">
              Fulfillment Forecast & Routing Optimizer (FFRO)
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Amazon operations–style internal tool for assessing fulfillment risk and routing options.
            </p>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-8 border-t border-gray-200 pt-3 text-xs text-gray-500">
            <p>
              Conceptual case-study tool built for an Amazon product management portfolio. Not affiliated with Amazon.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
