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
// 1 = world, 2459115 = New York, 2442047 = Los Angeles, 4118 = Toronto, 615702 = Paris
const REGIONS: Array<string> = ['1', '2459115', '2442047', '4118', '615702']

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
