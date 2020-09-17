import React from 'react'
import styled from '@emotion/styled'
import TrendContainer from './TrendContainer'

const Body = styled.div`
    background: #d7cec7;
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
`

const Layout = () => {
    return (
        <Body>
            <TrendContainer />
            <TrendContainer />
            <TrendContainer />
        </Body>
    )
}

export default Layout
