import React from "react"
import Typography from "@mui/joy/Typography"

export default function GameEndedText({hasWon, answer}: {hasWon: boolean, answer: string}) {
    return (
        <>
        {hasWon ? <Typography level="title-lg" textAlign="center">Good job! You have won the game :)<br/>The answer was: {answer}</Typography> :
        <Typography level="title-lg" textAlign="center">Aww.. You didn't manage to win this time :(<br/>The answer was: {answer}</Typography>}
        </>
    )
}