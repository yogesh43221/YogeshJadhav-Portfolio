import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Robotics' ?
            <ToggleButton active value="Robotics" onClick={() => setToggle('Robotics')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="Robotics" onClick={() => setToggle('Robotics')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Data Science' ?
            <ToggleButton active value="Data Science" onClick={() => setToggle('Data Science')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="Data Science" onClick={() => setToggle('Data Science')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Machine learning' ?
            <ToggleButton active value="Machine learning" onClick={() => setToggle('Machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="Machine learning" onClick={() => setToggle('Machine learning')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects