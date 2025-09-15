import styled from "styled-components"
import { TrendingCard } from "../TrendingCard/TrendingCard"

const TrendingSectionContainer = styled.div`
border:2px solid red;
width:98%;
height:60%;
margin:auto;
// display:flex;
`
export const TrendingSection = () => {
    return (
        <TrendingSectionContainer>
            <h1>trending section</h1>
            <TrendingCard />
        </TrendingSectionContainer>)
}