import React from 'react'
import styled from '@emotion/styled'
import GetTrends from '../services/TrendRetriever'

export interface TrendsProps {
    regions: string
}

const Body = styled.div`
    background: #cd65d4;

    height: 100%;
    width: 25%;
    padding-bottom: 32%;
    margin-bottom: 2%;
    margin-top: 2%;

    border-radius: 12px;
    border: 2px solid white;
    box-shadow: 5px 5px 5px grey;
`

const TrendContainer = (prop: { regions: string }) => {
    const trends = JSON.stringify(GetTrends(prop), null, 2)
    return (
        <Body>
            <pre>{trends}</pre>
        </Body>
    )
}

export default TrendContainer
