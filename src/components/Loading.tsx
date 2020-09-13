import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 28px;
    margin: -14px 0 0 -14px;
`

const Spin = keyframes`
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
`
const Spinner = styled.div`
    position: absolute;
    left: 1px;
    top: 1px;
    width: 26px;
    height: 26px;
    animation: ${Spin} 1s infinite linear;
`

const Mask = styled.div`
    width: 12px;
    height: 12px;
    overflow: hidden;
`

const MaskedCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 12px;
    border: 3px solid white;
`

export const SpinningLoader = () => {
    return (
        <Loading>
            <Spinner>
                <Mask>
                    <MaskedCircle></MaskedCircle>
                </Mask>
            </Spinner>
        </Loading>
    )
}
