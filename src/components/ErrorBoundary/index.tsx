import Router from "next/router";
import React, { ErrorInfo } from "react";

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): IState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong.</h1>

          <p>We are sorry for the inconvenience. Please try again later.</p>

          <button onClick={() => Router.reload()} />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
