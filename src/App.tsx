import React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import Sheet from "@mui/joy/Sheet"
import Stack from "@mui/joy/Stack"
import Logo from './Components/Logo'
import InputContainer from './Containers/InputContainer'
import GuessTable from './Containers/GuessTable'
import { getWord } from './wordPicker'
import GameEndedText from './Components/GameEndedText'

function App() {
  const [guess, setGuess] = React.useState("")
  const answer = getWord()
  const setAndValidateGuess = (val: string) => {
    if (/^[a-zA-Z]{0,5}$/.test(val)) {
      setGuess(val.toUpperCase())
    }
  }
  const [tries, setTries] = React.useState<string[]>([])
  const [hasWon, setHasWon] = React.useState(false)
  const submitGuess = () => {
    const newTries = [...tries, guess]
    setTries(newTries)
    if (newTries.length === 5 || answer === guess) {
      setHasWon(answer === guess)
    }
    setGuess("")
  }
  return (
    <CssVarsProvider defaultMode="dark">
      <Sheet variant="outlined" sx={{ height: "100vh", border: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
        <Stack justifyContent="flex-start" alignItems="center" spacing={4} py={2}>
          <Logo/>
          <GuessTable answer={answer} vals={tries}/>
          {tries.length === 5 || hasWon ? <GameEndedText hasWon={hasWon} answer={answer} /> :
          <InputContainer value={guess} setValue={setAndValidateGuess} submit={submitGuess} />}
        </Stack>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App
