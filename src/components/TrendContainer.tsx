import React from 'react';
import styled from "@emotion/styled";

const Body = styled.div`
    background: #cd65d4;

    height: 300px;
    width: 25%;
    padding-bottom: 32%;
    margin-bottom: 2%;
    margin-top: 2%; 

    border-radius: 12px;
    border: 2px solid white;
    box-shadow: 5px 5px 5px grey;
`;

export default function TrendContainer() {
    return (
        <Body></Body>
    );
}