import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button'

const Project = ({ image }) => {
  return (
    <SProject>
      <img src={image} />

      <p>This is a portfolio item title</p>

      <div className="btns">
        <Button text="Github" variant="secondary" />

        <Button text="Live Demo" variant="primary" />
      </div>
    </SProject>
  )
}

export default Project

const SProject = styled.div`
  background-color: #333377;
  padding: 1rem;
  padding-bottom: 2rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    border-radius: 2rem;
  }

  p {
    color: white;
    font-size: 1.2rem;
  }

  .btns {
    display: flex;
    gap: 1rem;
  }
`

Project.propTypes = {
  image: PropTypes.elementType,
}
