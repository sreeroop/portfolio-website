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
        <link rel="icon" href="/Sreeroop.svg" />
      </Head>
      <Nav />

      {/* <Box sx={{ position: "relative", top: 0, left: 0, width: "100vw", height: '100vh', display: "grid", placeContent: "center", zIndex: "-1" }}>
        <Box sx={{
          zIndex: "-1", '&.MuiTypography-root': {
            [theme?.breakpoints?.down("md")]: {
              fontSize: "5rem"
            }
          }
        }}>
          <svg width="350" height="150" viewBox="0 0 200 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke='#a6a6a6' strokeWidth="2" id="path" d="M24.232 58.888C20.0507 58.888 16.2107 58.2693 12.712 57.032C9.256 55.7947 6.46133 53.9813 4.328 51.592C2.19467 49.16 1.02133 46.1733 0.808 42.632C0.722667 41.1813 0.957333 39.5813 1.512 37.832C2.06667 36.0827 2.83467 34.3547 3.816 32.648C4.84 30.8987 6.03467 29.3413 7.4 27.976C8.808 26.568 10.3013 25.5013 11.88 24.776C12.008 24.6907 12.2 24.6267 12.456 24.584C12.7547 24.5413 12.968 24.52 13.096 24.52C13.352 24.52 13.48 24.584 13.48 24.712C13.48 24.9253 13.16 25.2667 12.52 25.736C10.728 27.144 9.256 28.7653 8.104 30.6C6.90933 32.4347 6.01333 34.3973 5.416 36.488C4.81867 38.5787 4.52 40.6907 4.52 42.824C4.52 45.3413 5.05333 47.5173 6.12 49.352C7.22933 51.144 8.70133 52.616 10.536 53.768C12.3707 54.9627 14.4613 55.8373 16.808 56.392C19.1547 56.9467 21.608 57.224 24.168 57.224C27.0267 57.224 29.8427 56.904 32.616 56.264C35.432 55.624 37.992 54.7067 40.296 53.512C43.8373 51.6347 46.632 49.3093 48.68 46.536C50.7707 43.7627 51.816 41.0107 51.816 38.28C51.816 36.8293 51.496 35.4427 50.856 34.12C50.2587 32.7973 49.2773 31.6027 47.912 30.536C46.888 29.7253 45.6293 28.9573 44.136 28.232C42.6853 27.5067 41.128 26.8027 39.464 26.12C37.8427 25.4373 36.2427 24.7547 34.664 24.072C33.0853 23.3467 31.6987 22.5787 30.504 21.768C28.7973 20.616 27.5387 19.3787 26.728 18.056C25.96 16.7333 25.576 15.4107 25.576 14.088C25.576 12.5093 26.024 10.9733 26.92 9.48C27.8587 7.98667 29.1173 6.64266 30.696 5.448C32.3173 4.21067 34.1307 3.25067 36.136 2.568C37.8853 1.97066 39.784 1.50133 41.832 1.16C43.9227 0.818665 45.9707 0.647999 47.976 0.647999C49.64 0.647999 51.2187 0.775998 52.712 1.032C54.248 1.24533 55.592 1.65066 56.744 2.248C58.1947 2.93067 59.304 3.848 60.072 5C60.84 6.10933 61.224 7.28266 61.224 8.52C61.224 10.2267 60.456 11.72 58.92 13C58.3653 13.4267 57.7467 13.832 57.064 14.216C56.3813 14.5573 55.5707 14.856 54.632 15.112C54.4613 15.1547 54.2693 15.176 54.056 15.176C53.544 15.176 53.288 15.0267 53.288 14.728C53.288 14.5573 53.416 14.3867 53.672 14.216C53.9707 14.0027 54.3973 13.8747 54.952 13.832C56.232 13.6613 57.192 13.1707 57.832 12.36C58.5147 11.5493 58.856 10.6107 58.856 9.544C58.856 8.43466 58.472 7.34666 57.704 6.28C56.9787 5.17066 55.848 4.25333 54.312 3.528C52.776 2.76 50.8133 2.376 48.424 2.376C47.0587 2.376 45.544 2.52533 43.88 2.824C42.2587 3.12267 40.488 3.61333 38.568 4.296C36.2213 5.10666 34.2587 6.30133 32.68 7.88C31.144 9.45866 30.376 11.144 30.376 12.936C30.376 14.0453 30.7387 15.176 31.464 16.328C32.232 17.4373 33.448 18.504 35.112 19.528C36.52 20.3813 38.12 21.2347 39.912 22.088C41.704 22.8987 43.5173 23.7307 45.352 24.584C47.1867 25.3947 48.8507 26.2693 50.344 27.208C52.6907 28.6587 54.376 30.216 55.4 31.88C56.424 33.544 56.936 35.2507 56.936 37C56.936 39.048 56.3173 41.1173 55.08 43.208C53.8853 45.256 52.3067 47.1973 50.344 49.032C48.3813 50.824 46.2267 52.424 43.88 53.832C41.1493 55.4533 38.056 56.6907 34.6 57.544C31.1867 58.44 27.7307 58.888 24.232 58.888ZM70.2 53.064C69.3893 53.064 68.5787 52.744 67.768 52.104C66.9573 51.4213 66.552 50.3333 66.552 48.84C66.552 47.688 66.8293 46.3653 67.384 44.872C67.896 43.4213 68.5787 42.0133 69.432 40.648C70.328 39.2827 70.968 38.1733 71.352 37.32C71.48 36.9787 71.544 36.68 71.544 36.424C71.544 35.656 71.0533 35.1013 70.072 34.76C69.1333 34.4187 67.896 34.2267 66.36 34.184L65.592 36.296C65.1227 37.6613 64.4613 39.2613 63.608 41.096C62.7973 42.9307 61.88 44.7013 60.856 46.408C59.8747 48.1147 58.8507 49.48 57.784 50.504C57.6987 50.5893 57.592 50.632 57.464 50.632C57.2933 50.632 57.1867 50.5253 57.144 50.312C57.0587 50.0987 57.144 49.8427 57.4 49.544C59.064 47.3253 60.5573 44.872 61.88 42.184C63.2027 39.4533 64.312 36.68 65.208 33.864C66.1467 31.048 66.8293 28.4453 67.256 26.056C67.384 25.3733 67.6187 24.8827 67.96 24.584C68.3013 24.2427 68.664 24.072 69.048 24.072C69.6027 24.072 70.1147 24.3493 70.584 24.904C71.0533 25.416 71.288 26.1627 71.288 27.144C71.288 27.3147 71.2667 27.5067 71.224 27.72C71.224 27.9333 71.2027 28.1467 71.16 28.36C70.9893 29.256 70.4773 30.1093 69.624 30.92C68.8133 31.688 68.152 32.264 67.64 32.648C68.0667 32.6907 68.5147 32.7333 68.984 32.776C69.4533 32.776 69.9653 32.776 70.52 32.776C72.5253 32.776 74.5093 32.648 76.472 32.392C76.5573 32.648 76.6 32.84 76.6 32.968C76.6 33.5227 76.4293 34.2267 76.088 35.08C75.7893 35.9333 75.4693 36.7013 75.128 37.384C74.9573 37.768 74.616 38.472 74.104 39.496C73.592 40.4773 73.0373 41.608 72.44 42.888C71.8427 44.1253 71.3307 45.3627 70.904 46.6C70.52 47.7947 70.328 48.8187 70.328 49.672C70.328 50.7813 70.7547 51.336 71.608 51.336C72.248 51.336 72.952 50.9307 73.72 50.12C74.488 49.2667 75.2347 48.2427 75.96 47.048C76.728 45.8107 77.4107 44.616 78.008 43.464C78.648 42.2693 79.1387 41.3307 79.48 40.648C79.6507 40.2213 79.8853 40.008 80.184 40.008C80.3547 40.008 80.44 40.1573 80.44 40.456C80.44 40.6267 80.376 40.8827 80.248 41.224C79.7787 42.2053 79.224 43.3147 78.584 44.552C77.944 45.7893 77.2187 47.0053 76.408 48.2C75.64 49.3947 74.7867 50.44 73.848 51.336C72.952 52.1893 71.9707 52.744 70.904 53C70.776 53.0427 70.5413 53.064 70.2 53.064ZM83.8155 53.256C82.2368 53.256 80.8075 52.744 79.5275 51.72C78.2902 50.696 77.6715 49.1387 77.6715 47.048C77.6715 45.128 78.1408 43.08 79.0795 40.904C80.0182 38.6853 81.2128 36.744 82.6635 35.08C83.9008 33.6293 85.2875 32.4347 86.8235 31.496C88.3595 30.5573 89.8102 30.088 91.1755 30.088C92.1142 30.088 92.9248 30.344 93.6075 30.856C94.3328 31.4107 94.6955 32.2 94.6955 33.224C94.6955 34.2907 94.2902 35.464 93.4795 36.744C92.6688 38.024 91.5168 39.2187 90.0235 40.328C89.3835 40.7973 88.5728 41.2453 87.5915 41.672C86.6102 42.0987 85.6288 42.4613 84.6475 42.76C83.6662 43.016 82.8555 43.144 82.2155 43.144C82.0022 43.656 81.7888 44.3387 81.5755 45.192C81.4048 46.0453 81.3195 46.92 81.3195 47.816C81.3195 48.8827 81.5328 49.8427 81.9595 50.696C82.3862 51.5493 83.1755 51.976 84.3275 51.976C85.7355 51.976 87.0155 51.5707 88.1675 50.76C89.3195 49.9493 90.3435 48.9467 91.2395 47.752C92.1355 46.5147 92.8822 45.2773 93.4795 44.04C94.1195 42.8027 94.6315 41.7573 95.0155 40.904C95.2715 40.3067 95.6128 40.008 96.0395 40.008C96.2528 40.008 96.3595 40.1147 96.3595 40.328C96.3595 40.4987 96.2955 40.712 96.1675 40.968C95.5702 42.248 94.9302 43.6133 94.2475 45.064C93.5648 46.472 92.7542 47.816 91.8155 49.096C90.8768 50.3333 89.7462 51.336 88.4235 52.104C87.1435 52.872 85.6075 53.256 83.8155 53.256ZM82.6635 41.992C83.2608 41.992 84.2635 41.7787 85.6715 41.352C87.0795 40.8827 88.3595 40.1573 89.5115 39.176C90.6208 38.1947 91.4742 37.128 92.0715 35.976C92.6688 34.7813 92.9675 33.7787 92.9675 32.968C92.9675 32.0293 92.6262 31.56 91.9435 31.56C91.4315 31.56 90.7275 31.9013 89.8315 32.584C88.9355 33.2667 87.8262 34.4187 86.5035 36.04C85.6928 37.064 84.9248 38.1733 84.1995 39.368C83.4742 40.5627 82.9622 41.4373 82.6635 41.992ZM99.6905 53.256C98.1118 53.256 96.6825 52.744 95.4025 51.72C94.1652 50.696 93.5465 49.1387 93.5465 47.048C93.5465 45.128 94.0158 43.08 94.9545 40.904C95.8932 38.6853 97.0878 36.744 98.5385 35.08C99.7758 33.6293 101.163 32.4347 102.699 31.496C104.235 30.5573 105.685 30.088 107.051 30.088C107.989 30.088 108.8 30.344 109.483 30.856C110.208 31.4107 110.571 32.2 110.571 33.224C110.571 34.2907 110.165 35.464 109.355 36.744C108.544 38.024 107.392 39.2187 105.899 40.328C105.259 40.7973 104.448 41.2453 103.467 41.672C102.485 42.0987 101.504 42.4613 100.523 42.76C99.5412 43.016 98.7305 43.144 98.0905 43.144C97.8772 43.656 97.6638 44.3387 97.4505 45.192C97.2798 46.0453 97.1945 46.92 97.1945 47.816C97.1945 48.8827 97.4078 49.8427 97.8345 50.696C98.2612 51.5493 99.0505 51.976 100.203 51.976C101.611 51.976 102.891 51.5707 104.043 50.76C105.195 49.9493 106.219 48.9467 107.115 47.752C108.011 46.5147 108.757 45.2773 109.355 44.04C109.995 42.8027 110.507 41.7573 110.891 40.904C111.147 40.3067 111.488 40.008 111.915 40.008C112.128 40.008 112.235 40.1147 112.235 40.328C112.235 40.4987 112.171 40.712 112.043 40.968C111.445 42.248 110.805 43.6133 110.123 45.064C109.44 46.472 108.629 47.816 107.691 49.096C106.752 50.3333 105.621 51.336 104.299 52.104C103.019 52.872 101.483 53.256 99.6905 53.256ZM98.5385 41.992C99.1358 41.992 100.139 41.7787 101.547 41.352C102.955 40.8827 104.235 40.1573 105.387 39.176C106.496 38.1947 107.349 37.128 107.947 35.976C108.544 34.7813 108.843 33.7787 108.843 32.968C108.843 32.0293 108.501 31.56 107.819 31.56C107.307 31.56 106.603 31.9013 105.707 32.584C104.811 33.2667 103.701 34.4187 102.379 36.04C101.568 37.064 100.8 38.1733 100.075 39.368C99.3492 40.5627 98.8372 41.4373 98.5385 41.992ZM118.638 53.064C117.827 53.064 117.016 52.744 116.206 52.104C115.395 51.4213 114.99 50.3333 114.99 48.84C114.99 47.688 115.267 46.3653 115.822 44.872C116.334 43.4213 117.016 42.0133 117.87 40.648C118.766 39.2827 119.406 38.1733 119.79 37.32C119.918 36.9787 119.982 36.68 119.982 36.424C119.982 35.656 119.491 35.1013 118.51 34.76C117.571 34.4187 116.334 34.2267 114.798 34.184L114.03 36.296C113.56 37.6613 112.899 39.2613 112.046 41.096C111.235 42.9307 110.318 44.7013 109.294 46.408C108.312 48.1147 107.288 49.48 106.221 50.504C106.136 50.5893 106.029 50.632 105.901 50.632C105.731 50.632 105.624 50.5253 105.581 50.312C105.496 50.0987 105.581 49.8427 105.837 49.544C107.502 47.3253 108.995 44.872 110.318 42.184C111.64 39.4533 112.75 36.68 113.646 33.864C114.584 31.048 115.267 28.4453 115.694 26.056C115.822 25.3733 116.056 24.8827 116.398 24.584C116.739 24.2427 117.102 24.072 117.486 24.072C118.04 24.072 118.552 24.3493 119.022 24.904C119.491 25.416 119.726 26.1627 119.726 27.144C119.726 27.3147 119.704 27.5067 119.662 27.72C119.662 27.9333 119.64 28.1467 119.598 28.36C119.427 29.256 118.915 30.1093 118.062 30.92C117.251 31.688 116.59 32.264 116.078 32.648C116.504 32.6907 116.952 32.7333 117.422 32.776C117.891 32.776 118.403 32.776 118.958 32.776C120.963 32.776 122.947 32.648 124.91 32.392C124.995 32.648 125.038 32.84 125.038 32.968C125.038 33.5227 124.867 34.2267 124.526 35.08C124.227 35.9333 123.907 36.7013 123.566 37.384C123.395 37.768 123.054 38.472 122.542 39.496C122.03 40.4773 121.475 41.608 120.878 42.888C120.28 44.1253 119.768 45.3627 119.342 46.6C118.958 47.7947 118.766 48.8187 118.766 49.672C118.766 50.7813 119.192 51.336 120.046 51.336C120.686 51.336 121.39 50.9307 122.158 50.12C122.926 49.2667 123.672 48.2427 124.398 47.048C125.166 45.8107 125.848 44.616 126.446 43.464C127.086 42.2693 127.576 41.3307 127.918 40.648C128.088 40.2213 128.323 40.008 128.622 40.008C128.792 40.008 128.878 40.1573 128.878 40.456C128.878 40.6267 128.814 40.8827 128.686 41.224C128.216 42.2053 127.662 43.3147 127.022 44.552C126.382 45.7893 125.656 47.0053 124.846 48.2C124.078 49.3947 123.224 50.44 122.286 51.336C121.39 52.1893 120.408 52.744 119.342 53C119.214 53.0427 118.979 53.064 118.638 53.064ZM130.781 53C129.16 53 127.965 52.4667 127.197 51.4C126.429 50.2907 126.045 48.9467 126.045 47.368C126.045 45.448 126.493 43.4427 127.389 41.352C128.242 39.3893 129.33 37.5973 130.653 35.976C131.976 34.3547 133.405 33.0533 134.941 32.072C136.477 31.048 137.97 30.536 139.421 30.536C141.042 30.536 142.237 31.0693 143.005 32.136C143.773 33.2027 144.157 34.5467 144.157 36.168C144.157 38.1307 143.709 40.136 142.813 42.184C142.301 43.336 141.576 44.616 140.637 46.024C139.698 47.3893 138.632 48.648 137.437 49.8C137.693 50.2693 138.056 50.6747 138.525 51.016C138.994 51.3147 139.634 51.464 140.445 51.464C141.469 51.464 142.429 51.0373 143.325 50.184C144.264 49.3307 145.117 48.3067 145.885 47.112C146.653 45.8747 147.336 44.6373 147.933 43.4C148.53 42.1627 149.021 41.16 149.405 40.392C149.533 40.136 149.746 40.008 150.045 40.008C150.216 40.008 150.344 40.0933 150.429 40.264C150.514 40.392 150.493 40.6053 150.365 40.904C150.109 41.544 149.682 42.504 149.085 43.784C148.488 45.0213 147.762 46.3227 146.909 47.688C146.056 49.0107 145.074 50.1413 143.965 51.08C142.856 52.0187 141.618 52.488 140.253 52.488C139.314 52.488 138.504 52.3387 137.821 52.04C137.138 51.6987 136.584 51.2933 136.157 50.824C135.261 51.5067 134.365 52.04 133.469 52.424C132.573 52.808 131.677 53 130.781 53ZM131.741 51.592C132.893 51.592 134.13 51.0373 135.453 49.928C135.112 49.416 134.856 48.8827 134.685 48.328C134.514 47.7733 134.429 47.2613 134.429 46.792C134.429 46.024 134.6 45.3627 134.941 44.808C135.325 44.2533 135.901 43.976 136.669 43.976C137.224 43.976 137.672 44.1893 138.013 44.616C138.397 45 138.589 45.448 138.589 45.96C138.589 46.088 138.568 46.216 138.525 46.344C138.525 46.4293 138.504 46.536 138.461 46.664C139.186 45.6827 139.869 44.5307 140.509 43.208C141.917 40.1787 142.621 37.6827 142.621 35.72C142.621 34.7387 142.429 33.9707 142.045 33.416C141.661 32.8613 141.085 32.584 140.317 32.584C139.421 32.584 138.44 32.968 137.373 33.736C136.349 34.504 135.346 35.528 134.365 36.808C133.426 38.088 132.594 39.5173 131.869 41.096C131.186 42.5467 130.632 43.9547 130.205 45.32C129.821 46.6427 129.629 47.7947 129.629 48.776C129.629 49.6293 129.8 50.312 130.141 50.824C130.482 51.336 131.016 51.592 131.741 51.592ZM152.219 53C150.597 53 149.402 52.4667 148.635 51.4C147.867 50.2907 147.483 48.9467 147.483 47.368C147.483 45.448 147.931 43.4427 148.827 41.352C149.68 39.3893 150.768 37.5973 152.091 35.976C153.413 34.3547 154.843 33.0533 156.379 32.072C157.915 31.048 159.408 30.536 160.859 30.536C162.48 30.536 163.675 31.0693 164.443 32.136C165.211 33.2027 165.595 34.5467 165.595 36.168C165.595 38.1307 165.147 40.136 164.251 42.184C163.739 43.336 163.013 44.616 162.075 46.024C161.136 47.3893 160.069 48.648 158.875 49.8C159.131 50.2693 159.493 50.6747 159.963 51.016C160.432 51.3147 161.072 51.464 161.883 51.464C162.907 51.464 163.867 51.0373 164.763 50.184C165.701 49.3307 166.555 48.3067 167.323 47.112C168.091 45.8747 168.773 44.6373 169.371 43.4C169.968 42.1627 170.459 41.16 170.843 40.392C170.971 40.136 171.184 40.008 171.483 40.008C171.653 40.008 171.781 40.0933 171.867 40.264C171.952 40.392 171.931 40.6053 171.803 40.904C171.547 41.544 171.12 42.504 170.523 43.784C169.925 45.0213 169.2 46.3227 168.347 47.688C167.493 49.0107 166.512 50.1413 165.403 51.08C164.293 52.0187 163.056 52.488 161.691 52.488C160.752 52.488 159.941 52.3387 159.259 52.04C158.576 51.6987 158.021 51.2933 157.595 50.824C156.699 51.5067 155.803 52.04 154.907 52.424C154.011 52.808 153.115 53 152.219 53ZM153.179 51.592C154.331 51.592 155.568 51.0373 156.891 49.928C156.549 49.416 156.293 48.8827 156.123 48.328C155.952 47.7733 155.867 47.2613 155.867 46.792C155.867 46.024 156.037 45.3627 156.379 44.808C156.763 44.2533 157.339 43.976 158.107 43.976C158.661 43.976 159.109 44.1893 159.451 44.616C159.835 45 160.027 45.448 160.027 45.96C160.027 46.088 160.005 46.216 159.963 46.344C159.963 46.4293 159.941 46.536 159.899 46.664C160.624 45.6827 161.307 44.5307 161.947 43.208C163.355 40.1787 164.059 37.6827 164.059 35.72C164.059 34.7387 163.867 33.9707 163.483 33.416C163.099 32.8613 162.523 32.584 161.755 32.584C160.859 32.584 159.877 32.968 158.811 33.736C157.787 34.504 156.784 35.528 155.803 36.808C154.864 38.088 154.032 39.5173 153.307 41.096C152.624 42.5467 152.069 43.9547 151.643 45.32C151.259 46.6427 151.067 47.7947 151.067 48.776C151.067 49.6293 151.237 50.312 151.579 50.824C151.92 51.336 152.453 51.592 153.179 51.592ZM160.856 70.472C160.344 70.472 159.832 70.3867 159.32 70.216C158.765 70.088 158.211 70.0667 157.656 70.152C157.912 69.896 158.403 69.1493 159.128 67.912C159.853 66.7173 160.707 65.224 161.688 63.432C162.627 61.64 163.629 59.6987 164.696 57.608C165.763 55.5173 166.765 53.4693 167.704 51.464C168.643 49.416 169.432 47.56 170.072 45.896C170.755 44.1893 171.181 42.8453 171.352 41.864C170.968 42.4187 170.584 42.7387 170.2 42.824C169.859 42.8667 169.773 42.7387 169.944 42.44C170.029 42.2693 170.2 41.864 170.456 41.224C170.755 40.5413 171.011 39.9653 171.224 39.496C171.565 38.6427 171.843 37.704 172.056 36.68C172.312 35.656 172.44 34.6747 172.44 33.736C172.44 33.1387 172.376 32.6267 172.248 32.2C172.12 31.7733 171.885 31.5387 171.544 31.496C171.544 31.496 171.779 31.4533 172.248 31.368C172.717 31.2827 173.208 31.1973 173.72 31.112C174.232 31.0267 174.573 30.984 174.744 30.984C175 30.9413 175.235 30.92 175.448 30.92C175.661 30.8773 175.853 30.856 176.024 30.856C176.408 30.856 176.664 31.0053 176.792 31.304C176.963 31.56 177.048 32.1147 177.048 32.968C177.048 34.0347 176.856 35.4 176.472 37.064C176.131 38.6853 175.725 40.1147 175.256 41.352C175.725 40.584 176.323 39.6027 177.048 38.408C177.816 37.2133 178.691 35.9973 179.672 34.76C180.653 33.5227 181.677 32.4987 182.744 31.688C183.811 30.8347 184.856 30.408 185.88 30.408C186.093 30.408 186.371 30.4507 186.712 30.536C187.907 30.8347 188.739 31.432 189.208 32.328C189.72 33.1813 189.976 34.2053 189.976 35.4C189.976 36.68 189.72 38.088 189.208 39.624C188.739 41.16 188.099 42.6747 187.288 44.168C186.477 45.6187 185.581 46.9413 184.6 48.136C183.405 49.6293 181.976 50.824 180.312 51.72C178.648 52.616 176.941 53.064 175.192 53.064C173.613 53.064 172.141 52.6587 170.776 51.848L164.696 67.144C164.099 68.424 163.523 69.2987 162.968 69.768C162.413 70.2373 161.709 70.472 160.856 70.472ZM173.144 51.72C174.339 51.72 175.683 51.1653 177.176 50.056C178.669 48.9467 180.099 47.5387 181.464 45.832C182.872 44.0827 184.045 42.3333 184.984 40.584C185.624 39.3893 186.093 38.3013 186.392 37.32C186.691 36.296 186.84 35.4213 186.84 34.696C186.84 33.032 186.243 32.2 185.048 32.2C184.493 32.2 183.768 32.4987 182.872 33.096C182.019 33.6933 181.016 34.7813 179.864 36.36C178.627 38.0667 177.261 40.2213 175.768 42.824C174.317 45.384 172.824 48.0933 171.288 50.952C171.8 51.464 172.419 51.72 173.144 51.72Z" />
          </svg>
        </Box>
      </Box> */}
      <Grid container sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100vw', overflowX: 'hidden', backdropFilter: "blur(5px)" }}>
        <Grid item id="hero" sx={{
          marginTop: '10vh', height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'
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
            padding: '20px',

          }}>
            <Typography variant='h4' sx={{ margin: 'auto' }}>
              A Software Development Engineer who loves to learn new technologies
            </Typography>
            <br />
            <Typography variant='h6' color='gray' sx={{
              margin: 'auto', display: "flex",
              alignContent: "center",
              flexDirection: "row"
            }}>
              <Devices sx={{ marginRight: '10px' }} />  Exploring opportunities and new technologies.
            </Typography>
            <br />
            <Typography variant='h6' color='gray' sx={{
              margin: 'auto', display: "flex",
              alignContent: "center",
              flexDirection: "row"
            }}>
              <Work sx={{ marginRight: '10px' }} /> Currently working at Comcast
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
          <Box sx={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: "-1" }}>
            <div className={`${style["luminaire"]} ${style["on"]}`}></div>
          </Box>

          <Grid sx={{ marginTop: '4rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', flexDirection: 'row', backdropFilter: "blur(15px)" }}>
            <Contact />
          </Grid>
        </Grid>


        <Footer />


      </Grid >
    </>
  )
}
