import { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { AppBar, Stack, Box, IconButton, Toolbar, Drawer, Container, Divider, ListItemIcon, ListItemText, useMediaQuery, useTheme, Typography } from '@mui/material'
import { Close, Menu } from "@mui/icons-material";
import ThemeToggler from './ThemeToggler';


const Nav = () => {


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
    const SideContainer = styled(Container)(({ theme }) => ({
        '&.MuiContainer-root': {
            [theme.breakpoints.up("md")]: {
                display: "none",
            }
        }
    }))
    const BurgerIcon = styled(IconButton)(({ theme }) => ({
        '&.MuiIconButton-root': {
            [theme.breakpoints.up("md")]: {
                display: "none",
            }
        }
    }))

    const [open, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setState(open);
    };
    const theme = useTheme()
    const showStack = useMediaQuery(theme?.breakpoints?.up('lg'));
    return (
        <AppBar AppBar sx={{ background: theme?.palette?.secondary?.main, position: 'fixed', left: 0, top: 0, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', height: '10vh', width: '100vw' }
        }>
            <Typography variant='h5' sx={{ marginLeft: '20px', color: theme?.palette?.primary?.main }}>SREEROOP</Typography>
            {/* <IconButton>
                <img src='/logo.svg' style={{ width: '50px', height: '50px' }} />
            </IconButton> */}
            <Stack direction='row' alignItems="center" spacing={3} mr={4}>
                {/* <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '30vw' }}> */}
                {showStack && <NavLinkStack direction='row' alignItems="center" spacing={4}>
                    <Link href="#experience">Experience</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#projects">Projects</Link>
                </NavLinkStack>}
                {/* </Toolbar> */}
                <ThemeToggler />

                <BurgerIcon
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer(true)}
                    sx={{

                    }}
                >
                    <Menu />
                    <SideContainer maxWidth='disable' disableGutters="true">
                        <Toolbar>
                            {/* The outside of the drawer */}
                            <Drawer
                                //from which side the drawer slides in
                                anchor="right"
                                //if open is true --> drawer is shown
                                open={open}
                                //function that is called when the drawer should close
                                onClose={toggleDrawer(false)}
                                //function that is called when the drawer should open
                                onOpen={toggleDrawer(true)}
                            >
                                {/* The inside of the drawer */}
                                <Box
                                    sx={{
                                        p: 2,
                                        height: 1,
                                        backgroundColor: "#dbc8ff"
                                    }}
                                >
                                    {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
                                    <IconButton sx={{ mb: 2 }}>
                                        <Close onClick={toggleDrawer(false)} />
                                    </IconButton>

                                    <Divider sx={{ mb: 2 }} />

                                    <Box sx={{ mb: 2 }}>
                                        <Link href="#experience">Experience</Link>
                                        <Link href="#skills">Skills</Link>
                                        <Link href="#projects">Projects</Link>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            position: "absolute",
                                            bottom: "0",
                                            left: "50%",
                                            transform: "translate(-50%, 0)"
                                        }}
                                    >
                                    </Box>
                                </Box>
                            </Drawer>
                        </Toolbar>
                    </SideContainer>
                </BurgerIcon>
            </Stack>

        </AppBar>

    )
};
export default Nav;
