import { Box, Container, IconButton, Paper, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled';
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { useTheme } from '@mui/material'

const Footer = () => {
    const theme = useTheme()

    const NavLinkStack = styled(Stack)(({ theme }) => ({
        '&.MuiStack-root': {
            [theme?.breakpoints?.down("lg")]: {
                display: "none",
            }
        },
        '& .MuiStack': {
            [theme?.breakpoints?.down("lg")]: {
                display: "none",
            }
        }
    }))
    const ThemedIcon = styled(IconButton)(({ theme }) => ({
        '&.MuiIconButton-root': {
            color: theme?.palette?.secondary?.main
        }
    }))
    return (
        <Paper sx={{
            width: '100%',
            position: 'relative',
            bottom: 0,
            width: '100%'
        }} component="footer" square variant="outlined">
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1
                    }}
                >
                    <NavLinkStack direction='row' alignItems="center" spacing={4} sx={{
                        '& .MuiIconButton': {

                        }
                    }}>
                        <ThemedIcon>
                            <GitHub />
                        </ThemedIcon>
                        <ThemedIcon>
                            <LinkedIn />
                        </ThemedIcon>
                        <ThemedIcon>
                            <Twitter />
                        </ThemedIcon>
                        <ThemedIcon>
                            <Instagram />
                        </ThemedIcon>
                    </NavLinkStack>

                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Copyright © 2022
                    </Typography>
                </Box>
            </Container>
        </Paper>
    )
}

export default Footer

