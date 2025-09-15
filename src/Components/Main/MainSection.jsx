import styled from "styled-components"
import { TrendingSection } from "../TrendingSection/TrendingSection"
import { PopularArtist } from "../PopularArtist/PopularArtist"

const MainSectionContainer = styled.main`
width:75%;
border:2px solid yellow;
overflow-y:scroll;
`
export const MainSection = () => {
    return (<MainSectionContainer>
        {/* <h1>Main section</h1> */}
        <TrendingSection />
        <PopularArtist />
    </MainSectionContainer>)
}