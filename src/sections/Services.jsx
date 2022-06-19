import React from 'react'
import styled from 'styled-components'
import Service from '../components/Service'

const Services = () => {
  return (
    <SServices id="services">
      <div className="container">
        <div className="text">
          <p>What I Offer</p>

          <h2>Services</h2>
        </div>

        <div className="content">
          <div className="services">
            <Service />

            <Service />

            <Service />
          </div>
        </div>
      </div>
    </SServices>
  )
}

export default Services

const SServices = styled.section`
  min-height: 100vh;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 3rem;
    gap: 5rem;

    .text {
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      h2 {
        color: #4cb4f6;
      }
    }

    .content {
      .services {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
      }
    }
  }
`
