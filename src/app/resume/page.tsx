"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the PDF viewer and completely disable SSR for it
const ResumeViewer = dynamic(() => import('@/components/ResumeViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center bg-zinc-900 border border-zinc-800 p-2 sm:p-6 rounded-3xl shadow-xl max-w-full overflow-hidden transition-all duration-300">
      <div className="text-emerald-400 font-medium animate-pulse py-20 px-10">
        Loading PDF Viewer...
      </div>
    </div>
  ),
});

export default function ResumePage() {
  return (
    <div className="min-h-screen py-24 px-4 flex flex-col items-center">
      
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-foreground tracking-tight">My Resume</h1>
      </div>
      
      {/* Dynamic Resume Viewer Container (SSR Disabled) */}
      <ResumeViewer />
      
      {/* Download Button */}
      <div className="mt-12">
        <a 
          href="/resume-main.pdf" 
          download 
          className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-3.5 rounded-full font-bold hover:bg-emerald-400 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </a>
      </div>
    </div>
  );
}