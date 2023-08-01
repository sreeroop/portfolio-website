import { Launch } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

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
                <Typography variant="body" color="text.secondary">

                    {data?.description}
                </Typography>
            </CardContent>
            <CardContent sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', padding: 0 }}>
                {
                    data?.tools?.map((tool, index) => {
                        return (
                            <div key={index} style={{ whiteSpace: 'nowrap' }}>
                                <h6>#{tool.toLowerCase()}</h6>
                            </div>
                        )
                    })
                }
            </CardContent>
            <CardActions>
                {data?.github && <Link href={`${data?.github}`}>
                    <IconButton>
                        <AiFillGithub />
                    </IconButton>
                </Link>}
                {data?.website && <Link href={`${data?.website}`}>
                    <IconButton>
                        <Launch />
                    </IconButton>
                </Link>}
            </CardActions>
        </Card >
    )
}

export default ProjectCard