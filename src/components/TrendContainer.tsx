import React from 'react'
import styled from '@emotion/styled'
import GetTrends from '../services/TrendRetriever'
import { SpinningLoader } from './Loading'
import useDropdown from './useDropdown'

const Body = styled.div`
    background: #76323f;

    height: 100%;
    width: 100%;
    padding-bottom: 32%;
    margin: 10px;

    border-radius: 12px;
    box-shadow: 5px 5px 5px grey;
`

const Trend = styled.div`
    background: #565656;

    margin: 4px auto;
    padding: 3px;
    height: 100%;
    width: 80%;

    border-radius: 12px;
`

const UnorderedList = styled.ul`
    color: white;
    font: 1em 'Quicksand', sans-serif;
`

const Dropdown = styled.div`
    margin: 4px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font: 1em 'Quicksand', sans-serif;
`

// TODO: This will be populated by an API call. This API call will retrieve all WOEID's
// and generate a dictionary if ID's to city/regions so that we can display the region
// on the dropdown menu and return the corresponding ID to the Twitter API.
// TEMPORARY TESTING VALUES: 1 = world, 2459115 = New York, 2442047 = Los Angeles, 4118 = Toronto, 615702 = Paris
const REGIONS: Array<string> = ['1', '2459115', '2442047', '4118', '615702']

const TrendContainer = () => {
    const [region, CountryDropdown] = useDropdown(
        'Trend Regions ',
        '1',
        REGIONS
    )
    const trending = GetTrends(region)
    if (typeof trending === 'object' && trending !== undefined) {
        const content = trending.trends.map((trend) => (
            <Trend>
                <UnorderedList>Hashtag: {trend.name}</UnorderedList>
                <UnorderedList>
                    Number of Tweets: {trend.tweet_volume}
                </UnorderedList>
            </Trend>
        ))
        return (
            <Body>
                <Dropdown>
                    <CountryDropdown />
                </Dropdown>
                {content}
            </Body>
        )
    }

    return (
        <Body>
            <Dropdown>
                <CountryDropdown />
            </Dropdown>
            <SpinningLoader></SpinningLoader>
        </Body>
    )
}

export default TrendContainer
