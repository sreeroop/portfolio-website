import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"


const ExperienceStrip = ({ data }) => {
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
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{data.company}</TimelineContent>
        </TimelineItem>
    )
}

export default ExperienceStrip