import { Launch } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography, useTheme } from '@mui/material'

import { AiFillGithub } from 'react-icons/ai'

const ProjectCard = ({ data }) => {
    const theme = useTheme()
    return (
        <Card sx={{ maxWidth: 400, margin: '30px', background: theme?.palette?.secondary?.main }}>
            <CardMedia
                component="img"
                image={data?.image}
                alt="screenshot of website"
                sx={{ width: '101%', height: '100%', objectFit: 'cover' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardContent sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', padding: 0 }}>
                {
                    data?.tools?.map((tool, index) => {
                        return (
                            <div key={`${tool}-${index}`} style={{ width: '30px', height: '30px', objectFit: 'cover' }}>
                                <img src={`/${tool}.svg`} style={{ width: '100%', height: '100%' }} alt="" />
                            </div>
                        )
                    })
                }
            </CardContent>
            <CardActions>
                <IconButton>
                    <AiFillGithub />
                </IconButton>
                <IconButton>
                    <Launch />
                </IconButton>
            </CardActions>
        </Card >
    )
}

export default ProjectCard