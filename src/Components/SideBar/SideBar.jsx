import styled from "styled-components"

const SideBarContainer = styled.div`
border:2px solid green;
width:23%;
`
export const SideBar = () => {
    return (
        <SideBarContainer>
            <h1>sidebar</h1>
        </SideBarContainer>
    )
}