export default function Footer() {
  return (
    <footer className="w-full bg-transparent py-2 mt-auto">
      <div className="mx-auto max-w-5xl px-6 flex flex-col gap-1 text-xs font-mono text-zinc-500">
        <div>
          © {new Date().getFullYear()} Ved Mitra Verma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}