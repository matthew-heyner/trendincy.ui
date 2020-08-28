import React from 'react';
import styled from '@emotion/styled';
import TrendContainer from './TrendContainer';

const Body = styled.div`
    background: #D4CF65;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 5px;
`;

export default function Layout() {
    return (
        <Body>
            <TrendContainer />
            <TrendContainer />
            <TrendContainer />
            <TrendContainer />
        </Body>
    );
};