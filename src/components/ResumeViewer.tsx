"use client";

import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageWidth, setPageWidth] = useState<number>(800);

  // Safely get window width on the client-side
  useEffect(() => {
    const updateWidth = () => {
      setPageWidth(Math.min(window.innerWidth - 48, 850));
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center bg-zinc-900 border border-zinc-800 p-2 sm:p-6 rounded-3xl shadow-xl max-w-full overflow-hidden transition-all duration-300">
      <Document
        file="/resume-main.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex flex-col gap-6"
        loading={
          <div className="text-emerald-400 font-medium animate-pulse py-20 px-10">
            Loading PDF Document...
          </div>
        }
      >
        {Array.from(new Array(numPages || 0), (el, index) => (
          <div key={`page_${index + 1}`} className="rounded-xl overflow-hidden border border-zinc-700 shadow-md">
            <Page
              pageNumber={index + 1}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              width={pageWidth}
            />
          </div>
        ))}
      </Document>
    </div>
  );
}
