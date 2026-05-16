import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong</h1>
                    <p className="text-gray-600 mb-6">An unexpected error occurred. Please try refreshing the page.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 text-white bg-gray-800 hover:bg-gray-900 rounded-lg font-medium"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}
