import React, { useState } from "react";
import {
  ShieldCheck,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Loader2,
  Play,
  Bug,
  Monitor,
  Search,
  ChevronRight,
  RefreshCw,
  Info,
} from "lucide-react";

export default function TestingPage() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("idle");
  const [selectedTest, setSelectedTest] = useState("valid");
  const [showDetails, setShowDetails] = useState(false);

  const tests = [
    {
      id: "valid",
      title: "Valid URL",
      description: "Test a successful scan workflow.",
      icon: CheckCircle,
      color: "text-green-400",
    },
    {
      id: "invalid",
      title: "Invalid URL",
      description: "Check URL validation and error messages.",
      icon: XCircle,
      color: "text-red-400",
    },
    {
      id: "failed",
      title: "Failed Scan",
      description: "Simulate a scanner failure.",
      icon: AlertTriangle,
      color: "text-orange-400",
    },
    {
      id: "empty",
      title: "No Vulnerabilities",
      description: "Display an empty results page.",
      icon: ShieldCheck,
      color: "text-blue-400",
    },
    {
      id: "timeout",
      title: "Scanner Timeout",
      description: "Simulate a scan taking too long.",
      icon: Clock,
      color: "text-yellow-400",
    },
  ];

  const startTest = () => {
    setShowDetails(false);

    if (selectedTest === "invalid") {
      setStatus("invalid");
      return;
    }

    if (
      selectedTest === "valid" &&
      !/^https?:\/\/.+\..+/i.test(url.trim())
    ) {
      setStatus("invalid");
      return;
    }

    if (selectedTest === "failed") {
      setStatus("failed");
      return;
    }

    if (selectedTest === "empty") {
      setStatus("empty");
      return;
    }

    if (selectedTest === "timeout") {
      setStatus("timeout");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
    }, 3000);
  };

  const resetTest = () => {
    setStatus("idle");
    setShowDetails(false);
  };

  const currentTest = tests.find((test) => test.id === selectedTest);

  return (
    <div className="min-h-screen bg-[#050510] text-white">

      {/* Header */}
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <div>
          <h1 className="text-xl font-bold">
            <span className="text-fuchsia-500">Fortexa</span>
            <span className="text-gray-400"> / System Testing</span>
          </h1>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          System Active
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 p-6 md:p-10">

        {/* Page Title */}
        <section>
          <h2 className="text-3xl font-bold">
            UI States & Testing
          </h2>
          <p className="mt-2 text-gray-400">
            Test application workflows, error handling and system responses.
          </p>
        </section>

        {/* System Status Cards */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "System Status",
              value: "Operational",
              icon: Activity,
              color: "text-green-400",
            },
            {
              title: "Test Scenarios",
              value: "05",
              icon: Monitor,
              color: "text-purple-400",
            },
            {
              title: "Current State",
              value: status === "idle" ? "Ready" : status,
              icon: ShieldCheck,
              color: "text-fuchsia-400",
            },
            {
              title: "Scan Engine",
              value: "Available",
              icon: Search,
              color: "text-blue-400",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#111120] p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">{item.title}</p>
                <item.icon className={item.color} size={21} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                {item.value}
              </h3>
            </div>
          ))}
        </section>

        {/* Test Scenarios */}
        <section className="rounded-xl border border-white/10 bg-[#10101d] p-6">

          <h3 className="mb-2 text-xl font-semibold">
            Test Scenarios
          </h3>
          <p className="mb-6 text-sm text-gray-400">
            Select a scenario to preview the corresponding UI state.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {tests.map((test) => (
              <button
                key={test.id}
                onClick={() => {
                  setSelectedTest(test.id);
                  resetTest();
                }}
                className={`rounded-xl border p-4 text-left transition ${
                  selectedTest === test.id
                    ? "border-fuchsia-500 bg-fuchsia-500/10"
                    : "border-white/10 bg-[#171727] hover:border-purple-500/50"
                }`}
              >
                <test.icon className={test.color} size={25} />

                <h4 className="mt-4 font-semibold">
                  {test.title}
                </h4>

                <p className="mt-2 text-xs leading-5 text-gray-400">
                  {test.description}
                </p>
              </button>
            ))}

          </div>
        </section>

        {/* Test Configuration */}
        <section className="rounded-xl border border-white/10 bg-[#10101d] p-6">

          <h3 className="text-xl font-semibold">
            Run Test
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Configure your test scenario and start the workflow.
          </p>

          <label className="mt-6 block text-sm text-gray-300">
            Target URL
          </label>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="min-w-0 flex-1 rounded-lg border border-white/10 bg-[#080815] px-4 py-3 text-white outline-none focus:border-fuchsia-500"
            />

            <button
              onClick={startTest}
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 rounded-lg bg-fuchsia-600 px-6 py-3 font-semibold transition hover:bg-fuchsia-500 disabled:opacity-50"
            >
              <Play size={17} />
              Run Test
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-gray-400">
              Selected: <span className="text-fuchsia-400">{currentTest.title}</span>
            </p>

            <button
              onClick={resetTest}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
            >
              <RefreshCw size={15} />
              Reset
            </button>
          </div>

        </section>

        {/* Result Preview */}
        <section className="rounded-xl border border-white/10 bg-[#10101d] p-6">

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Test Result Preview
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Application response for the selected test.
              </p>
            </div>

            <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-400">
              Preview
            </span>
          </div>

          {/* Idle */}
          {status === "idle" && (
            <div className="rounded-xl border border-dashed border-white/20 p-12 text-center">
              <Bug className="mx-auto text-gray-500" size={40} />
              <h4 className="mt-4 font-semibold">Ready to Test</h4>
              <p className="mt-2 text-sm text-gray-400">
                Select a test scenario and click Run Test.
              </p>
            </div>
          )}

          {/* Loading */}
          {status === "loading" && (
            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-12 text-center">
              <Loader2 className="mx-auto animate-spin text-fuchsia-400" size={42} />
              <h4 className="mt-4 font-semibold text-fuchsia-400">
                Scan in Progress
              </h4>
              <p className="mt-2 text-sm text-gray-400">
                Initializing scanner and analyzing target URL...
              </p>
              <div className="mx-auto mt-6 h-2 max-w-md overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-2/3 animate-pulse rounded-full bg-fuchsia-500" />
              </div>
            </div>
          )}

          {/* Success */}
          {status === "success" && (
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-8">
              <CheckCircle className="text-green-400" size={40} />
              <h4 className="mt-4 text-lg font-semibold text-green-400">
                Scan Completed Successfully
              </h4>
              <p className="mt-2 text-sm text-gray-400">
                Target: {url}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Test scan finished. Sample findings are available.
              </p>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="mt-5 flex items-center gap-2 rounded-lg bg-fuchsia-600 px-5 py-3 text-sm font-semibold hover:bg-fuchsia-500"
              >
                View Finding Details <ChevronRight size={17} />
              </button>

              {showDetails && (
                <div className="mt-5 rounded-lg border border-white/10 bg-[#080815] p-5">
                  <p className="font-semibold text-red-400">
                    Sample Finding: SQL Injection
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    Description: User input may be improperly handled in a database query.
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    Prevention: Use parameterized queries and validate input.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Invalid URL */}
          {status === "invalid" && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-8">
              <XCircle className="text-red-400" size={40} />
              <h4 className="mt-4 font-semibold text-red-400">
                Invalid URL
              </h4>
              <p className="mt-2 text-sm text-gray-400">
                Please enter a valid URL beginning with http:// or https://.
              </p>
            </div>
          )}

          {/* Failed Scan */}
          {status === "failed" && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-8">
              <AlertTriangle className="text-red-400" size={40} />
              <h4 className="mt-4 font-semibold text-red-400">
                Scan Failed
              </h4>
              <p className="mt-2 text-sm text-gray-400">
                Unable to complete the security assessment. Please try again.
              </p>
            </div>
          )}

          {/* Empty Results */}
          {status === "empty" && (
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-8 text-center">
              <ShieldCheck className="mx-auto text-blue-400" size={42} />
              <h4 className="mt-4 font-semibold text-blue-400">
                No Vulnerabilities Found
              </h4>
              <p className="mt-2 text-sm text-gray-400">
                No findings were detected in this test scan.
              </p>
            </div>
          )}

          {/* Timeout */}
          {status === "timeout" && (
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-8">
              <Clock className="text-yellow-400" size={40} />
              <h4 className="mt-4 font-semibold text-yellow-400">
                Scanner Timeout
              </h4>
              <p className="mt-2 text-sm text-gray-400">
                The scan exceeded the allowed time. Please retry later.
              </p>
            </div>
          )}

        </section>

        {/* Workflow */}
        <section className="rounded-xl border border-white/10 bg-[#10101d] p-6">

          <h3 className="mb-6 text-xl font-semibold">
            Workflow Testing
          </h3>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Valid URL",
              "Start Scan",
              "Scanning",
              "Results",
              "Finding Details",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-lg bg-[#191929] p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fuchsia-600/20 text-sm text-fuchsia-400">
                  {index + 1}
                </span>
                <span className="text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <Info size={18} className="shrink-0 text-purple-400" />
              Test scenarios above simulate interface states. Connect the
              scanner API to test actual vulnerability scanning and backend failures.
            </div>
          </div>

        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
          Fortexa Security Scanner • UI Testing & Integration
        </footer>

      </main>
    </div>
  );
}
