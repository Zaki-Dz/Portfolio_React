import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Testimonial = ({ image }) => {
  return (
    <STestimonial>
      <img src={image} />

      <p className="name">Bnadem</p>

      <p className="text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque maiores,
        accusamus nobis qui culpa facilis voluptatem eos nam odit aliquid
        temporibus nec.
      </p>
    </STestimonial>
  )
}

export default Testimonial

const STestimonial = styled.div`
  background-color: #333377;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
  padding: 2rem;
  min-width: 100%;

  img {
    border-radius: 50%;
    width: 60px;
    border: 5px solid #4cb4f6;
  }

  .name {
    color: white;
    font-weight: bold;
  }

  .text {
    font-size: 0.9rem;
  }
`

Testimonial.propTypes = {
  image: PropTypes.elementType,
}
