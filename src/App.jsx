import { useState } from 'react'
import { StyledContainer } from './components/styled'
import { Button } from './components/button'
import { CoolButton, StrongButton } from './components/button/Button.styled'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StyledContainer>
        <h1>Styled container uygulandı</h1>
   
        <Button $primary className="btn">
          incele
        </Button>
        <StrongButton > strong button</StrongButton>
        <CoolButton>coool</CoolButton>
      </StyledContainer>
    </>
  )
}

export default App
