import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"
import { useTheme } from "@mui/material"


const ExperienceStrip = ({ data }) => {
    const theme = useTheme()

    // const [open, setOpen] = useState(false);

    // const handleClick = () => {
    //     setOpen(!open);
    // };
    return (
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                {data.role}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot sx={{ background: theme?.palette?.secondary?.main }} />
                <TimelineConnector sx={{ background: theme?.palette?.secondary?.main }} />
            </TimelineSeparator>
            <TimelineContent>{data.company}</TimelineContent>
        </TimelineItem>
    )
}

export default ExperienceStrip