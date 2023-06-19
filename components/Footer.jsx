import { Box, Container, IconButton, Paper, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled';
import { GitHub, Instagram, LinkedIn, Mail, Telegram, Twitter, Snap } from '@mui/icons-material';
import { useTheme } from '@mui/material'

const Footer = () => {
    const theme = useTheme()

    const NavLinkStack = styled(Stack)(({ theme }) => ({
        '&.MuiStack-root': {
            [theme?.breakpoints?.down("lg")]: {
                display: "none",
            }
        },
        '&.MuiStack': {
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
                        mb: 2,
                    }}
                >
                    <Typography variant='h3' sx={{ margin: 'auto' }}>Ping me!</Typography>
                </Box>
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
                        <a href="https://github.com/sreeroop">
                            <ThemedIcon>
                                <GitHub />
                            </ThemedIcon>
                        </a>
                        <a href="https://www.linkedin.com/in/sreeroopsk/">
                            <ThemedIcon>
                                <LinkedIn />
                            </ThemedIcon>
                        </a>
                        <a href="https://twitter.com/sreeroopsk">
                            <ThemedIcon>
                                <Twitter />
                            </ThemedIcon>
                        </a>
                        <a href="mailto:sreeroopsk10@gmail.com">
                            <ThemedIcon>
                                <Mail />
                            </ThemedIcon>
                        </a>
                        <a href="t.me/sreeroop">
                            <ThemedIcon>
                                <Telegram />
                            </ThemedIcon>
                        </a>
                        <a href="https://instagram.com/sree_roop_">
                            <ThemedIcon>
                                <Instagram />
                            </ThemedIcon>
                        </a>
                        {/* <a href="https://www.snapchat.com/add/sreeroopsk">
                            <ThemedIcon>
                                <Snapchat />
                            </ThemedIcon>
                        </a> */}
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
                        Copyright © 2023
                    </Typography>
                </Box>
            </Container>
        </Paper>
    )
}

export default Footer

