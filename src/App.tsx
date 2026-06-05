import { useEffect, useState } from "react";
import "./index.css";

const waliworksUrls = ["http://127.0.0.1:5173", "http://127.0.0.1:5174", "http://127.0.0.1:5175"];

export function App() {
  const [status, setStatus] = useState<"checking" | "available" | "unavailable">("checking");
  const [availableUrl, setAvailableUrl] = useState(waliworksUrls[0]);

  useEffect(() => {
    let isMounted = true;

    async function checkWaliworksServer() {
      for (const url of waliworksUrls) {
        try {
          const response = await fetch(url, { cache: "no-store" });
          const html = await response.text();

          if (!html.includes("Waliworks")) {
            continue;
          }

          if (!isMounted) return;
          setAvailableUrl(url);
          setStatus("available");

          window.setTimeout(() => {
            window.location.href = url;
          }, 700);
          return;
        } catch {
          // Try the next likely Vite dev-server port.
        }
      }

      if (isMounted) {
        setStatus("unavailable");
      }
    }

    checkWaliworksServer();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 px-5 py-12 text-zinc-100">
      <section className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-3xl items-center">
        <div className="w-full rounded-xl border border-white/10 bg-neutral-900/90 p-6 shadow-2xl shadow-black/40 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Waliworks fallback</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-white sm:text-6xl">
            Wrong dev server
          </h1>
          <p className="mt-5 text-lg text-zinc-300">
            You are seeing this because <strong className="text-white">localhost:3000</strong> is the parent Bun
            starter app. The Waliworks Vite website runs from the nested project folder.
          </p>

          <div className="mt-8 rounded-lg border border-orange-400/30 bg-orange-500/10 p-5">
            {status === "checking" && <p className="font-bold text-amber-200">Checking for Waliworks on port 5174...</p>}

            {status === "available" && (
              <p className="font-bold text-amber-200">Waliworks is running. Redirecting you now...</p>
            )}

            {status === "unavailable" && (
              <div className="space-y-4">
                <p className="font-bold text-amber-200">Waliworks is not running yet. Start it with:</p>
                <pre className="overflow-x-auto rounded-md bg-black p-4 text-sm text-zinc-100">
                  <code>{`cd waliworks-website
bun install
bun dev -- --host 127.0.0.1`}</code>
                </pre>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-amber-300 px-6 font-black uppercase text-neutral-950 transition hover:-translate-y-1"
              href={availableUrl}
            >
              Open Waliworks
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 font-black uppercase text-white transition hover:-translate-y-1 hover:border-orange-400 hover:text-amber-300"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                window.location.reload();
              }}
            >
              Check Again
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
