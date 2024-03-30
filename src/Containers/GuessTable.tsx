import React from "react"
import Table from "@mui/joy/Table"
import GuessTableRow from "../Components/GuessTableRow"

export default function GuessTable({vals, answer}: {vals: string[], answer: string}) {
    vals = vals.concat(Array(5-vals.length).fill(""))
    return (
        <Table sx={{maxWidth: "15rem"}}>
            <tbody>
            {vals.map(v => <GuessTableRow value={v} answer={answer} />)}
            </tbody>
        </Table>
    )
}