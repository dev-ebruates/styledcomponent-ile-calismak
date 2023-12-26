import { useState } from 'react'
import { StyledContainer } from './components/styled'
import { Button } from './components/button'
import { CoolButton, StrongButton, SubmitButton } from './components/button/Button.styled'
import { FaChildReaching } from "react-icons/fa6";
import styled, { keyframes } from 'styled-components';
//styled dan gelen özellik from nereden başlayacak nereye kadar to
const rotate = keyframes`
from{
 transform: rotate(0deg);
}
to{
 transform: rotate(360deg);
}
`
const StyledImg = styled.img`
width: 100%;
padding: 4px;
border: 1px solid #bdc3c7;
border-radius: 10px;

//üzerine geldiğinde çalışssın istedik
&:hover{
  animation: ${rotate} 10s linear infinite;
}
`

const FaChildStyledIcon = styled(FaChildReaching)`
font-size: 40px;
animation: ${rotate} 3s linear infinite;
color: ${(props)=>props.theme.colors.faChild}
`
//3sn infinite sonsuza kadar dönsün




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <StyledContainer>
        <StyledImg src='https://picsum.photos/id/237/700/300'/>
        <hr/>
        <FaChildStyledIcon/>
        <h1>Styled container uygulandı</h1>
        <Button $primary className="btn" style={{marginBottom : "5px"}}>
          incele
        </Button>
        <br/>
        <StrongButton  $primary> strong button</StrongButton>
        <br/>
        <CoolButton  as ="a" href="http://google.com" target="_blank">coool</CoolButton>
        <br/>
        <SubmitButton $primary>
          Kaydet
        </SubmitButton>
      </StyledContainer>
    </>
  )
}

export default App
