import React from 'react'
import styled from 'styled-components'
import Project from '../components/Project'
import projectOne from '../assets/portfolio1.jpg'
import projectTwo from '../assets/portfolio3.jpg'
import projectThree from '../assets/portfolio3.jpg'
import projectFour from '../assets/portfolio4.jpg'
import projectFive from '../assets/portfolio5.png'
import projectSix from '../assets/portfolio6.jpg'

const Projects = () => {
	return (
		<SProjects>
			<div className="container">
				<div className="text">
					<p>My Recent Work</p>

					<h2>Portfolio</h2>
				</div>

				<div className="content">
					<Project image={projectOne} />

					<Project image={projectTwo} />

					<Project image={projectThree} />

					<Project image={projectFour} />

					<Project image={projectFive} />

					<Project image={projectSix} />
				</div>
			</div>
		</SProjects>
	)
}

export default Projects

const SProjects = styled.section`
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
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			gap: 2rem;
			padding-bottom: 1rem;
		}
	}
`
