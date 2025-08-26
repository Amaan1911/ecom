import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You could log this to an error reporting service
    // console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-white rounded shadow p-6 text-center">
            <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
            <p className="text-gray-600 mb-4">An unexpected error occurred while rendering this section.</p>
            <button onClick={this.handleRetry} className="bg-blue-600 text-white px-4 py-2 rounded">Try again</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
