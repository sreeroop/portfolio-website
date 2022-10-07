import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Typography, Grid, Box, useTheme } from '@mui/material'
import ProjectCard from '../components/ProjectCard'
import ToolStrip from '../components/ToolStrip'
import ExperienceStrip from '../components/ExperienceStrip'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../backend/firebase'
import { Globals } from "@react-spring/shared";
import { Canvas } from '@react-three/fiber'
import Model from '../components/Avatar'
import { OrbitControls } from '@react-three/drei'
import Link from 'next/link'
import Nav from '../components/Nav'
import { Timeline } from '@mui/lab'
import Footer from '../components/Footer'

export default function Home() {
  const theme = useTheme()

  const [projects, setProjects] = useState([])
  const [experiences, setExperiences] = useState([])

  const fetchProject = async () => {
    const query = collection(db, `projects`)
    const resData = await getDocs(query)
    setProjects([])
    resData.docs.forEach(doc => {
      setProjects(projects => [...projects, doc.data()])
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
        <Grid item sx={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
          <Box sx={{
            maxWidth: '600px',
          }}>
            <Typography variant='h2' sx={{ margin: 'auto' }}>Hii👋👋</Typography>
            <Box sx={{
              display: 'flex', flexDirection: 'row'
            }}>
              <Typography variant='h3'>I'm </Typography>
              <Typography variant='h3' sx={{ color: theme?.palette?.secondary?.main, marginLeft: '15px' }}>Sreeroop</Typography>
            </Box>
            <br />
            <Typography variant='h4' sx={{ margin: 'auto' }}>
              Software Engineer. Passionate developer who loves to learn new technologies
            </Typography>
            <br />
            <Typography variant='h6' color='gray' sx={{ margin: 'auto' }}>
              Exploring opportunities and side projects.
            </Typography>
            <Typography variant='h6' color='gray' sx={{ margin: 'auto' }}>
              Currently working as web dev intern @ Vizuara
            </Typography>
          </Box>
          <Box sx={{ minWidth: '400px', minHeight: '400px' }}>
            <Canvas
              camera={{ position: [1, 1, 10], fov: 60 }}
              style={{ width: '400px', height: '400px' }}>
              <ambientLight intensity={0.3} />
              {/* Our main source of light, also casting our shadow */}
              <directionalLight
                castShadow
                position={[10, 10, 10]}
                intensity={0.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />
              {/* A light to help illumnate the spinning boxes */}
              <pointLight position={[-10, 10, 10]} intensity={0.5} />
              <pointLight position={[10, -10, 0]} intensity={0.5} />
              <Model />
              <OrbitControls />
            </Canvas>

          </Box>

          {/* </Grid> */}
        </Grid>

        <Grid item sx={{ minHeight: '30vh', width: '100vw', margin: 'auto', textAlign: 'center' }}>
          <Typography variant='h3' sx={{ margin: 'auto' }}>My Experience</Typography>
          <Grid sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', flexDirection: 'row', }}>
            <Timeline position="alternate">

              {
                experiences.map((experience, index) => {
                  return <ExperienceStrip key={index} data={experience} />
                })
              }
            </Timeline>
          </Grid>

        </Grid>
        <Grid item sx={{ width: '100vw', alignItems: 'center', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column', }}>

          <Typography variant='h3' sx={{ margin: 'auto' }}>My Tools</Typography>

          <ToolStrip />
        </Grid>


        <Grid item sx={{ width: '100vw', alignItems: 'center', padding: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', flexDirection: 'column', }}>
          <Typography variant='h3' sx={{ margin: 'auto' }}>My Projects</Typography>
          <Grid sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', flexDirection: 'row', }}>
            {
              projects.map(project => {
                return <ProjectCard key={project?.slug} data={project} />
              })
            }
          </Grid>
        </Grid>
        <Footer />


      </Grid >
    </>
  )
}
