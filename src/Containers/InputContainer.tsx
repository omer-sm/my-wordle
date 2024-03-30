import React from "react"
import Input from "@mui/joy/Input"
import IconButton from "@mui/joy/IconButton"
import Stack from "@mui/joy/Stack"
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export default function InputContainer({ value, setValue, submit }: { value: string, setValue: Function, submit: Function }) {
    return (
        <Stack direction="row" gap={0.5}>
            <Input placeholder="Type here.." value={value}  
            onChange={e => setValue(e.target.value)} />
            <IconButton onClick={() => submit()} color="primary" variant="solid"
            disabled={value.length !== 5}><SendRoundedIcon /></IconButton>
        </Stack>
    )
}