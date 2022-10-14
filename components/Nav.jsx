import { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { AppBar, Stack, Box, IconButton, Toolbar, Drawer, Container, Divider, ListItemIcon, ListItemText, useMediaQuery, useTheme, Typography, Slide, Button } from '@mui/material'
import { Close, Menu } from "@mui/icons-material";
import ThemeToggler from './ThemeToggler';


const Nav = () => {
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
    const SideContainer = styled(Container)(({ theme }) => ({
        '&.MuiContainer-root': {
            marginLeft: '100px',
            [theme?.breakpoints?.up("md")]: {
                display: "none",
            }
        }
    }))
    // const BurgerIcon = styled(IconButton)(({ theme }) => ({
    //     '&.MuiIconButton-root': {
    //         [theme?.breakpoints?.up("md")]: {
    //             display: "none",
    //         }
    //     }
    // }))

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setOpen(open);
    };
    const showStack = useMediaQuery(theme?.breakpoints?.up('lg'));
    return (
        <AppBar component="nav" sx={{ background: `linear-gradient(180deg,${theme?.palette?.secondary?.main} 15%,rgba(0,0,0,0))`, position: 'fixed', left: 0, top: 0, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', height: '10vh', width: '100vw', boxShadow: 'none' }
        }>
            {/* <Typography variant='h5'
                sx={{
                    // backgroundcolor: "primary",
                    // backgroundImage: `linear-gradient(45deg, ${theme?.palette?.color?.main} , ${theme?.palette?.primary?.main} )`,
                    // backgroundSize: "100%",
                    // backgroundRepeat: "repeat",
                    // backgroundClip: "text",
                    // WebkitBackgroundClip: "text",
                    // WebkitTextFillColor: "transparent",
                    marginLeft: '20px',
                    color: theme?.palette?.color?.main
                }}
            // sx={{

            // }}
            >SREEROOP</Typography> */}
            <Box sx={{
                marginLeft: '20px',

            }}>
                <svg viewbox="0 0 100 20">
                    <defs>
                        <linearGradient id="gradient">
                            <stop color="#000" />
                        </linearGradient>
                        <pattern id="wave" x="0" y="-0.5" width="100%" height="100%" patternUnits="userSpaceOnUse">
                            <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
                                <animateTransform
                                    attributeName="transform"
                                    begin="0s"
                                    dur="1.5s"
                                    type="translate"
                                    from="0,0"
                                    to="40,0"
                                    repeatCount="indefinite" />
                            </path>
                        </pattern>
                    </defs>
                    <text text-anchor="middle" x="50" y="15" font-size="17" fill="gray" fill-opacity="0.1">SREEROOP</text>
                    <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)" fill-opacity="1">SREEROOP</text>
                </svg>

            </Box>

            {/* <IconButton>
                <img src='/logo.svg' style={{ width: '50px', height: '50px' }} />
            </IconButton> */}
            <Stack direction='row' alignItems="center" sx={{ position: 'relative' }} spacing={3} mr={4}>
                {/* <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '30vw' }}> */}
                {showStack && <NavLinkStack direction='row' alignItems="center" spacing={4}>
                    <Link href="/resume.pdf">
                        <Button varient="contained" sx={{
                            padding: '5px 15px',

                        }}>
                            Resume
                        </Button>
                    </Link>
                    <Link href="#experience">Experience</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#connect">Connect</Link>
                </NavLinkStack>}
                {/* </Toolbar> */}
                <ThemeToggler />

                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer(true)}
                    sx={{
                        marginLeft: '20px',
                        '&.MuiIconButton-root': {
                            [theme?.breakpoints?.up("md")]: {
                                display: "none",
                            }
                        }
                    }}
                >
                    <Menu />
                </IconButton>

            </Stack>



            <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}
                sx={{
                    width: 320,
                    minHeight: '30vh',
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: 'center',
                    flexDirection: 'column',


                }}
            >
                <Box sx={{
                    width: '320px',
                    height: '100%',
                    padding: '20px'
                }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(false)}
                        sx={{
                            marginLeft: '20px',
                        }}
                    >
                        <Close />
                    </IconButton>

                    <NavLinkStack direction='column' alignItems="center" spacing={4}
                        sx={{
                            marginTop: '2rem'
                        }}>
                        <Link href="/resume.pdf">
                            <Button varient="contained" sx={{
                                padding: '5px 15px',
                            }}>
                                Resume
                            </Button>
                        </Link>
                        <Link href="#experience">Experience</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#skills">Skills</Link>
                        <Link href="#connect">Connect</Link>
                    </NavLinkStack>
                </Box>
            </Drawer>

        </AppBar >

    )
};
export default Nav;
