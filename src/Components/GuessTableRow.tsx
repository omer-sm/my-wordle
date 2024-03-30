import React from "react"

enum Colors {
    None,
    Yellow,
    Green
}

const getTdStyle = (color: Colors) => {
    return color !== Colors.None ? {backgroundColor: color === Colors.Green ? "green" : "yellow"} : {}
}

export default function GuessTableRow({value, answer}: {value: string, answer: string}) {
    const makeCells = () => {
        const ansArr = Array.from(answer)
        const valArr = Array.from(value)
        const colors = new Array(5).fill(Colors.None)
        for(let i = 0; i < 5; i++) {
            if(answer[i] === value[i]) {
                ansArr[i] = ""
                valArr[i] = ""
                colors[i] = Colors.Green
            }
        }
        for(let i = 0; i < 5; i++) {
            const ind = ansArr[i] === "" ? -1 : valArr.findIndex(c => c === answer[i])
            if (ind !== -1) {
                valArr[ind] = ""
                colors[ind] = Colors.Yellow
            }
        }
        return colors.map((color, i) => {
            const obj = getTdStyle(color)
            const styleObj = {textAlign: "center", fontWeight: "bold", fontSize: "2rem", padding: "3px", ...obj}
            //@ts-ignore
            return <td style={styleObj}>{value[i]}</td>
        })
    }
    return (
            <tr>
                {makeCells()}
            </tr>
    )
}