import { useState } from 'react'
import { Box, Button, TextField, useTheme } from '@mui/material'
import { Send } from '@mui/icons-material'
import styled from '@emotion/styled'
import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { db } from '../backend/firebase';
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
    const handleChange = (e, value) => {
        setData({ ...data, [e.target.id]: e.target.value || value })
    }
    const submit = () => {
        const Ref = doc(db, 'messages', `${data?.name + Math.floor(Math.random() * 100) + data?.email}`);
        setDoc(Ref, {
            email: data?.email,
            name: data?.name,
            message: data?.message
        }, { merge: true });


    }
    return (
        <Box sx={{
            minWidth: '350px',
            height: '400px',
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
            <TextField
                variant="standard"
                label="name"
                size="medium"
                sx={{
                    width: 300, margin: '10px',
                }}
                id="name"
                onChange={handleChange}
            />
            <TextField
                variant="standard"

                label="Email"
                size="medium"
                sx={{
                    width: 300, margin: '10px'
                }}
                id="email"
                onChange={handleChange}
            />
            <TextField
                variant="standard"
                multiline
                rows={4}
                label="Message"
                size="medium"
                sx={{
                    width: 300, margin: '10px'
                }}
                id="message"
                onChange={handleChange}
            />
            <Button variant="contained" sx={{
                color: theme?.palette?.secondary?.main, marginLeft: '15px',
                backgroundImage: `linear-gradient(135deg, ${theme?.palette?.primary?.main} , ${theme?.palette?.secondary?.main} )`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }} endIcon={<Send />}
                onClick={submit}
            >
                Send
            </Button>
        </Box >
    )
}

export default Contact