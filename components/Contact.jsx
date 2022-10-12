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
            minWidth: '350px',
            height: '50vh',
            display: "flex",
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.21)',
            borderRadius: '15px',
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