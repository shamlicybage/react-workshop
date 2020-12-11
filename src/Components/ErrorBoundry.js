import React, { Component } from 'react';


class ErrorBoundry extends Component {
    state={
        error:null
    };
    static getDerivedStateFromError(error){
        return{
            error,
        }
    }
    render() {
        const hasError= !!this.state.error
        return hasError?(
            <div>
                <h1>Something went wrong</h1>
                <p>{this.state.error.message}</p>
            </div>
        ):(this.props.children);
    }
}


export default ErrorBoundry;