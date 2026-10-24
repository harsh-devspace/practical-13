import React, { useState } from 'react'
import { MemoryRouter, Routes, Route, Link as MemoryLink, useNavigate, useLocation } from 'react-router-dom'
import { Hash, Cpu, Server, CheckCircle, ArrowRight, ArrowLeft, RefreshCw, Smartphone, BookOpen, Layers, Terminal } from 'lucide-react'

// Tab 1: HashRouter Demo Simulation
function HashRouterDemo() {
  const [currentHash, setCurrentHash] = useState('#/home')

  const pages = {
    '#/home': { title: 'Home View', text: 'Welcome to the HashRouter demo! Look at the simulated URL bar above.' },
    '#/catalog': { title: 'Product Catalog', text: 'Browsing products using URL fragment hashes. Notice the "#" character.' },
    '#/settings': { title: 'Settings Panel', text: 'Application configuration loaded without triggering any server HTTP request.' },
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex items-center gap-3 text-amber-400 font-bold text-lg">
          <Hash className="w-6 h-6" /> HashRouter Architecture
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          <strong className="text-white">HashRouter</strong> stores the current location in the <code className="text-amber-400 bg-slate-800 px-1.5 py-0.5 rounded font-mono">hash</code> portion of the URL (after the <code className="text-amber-400">#</code> symbol). The portion after the hash is never sent to the web server, making it resilient on hosts without URL rewrite configuration.
        </p>

        {/* Simulated Browser Address Bar */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Simulated Browser Address Bar</span>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
            <span className="text-emerald-400">https://myapp.github.io/demo/</span>
            <span className="text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded">{currentHash}</span>
          </div>
        </div>

        {/* Hash Navigation Controls */}
        <div className="flex flex-wrap gap-2 pt-2">
          {Object.keys(pages).map((hash) => (
            <button
              key={hash}
              onClick={() => setCurrentHash(hash)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                currentHash === hash
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Navigate to {hash}
            </button>
          ))}
        </div>

        {/* Rendered Component */}
        <div className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
          <h4 className="text-base font-bold text-white">{pages[currentHash]?.title}</h4>
          <p className="text-sm text-slate-300">{pages[currentHash]?.text}</p>
        </div>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 space-y-1">
          <p className="font-semibold">When to use HashRouter:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>Static web hosting where you cannot configure rewrite rules (e.g., GitHub Pages, simple Apache/shared hosting).</li>
            <li>Legacy browser environments without HTML5 History API support.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// MemoryRouter Internal Components
function MemoryHome() {
  return (
    <div className="p-4 space-y-3">
      <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
        <Smartphone className="w-6 h-6" />
      </div>
      <h4 className="text-base font-bold text-white">Memory Router View</h4>
      <p className="text-xs text-slate-400 leading-relaxed">
        This screen is running entirely inside a React <strong className="text-indigo-400">MemoryRouter</strong>. The browser URL has not changed at all!
      </p>
      <div className="pt-2 flex flex-col gap-2">
        <MemoryLink to="/details" className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold text-center">
          Open Details Screen
        </MemoryLink>
        <MemoryLink to="/settings" className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold text-center">
          Device Settings
        </MemoryLink>
      </div>
    </div>
  )
}

function MemoryDetails() {
  const navigate = useNavigate()
  return (
    <div className="p-4 space-y-3">
      <h4 className="text-base font-bold text-white">Product Details Screen</h4>
      <p className="text-xs text-slate-400">Internal state stored in RAM memory array stack.</p>
      <button onClick={() => navigate(-1)} className="px-3 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-1">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </button>
    </div>
  )
}

function MemorySettings() {
  const navigate = useNavigate()
  return (
    <div className="p-4 space-y-3">
      <h4 className="text-base font-bold text-white">Embedded Settings</h4>
      <p className="text-xs text-slate-400">Useful for modal wizards, tests, and React Native mobile apps.</p>
      <button onClick={() => navigate('/')} className="px-3 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold">
        Return to Home
      </button>
    </div>
  )
}

function MemoryRouterDemo() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex items-center gap-3 text-indigo-400 font-bold text-lg">
          <Cpu className="w-6 h-6" /> MemoryRouter Architecture
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          <strong className="text-white">MemoryRouter</strong> keeps the history of your "URL" in memory (does not read or write to the address bar). It is ideal for environments where there is no browser address bar.
        </p>

        {/* Embedded Virtual Device */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full max-w-xs mx-auto rounded-3xl bg-slate-950 border-4 border-slate-800 shadow-2xl p-3 space-y-3">
            <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto"></div>
            <div className="bg-slate-900 rounded-2xl min-h-[260px] border border-slate-800/80 flex flex-col justify-between">
              <MemoryRouter initialEntries={['/']}>
                <div className="p-2 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono text-indigo-400">MemoryDevice</span>
                  <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono">RAM</span>
                </div>
                <div className="flex-1">
                  <Routes>
                    <Route path="/" element={<MemoryHome />} />
                    <Route path="/details" element={<MemoryDetails />} />
                    <Route path="/settings" element={<MemorySettings />} />
                  </Routes>
                </div>
              </MemoryRouter>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <h4 className="text-base font-bold text-white">Key Use Cases for MemoryRouter:</h4>
            <div className="grid gap-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 text-slate-300">
                <strong className="text-indigo-400 block mb-0.5">1. React Native Applications</strong>
                Native mobile apps do not have a web browser URL bar; MemoryRouter provides full navigation stack management without web APIs.
              </div>
              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 text-slate-300">
                <strong className="text-indigo-400 block mb-0.5">2. Automated Unit Tests (Jest, Vitest)</strong>
                Allows testing route components in a pure Node.js headless environment without needing a live browser.
              </div>
              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 text-slate-300">
                <strong className="text-indigo-400 block mb-0.5">3. Multi-Step Modals & Embedded Widgets</strong>
                Independent routing inside a popup or iframe without polluting the main web page's URL history.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// StaticRouter Simulation
function StaticRouterDemo() {
  const [serverRequestUrl, setServerRequestUrl] = useState('/products/101')

  const mockServerPages = {
    '/': { title: 'Landing Page HTML', html: '<div class="home"><h1>Welcome to SSR</h1><p>Rendered on Node.js Server</p></div>' },
    '/products/101': { title: 'Product 101 HTML Snapshot', html: '<article><h2>Ergonomic Chair</h2><span>Price: $299</span><meta seo="true"/></article>' },
    '/about': { title: 'Company Bio HTML', html: '<section><h1>About Us</h1><p>Fast server response for web crawlers.</p></section>' },
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg">
          <Server className="w-6 h-6" /> StaticRouter (Server-Side Rendering)
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          <strong className="text-white">StaticRouter</strong> never changes location. It is used on a Node.js server (e.g. Express, Next.js, Remix) to render React components to static HTML string via <code className="text-cyan-400 font-mono">renderToString()</code> for incoming requests.
        </p>

        <div className="space-y-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Simulate Incoming Server HTTP Request</span>
          <div className="flex flex-wrap gap-2">
            {Object.keys(mockServerPages).map((reqUrl) => (
              <button
                key={reqUrl}
                onClick={() => setServerRequestUrl(reqUrl)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  serverRequestUrl === reqUrl
                    ? 'bg-cyan-500 text-white font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                GET {reqUrl}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Terminal className="w-4 h-4 text-cyan-400" /> Node.js Express Server Code
            </div>
            <pre className="text-cyan-300 overflow-x-auto p-2 bg-slate-900 rounded">
{`import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

app.get('*', (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  res.send(\`<!DOCTYPE html>${html}\`);
});`}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle className="w-4 h-4" /> Generated Server HTML Output
            </div>
            <div className="p-3 bg-slate-900 rounded text-slate-300 space-y-2">
              <div className="text-[11px] text-slate-500">// Response for: {serverRequestUrl}</div>
              <code className="text-emerald-300 block">{mockServerPages[serverRequestUrl]?.html}</code>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 space-y-1">
          <p className="font-semibold">When to use StaticRouter:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>Server-side rendering (SSR) for optimal Search Engine Optimization (SEO).</li>
            <li>Instant initial page paint before client-side hydration.</li>
            <li>Static site generators (SSG) outputting HTML files at build time.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Comparison Table Tab
function ComparisonTable() {
  const routers = [
    {
      name: 'BrowserRouter',
      urlStyle: 'Clean URLs (/about, /shop)',
      serverReq: 'Requires server URL rewrites (e.g. vercel.json / nginx config)',
      useCase: 'Standard modern production Single Page Applications (SPAs)',
      advantage: 'Natural URL formatting, bookmarkable, standard HTML5 history'
    },
    {
      name: 'HashRouter',
      urlStyle: 'Hash fragment (#/about, #/shop)',
      serverReq: 'None! Server only serves index.html once',
      useCase: 'Static hosts without rewrites (GitHub Pages), legacy browsers',
      advantage: 'Zero server configuration required'
    },
    {
      name: 'MemoryRouter',
      urlStyle: 'No URL displayed (in-memory stack)',
      serverReq: 'None',
      useCase: 'React Native, automated Jest/Vitest unit tests, modal wizards',
      advantage: 'Works without any DOM or browser window environment'
    },
    {
      name: 'StaticRouter',
      urlStyle: 'Fixed location provided via location prop',
      serverReq: 'Node.js server runtime',
      useCase: 'Server-Side Rendering (SSR), static site generation (SSG)',
      advantage: 'Maximum SEO indexing and lightning-fast first contentful paint'
    },
  ]

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-400" /> Comprehensive Router Types Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-800/80 text-white uppercase text-[11px] font-semibold">
              <tr>
                <th className="p-3 rounded-l-lg">Router Type</th>
                <th className="p-3">URL Format</th>
                <th className="p-3">Server Requirement</th>
                <th className="p-3">Primary Use Case</th>
                <th className="p-3 rounded-r-lg">Key Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {routers.map((r) => (
                <tr key={r.name} className="hover:bg-slate-800/40">
                  <td className="p-3 font-bold text-white font-mono">{r.name}</td>
                  <td className="p-3 font-mono text-cyan-400">{r.urlStyle}</td>
                  <td className="p-3 text-slate-400">{r.serverReq}</td>
                  <td className="p-3 text-slate-200">{r.useCase}</td>
                  <td className="p-3 text-emerald-400 font-medium">{r.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('hash')

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-white tracking-tight">Router<span className="text-cyan-400">Matrix</span></span>
              <span className="block text-[11px] text-slate-400">Practical 13 • Router Types Analysis</span>
            </div>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">HashRouter • MemoryRouter • StaticRouter</span>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 space-y-6">
        <div className="flex flex-wrap items-center gap-2 bg-slate-900/60 p-2 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTab('hash')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'hash'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Hash className="w-4 h-4" /> 1. HashRouter Demo
          </button>

          <button
            onClick={() => setActiveTab('memory')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'memory'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4" /> 2. MemoryRouter Demo
          </button>

          <button
            onClick={() => setActiveTab('static')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'static'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Server className="w-4 h-4" /> 3. StaticRouter Demo
          </button>

          <button
            onClick={() => setActiveTab('compare')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'compare'
                ? 'bg-slate-800 text-white border border-slate-700 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Comparison Table
          </button>
        </div>

        <div>
          {activeTab === 'hash' && <HashRouterDemo />}
          {activeTab === 'memory' && <MemoryRouterDemo />}
          {activeTab === 'static' && <StaticRouterDemo />}
          {activeTab === 'compare' && <ComparisonTable />}
        </div>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-900/60 py-6 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>React Practical 13 • Router Types Exploration</span>
          <span>HashRouter • MemoryRouter • StaticRouter • Comparison</span>
        </div>
      </footer>
    </div>
  )
}
