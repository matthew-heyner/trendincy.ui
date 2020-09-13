import React from 'react'
import styled from '@emotion/styled'
import GetTrends from '../services/TrendRetriever'
import { SpinningLoader } from './Loading'

export interface TrendsProps {
    regions: string
}

const Body = styled.div`
    background: #cd65d4;

    height: 100%;
    width: 100%;
    padding-bottom: 32%;
    margin-bottom: 2%;
    margin-top: 2%;

    border-radius: 12px;
    border: 2px solid white;
    box-shadow: 5px 5px 5px grey;
`

const TrendContainer = (prop: { regions: string }) => {
    const trending = GetTrends(prop)
    if (typeof trending === 'object' && trending !== undefined) {
        const content = trending.trends.map((trend) => (
            <div>
                <li>{trend.name}</li>
                <li>{trend.tweet_volume}</li>
            </div>
        ))
        return <Body>{content}</Body>
    }

    return (
        <Body>
            <SpinningLoader></SpinningLoader>
        </Body>
    )
}

export default TrendContainer
