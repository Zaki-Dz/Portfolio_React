import React from 'react'
import styled from 'styled-components'
import { TiTick } from 'react-icons/ti'

const Service = () => {
  return (
    <SService>
      <div className="heading">Web Development</div>

      <ul>
        <li>
          <div className="icon">
            <TiTick />
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
        </li>

        <li>
          <div className="icon">
            <TiTick />
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
        </li>

        <li>
          <div className="icon">
            <TiTick />
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
        </li>

        <li>
          <div className="icon">
            <TiTick />
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
        </li>

        <li>
          <div className="icon">
            <TiTick />
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
        </li>
      </ul>
    </SService>
  )
}

export default Service

const SService = styled.div`
  background-color: #333377;
  border: 1px solid #4cb4f6;
  border-radius: 0 0 2rem 2rem;
  text-align: center;

  .heading {
    background-color: #4cb4f6;
    padding-block: 2rem;
    border-radius: 0 0 2rem 2rem;
  }

  ul {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      display: flex;
      gap: 1rem;

      .icon {
        color: #4cb4f6;
      }

      p {
        color: white;
        font-size: 0.9rem;
        text-align: justify;
      }
    }
  }
`
