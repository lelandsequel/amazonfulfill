import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'FFRO – Fulfillment Forecast & Routing Optimizer',
  description:
    'Amazon-inspired internal tool concept for forecasting fulfillment risk and routing recommendations.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F5F5F2] text-[#111827] antialiased">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-8">
          <header className="mb-8 flex flex-col gap-3 border-b border-gray-200 pb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Link href="/" className="hover:underline">
                <h1 className="text-2xl font-semibold tracking-tight inline-block">
                  JourdanLabs
                </h1>
              </Link>
              <div className="inline-block mx-3 h-6 w-px bg-gray-300 align-middle"></div>
              <Link href="/projects/ffro" className="inline-block align-middle text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                FFRO Case Study
              </Link>
              <p className="mt-1 text-sm text-gray-600">
                A systems-driven portfolio of product innovation, prototypes, and technical product management by <span className="font-medium">Leland Jourdan II</span>.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span className="rounded-full bg-[#0C2340] px-3 py-1 text-[11px] font-medium text-white">
                Systems thinking
              </span>
              <span className="rounded-full bg-[#1D4E89] px-3 py-1 text-[11px] font-medium text-white">
                Product & Architecture
              </span>
              <span className="rounded-full bg-[#6AAEDB] px-3 py-1 text-[11px] font-medium text-[#0C2340]">
                Prototypes in production
              </span>
            </div>
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
