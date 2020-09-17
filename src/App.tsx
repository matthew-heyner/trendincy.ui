import React from 'react'
import { Global, css } from '@emotion/core'
import Header from './components/Header'
import Layout from './components/Layout'

export default function App() {
    return (
        <div>
            <Global
                styles={css`
                    body {
                        background: #eae7dc;
                        margin: 0;
                        padding: 0;
                        min-height: '100vh';
                        max-width: '100vw';
                    }
                `}
            />
            {/* <Header /> */}
            <Layout />
        </div>
    )
}
