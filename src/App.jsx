import styled from "styled-components"
import { Navbar } from "./Components/Navbar/Navbar"
import { SideBar } from "./Components/SideBar/SideBar"
import { MainSection } from "./Components/Main/MainSection"

const MainContainer = styled.div`
border:2px solid blue;
height:100vh;
`
const MainSectionContainer = styled.div`
border:2px solid red;
display:flex;
height:90%;
justify-content:space-evenly;
`
const App = () => {
  return (
    <>
      <MainContainer>
        <Navbar />
        <MainSectionContainer>
          <SideBar />
          <MainSection />
        </MainSectionContainer>
      </MainContainer >
    </>
  )
}

export default App