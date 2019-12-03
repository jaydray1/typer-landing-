import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 10em;
  border: 8px solid white;
  background-color:  #424242;
  font-color: white;
  padding: 2em;
`
const Projects = () => {
  return (
    <>
    <ProjectCard>
      <h2 style={{marginTop: '-0.5em'}}>Educational Software managing libraries</h2>
      <span>Technologies Used:</span>
      <div>
        <FontAwesomeIcon icon={['fab', 'angular']} size="4x"/>
        <FontAwesomeIcon icon={['fab', 'js-square']} size="4x"/>
      </div>
    </ProjectCard>
    </>
  )
}

export default Projects;