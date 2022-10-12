import { useState } from 'react'
import { Box, Button, TextField, useTheme } from '@mui/material'
import { Send } from '@mui/icons-material'
import styled from '@emotion/styled'

const Contact = () => {
    const theme = useTheme()

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const TextInput = styled(TextField)(({ theme }) => ({
        '&.MuiTextField-root': {
            width: '300px'
        }
    }))
    return (
        <Box sx={{
            height: '50vh',
            display: "flex",
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <TextInput
                required
                id="name"
                label="Name"
                value={data?.name}
                variant="standard"
            />
            <TextInput
                required
                id="email"
                label="Email"
                value={data?.email}
                variant="standard"
            />
            <TextInput
                required

                id="message"
                label="Message"
                multiline
                rows={4}
                value={data?.message}
                variant="standard"
            />
            <Button variant="contained" sx={{
                color: theme?.palette?.secondary?.main, marginLeft: '15px',
                backgroundImage: `linear-gradient(135deg, ${theme?.palette?.primary?.main} , ${theme?.palette?.secondary?.main} )`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }} endIcon={<Send />}>
                Send
            </Button>
        </Box>
    )
}

export default Contact