import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded shadow p-6 text-center">
        <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
        <p className="text-gray-600 mb-4">
          {error?.message || "An unexpected error occurred while rendering this section."}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default function FunctionalErrorBoundary({ children }) {
  const [resetKey, setResetKey] = useState(0);

  return (
    <ErrorBoundary
      key={resetKey}
      FallbackComponent={ErrorFallback}
      onReset={() => setResetKey(prev => prev + 1)}
    >
      {children}
    </ErrorBoundary>
  );
}
