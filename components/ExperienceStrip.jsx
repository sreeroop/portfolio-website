import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore, Inbox, StarBorder, Work } from '@mui/icons-material'
import { useState } from 'react'

const ExperienceStrip = ({ data }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{ width: '300px' }}>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <Work />
                </ListItemIcon>
                <ListItemText primary={data.role} secondary={data.company} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={data.description} />
                    </ListItemButton>
                </List>
            </Collapse>
        </Box>
    )
}

export default ExperienceStrip