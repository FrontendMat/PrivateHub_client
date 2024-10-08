import React, {type ErrorInfo, type ReactNode, Suspense} from 'react';
import {PageError} from "widgets/PageError/PageError";

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (error: Error) {
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo)
    }

    render () {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError) {
            return (
                <Suspense fallback=''>
                    <div style={{height: "100vh"}}>
                        <PageError
                            errorBoundary={true}
                        />
                    </div>
                </Suspense>
            )
        }
        return children
    }
}

export default ErrorBoundary
