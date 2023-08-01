import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Typography, Grid, Box, useTheme } from '@mui/material'
import ProjectCard from '../components/ProjectCard'
import ToolStrip from '../components/ToolStrip'
import ExperienceStrip from '../components/ExperienceStrip'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../backend/firebase'
import Nav from '../components/Nav'
import { Timeline } from '@mui/lab'
import Footer from '../components/Footer'
import { Devices, Work } from '@mui/icons-material'
import Contact from '../components/Contact'
import style from '../styles/Home.module.css'

export default function Home() {
  const theme = useTheme()
  const [projects, setProjects] = useState([])
  const [experiences, setExperiences] = useState([])

  const fetchProject = async () => {
    const query = collection(db, `projects`)
    const resData = await getDocs(query)
    setProjects([])
    resData.docs.forEach(doc => {
      setProjects(projects => [...projects, doc.data()].sort((a, b) => b - a))
    })
  }
  const fetchExperience = async () => {
    const query = collection(db, `experiences`)
    const resData = await getDocs(query)
    setExperiences([])

    resData.docs.forEach(doc => {
      setExperiences(experience => [...experience, doc.data()])
    })
  }

  useEffect(() => {
    fetchProject()
    fetchExperience()
  }, [])


  return (
    <>
      <Head>
        <title>Sreeroop</title>
        <meta name="description" content="Portfolio website of SREEROOP S K" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Nav />

      <Grid container sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100vw', overflowX: 'hidden' }}>
        <Grid item id="hero" sx={{
          marginTop: '10vh', height: '100vh', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'
        }}>
          <Box sx={{
            maxWidth: '650px',
            padding: '20px',
            height: 'fit-content'
          }}>
            <Typography variant='h3' sx={{ margin: 'auto' }}>Hiii👋👋</Typography>
            <Box sx={{
              display: 'flex', flexDirection: 'row'
            }}>
              <Typography variant='h3'>I&apos;m </Typography>
              <Typography variant='h3' sx={{
                color: theme?.palette?.secondary?.main, marginLeft: '15px',
                backgroundImage: `linear-gradient(135deg, ${theme?.palette?.primary?.main} , ${theme?.palette?.secondary?.main} )`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Sreeroop</Typography>
            </Box>
          </Box>
          <Box sx={{
            maxWidth: '650px',
            padding: '20px'
          }}>
            <Typography variant='h4' sx={{ margin: 'auto' }}>
              A Software Development Engineer Passionate developer who loves to learn new technologies
            </Typography>
            <br />
            <Typography variant='h6' color='gray' sx={{ margin: 'auto' }}>
              <Devices sx={{ marginRight: '10px' }} />  Exploring opportunities and new technologies.
            </Typography>
            <Typography variant='h6' color='gray' sx={{ margin: 'auto' }}>
              <Work sx={{ marginRight: '10px' }} /> Currently working as web dev intern at Vizuara
            </Typography>

          </Box>
        </Grid>

        <Grid id="experience" item sx={{ minHeight: '30vh', width: '100vw', margin: '5vh auto', textAlign: 'center' }}>
          <Typography variant='h3' sx={{ margin: 'auto' }}>Experience</Typography>
          <Grid sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', flexDirection: 'row', }}>
            <Timeline position="alternate">
              {
                experiences.sort((a, b) => (b.id - a.id))?.map((experience, index) => {
                  return <ExperienceStrip key={index} index={index} size={experiences.length} data={experience} />
                })
              }
            </Timeline>
          </Grid>
        </Grid>


        <Grid id="projects" item sx={{ width: '100vw', alignItems: 'center', padding: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', flexDirection: 'column', }}>
          <Typography variant='h3' sx={{ margin: 'auto' }}>Projects</Typography>
          <Grid sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', flexDirection: 'row-reverse', }}>
            {
              projects?.sort((a, b) => { return -(b.title - a.title); })?.map(project => {
                return <ProjectCard key={project?.slug} data={project} />
              })
            }
          </Grid>
        </Grid>
        <Grid id="skills" item sx={{ width: '100vw', alignItems: 'center', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column', }}>

          <Typography variant='h3' sx={{ margin: 'auto' }}>Tools</Typography>

          <ToolStrip />
        </Grid>
        <Grid id="connect" item sx={{ position: 'relative', width: '100vw', alignItems: 'center', padding: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', flexDirection: 'column', }}>
          <Typography variant='h3'>Ping me!</Typography>
          <Box sx={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%,-50%)' }}>
            <div className={`${style["luminaire"]} ${style["on"]}`}></div>

          </Box>

          <Grid sx={{ marginTop: '4rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', flexDirection: 'row', }}>
            <Contact />
          </Grid>
        </Grid>


        <Footer />


      </Grid >
    </>
  )
}
