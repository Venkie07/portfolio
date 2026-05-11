import { Component, type ErrorInfo, type ReactNode } from 'react';

/**
 * ErrorBoundary component catches JavaScript errors anywhere in its child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 * This prevents the entire application from crashing when a single component fails.
 */
class ErrorBoundary extends Component<{ children?: ReactNode; fallback?: ReactNode }, { hasError: boolean }> {
  public state = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="h-full w-full flex items-center justify-center text-red-500 font-mono text-sm p-4 text-center bg-red-500/5 rounded-2xl border border-red-500/20">
          <div>
            <p className="font-bold mb-2">UI_ERROR_CAUGHT</p>
            <p className="text-xs opacity-60">Something went wrong while rendering this component.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

