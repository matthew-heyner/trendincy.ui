import React from 'react'
import styled from '@emotion/styled'
import TrendContainer from './TrendContainer'
import useDropdown from './useDropdown'

const Body = styled.div`
    background: #d4cf65;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 5px;
`

const REGIONS: Array<string> = ['1']

const Layout = () => {
    const [region, CountryDropdown] = useDropdown(
        'Trend Regions: ',
        '1',
        REGIONS
    )
    return (
        <Body>
            <CountryDropdown />
            <TrendContainer regions={region} />
        </Body>
    )
}

export default Layout
