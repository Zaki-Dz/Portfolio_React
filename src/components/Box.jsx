import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Box = ({ Icon, title, desc, url }) => {
  return (
    <SBox>
      <Icon className="icon" size={30} />

      <p>{title}</p>

      <span>{desc}</span>

      {url && (
        <span className="link">
          <a href={url}>Contact Me</a>
        </span>
      )}
    </SBox>
  )
}

export default Box

const SBox = styled.div`
  background-color: #2a2a67;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  .icon {
    color: #4cb4f6;
  }

  p {
    font-weight: bold;
  }

  span {
    font-size: 0.8rem;
  }

  .link {
    color: #4cb4f6;
  }
`

Box.propTypes = {
  Icon: PropTypes.elementType,
  title: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string,
}
