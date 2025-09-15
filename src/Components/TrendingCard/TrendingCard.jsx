import styled from "styled-components"

const TrendingCardMainContainer = styled.div`
border:2px solid blue;
display:flex;
`
const CardContainer = styled.div``
const arr = [1, 2, 3, 4, 5]

export const TrendingCard = () => {
    return (
        <TrendingCardMainContainer>
            {arr.map((songList, index) => {
                return <CardContainer>
                    <h1>Trending card</h1>
                </CardContainer>

            })}

        </TrendingCardMainContainer>
    )
}