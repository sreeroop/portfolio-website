import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"
import { Typography, useTheme } from "@mui/material"


const ExperienceStrip = ({ data, index, size }) => {
    const theme = useTheme()

    // const [open, setOpen] = useState(false);

    // const handleClick = () => {
    //     setOpen(!open);
    // };
    return (
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                <Typography variant='h6' sx={{ margin: 'auto', color: index == 0 ? theme?.palette?.primary?.main : "gray" }}>
                    {data?.role}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot sx={{ background: index == 0 ? theme?.palette?.primary?.main : theme?.palette?.secondary?.main }} />
                {
                    size - 1 !== index && (
                        <TimelineConnector sx={{ background: theme?.palette?.secondary?.main }} />
                    )
                }
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant='h6' sx={{ margin: 'auto', color: index == 0 ? theme?.palette?.primary?.main : "gray" }}>
                    {data?.company}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

export default ExperienceStrip