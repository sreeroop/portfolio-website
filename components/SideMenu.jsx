import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Button, Card, CardActions, CardHeader, Container, Drawer, IconButton, List, ListItemText, ListItem, useMediaQuery, ListItemButton, Collapse } from '@mui/material'
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material'



const drawerWidth = 260
const useStyles = makeStyles((theme) => ({

    drawer: {
        width: drawerWidth,
        height: '90vh',
        zIndex: '1200',
        boxShadow: 'none',
        [theme.breakpoints.up('lg')]: {
            zIndex: theme.zIndex.appBar + 1
        }
    },
    page: {
        width: drawerWidth,
        background: theme.palette.primary.main,
        borderRight: '0px solid rgba(0, 0, 0, 0.12)'
    },
    active: {
        background: '#f411f4'
    },
    toolbar: {
        ...theme.mixins.toolbar,

        [theme.breakpoints.down("lg")]: {
            display: "none"
        }
    },
    listitem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '18px',
        padding: '0px',
        height: '50px',
        width: '200px',
        margin: 'auto',
        "&:hover": {
            backgroundColor: "rgba(255, 129, 176, 0.5)",
            color: " #FFF",
            borderRadius: '10px',
        },

    },
    active: {
        background: 'rgba(255, 129, 176, 0.3)',
        textAlign: 'center',
        fontSize: '18px',
        padding: '0px',
        height: '50px',
        width: '200px',
        margin: '0px auto',
        borderRadius: '10px'
    },
    drawerCard: {
        background: "linear-gradient(112.03deg, rgba(255, 153, 0, 0.69) -56.39%, rgba(255, 1, 255, 0.68) 190.51%)",
        borderRadius: "10px",
    },
    button: {
        margin: '0 auto 0 auto',
        background: theme.palette.primary.main,
        borderRadius: '10px',
        height: '34px',
        color: '#FF4882',
        '&:hover': {
            background: 'none'
        }
    },
    icon: {
        color: 'rgba(255,255,255, 0.6)'
    },
    phone: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    Collapse: {
        minHeight: '300px',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            width: '5px',
            borderRadius: '50%',
        },

        /* Track */
        '&::-webkit-scrollbar-track': {
            borderRadius: '18px',

            background: '#f1f1f1'
        },

        /* Handle */
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            background: '#888'
        },

        /* Handle on hover */
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#555'
        },
    }
}))


const SideMenu = ({ menuItem, openDrawer, toggleDrawer }) => {
    const theme = useTheme()
    const classes = useStyles()
    const isMdUp = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        <Drawer
            variant={isMdUp ? "permanent" : "temporary"}
            anchor="left"
            className={classes.drawer}
            classes={{ paper: classes.page }}
            open={openDrawer}
            onClose={toggleDrawer}
            ModalProps={{
                keepMounted: true
            }}
        >
            <div className={classes.toolbar} />
            <List sx={{ marginTop: theme.spacing(4), flexGrow: 1 }} >
                {menuItem.map((item) => (

                    <ListItemButton
                        href={`/${item.path}`}
                        key={item.text}
                        className={classes.listitem}
                    >
                        <ListItemText primary={item.text} />
                    </ListItemButton>

                ))}
            </List>
            <Container sx={{ marginBottom: theme.spacing(3) }}>
                <Card className={classes.drawerCard}>
                    <CardHeader
                        title="Hey!"
                        subheader="Looking For Help?"
                        sx={{
                            color: '#FFFFFF',
                            '& .MuiCardHeader-subheader': {
                                color: '#FFFFFF'
                            }
                        }}
                    />
                    <CardActions>
                        <Button target='_blank' href={`https://docs.google.com/forms/d/11a9h9yzHymYVWzbZl3fBlx4585hOhUEtG6FwzFYjXg0/viewform?edit_requested=true`} variant="outlined" size="medium" fullWidth={true} className={classes.button}>Contact Us</Button>
                    </CardActions>
                </Card>
            </Container>
        </Drawer >
    )
}

export default SideMenu