import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Form = () => {
  return (
    <SForm>
      <input type="text" placeholder="Your Full Name" />

      <input type="email" placeholder="Your Email" />

      <textarea placeholder="Your Message" />

      <Button text="Send Message" variant="primary" />
    </SForm>
  )
}

export default Form

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    background-color: transparent;
    border: 2px solid #4cb4f6;
    border-radius: 0.5rem;
    padding: 1.5rem;
  }

  textarea {
    min-height: 200px;
  }

  button {
    align-self: start;
  }
`
