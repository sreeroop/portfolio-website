import { Box, Container, IconButton, Paper, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled';
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
    const NavLinkStack = styled(Stack)(({ theme }) => ({
        '&.MuiStack-root': {
            [theme.breakpoints.down("lg")]: {
                display: "none",
            }
        },
        '& .MuiStack': {
            [theme.breakpoints.down("lg")]: {
                display: "none",
            }
        }
    }))
    return (
        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
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
                    <NavLinkStack direction='row' alignItems="center" spacing={4}>
                        <IconButton>
                            <GitHub />
                        </IconButton>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                        <IconButton>
                            <Twitter />
                        </IconButton>
                        <IconButton>
                            <Instagram />
                        </IconButton>
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
                        Copyright © {new Date().getFullYear()}
                    </Typography>
                </Box>
            </Container>
        </Paper>
    )
}

export default Footer