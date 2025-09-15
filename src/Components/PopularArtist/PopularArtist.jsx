import styled from "styled-components"
import { ArtistCard } from "../Artist/ArtistCard"

const PopularArtistMainContainer = styled.div`
border:2px solid yellow;
width:98%;
margin:auto;
height:50%;
`
export const PopularArtist = () => {
    return (
        <PopularArtistMainContainer>
            <h1>Popular Artist</h1>
            <ArtistCard />
        </PopularArtistMainContainer>)
}