import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDom.render(
    <GoogleOAuthProvider clientId="478680087616-q5o7cpdk6ap4u20p6lqfqvhmerjkllbf.apps.googleusercontent.com">
        <React.StrictMode>
            <Provider store={store}>

                <App />

            </Provider>,
        </React.StrictMode>
    </GoogleOAuthProvider>,
    document.getElementById('root'))