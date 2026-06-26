export default function DownloadResume() {
    return (
    <div>
        <a
        href="/resume-main.pdf"
        download="Ved_Mitra_Verma_resume.pdf"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-750 text-white font-mono text-sm font-medium rounded-xl border border-zinc-700 shadow-md transition-all duration-200 active:scale-95"
        >
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-green-400"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Get my resume
        </a>
    </div>
  );
}