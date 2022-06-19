import React from 'react'
import styled from 'styled-components'
import Experiences from '../components/Experiences'

const Skills = () => {
	const FrontEndData = [
		{ title: 'HTML', experience: 'Experienced' },
		{ title: 'CSS', experience: 'Experienced' },
		{ title: 'JavaScript', experience: 'Experienced' },
		{ title: 'Bootstrap', experience: 'Experienced' },
		{ title: 'React', experience: 'Experienced' },
		{ title: 'jQuery', experience: 'Experienced' },
	]

	const BackEndData = [
		{ title: 'PHP', experience: 'Experienced' },
		{ title: 'SQL', experience: 'Experienced' },
		{ title: 'MySQL', experience: 'Experienced' },
	]

	return (
		<SSkills id="skills">
			<div className="container">
				<div className="text">
					<p>What SKills I Have</p>

					<h2>My Experience</h2>
				</div>

				<div className="content">
					<Experiences title="Frontend Development" data={FrontEndData} />

					<Experiences title="Backend Development" data={BackEndData} />
				</div>
			</div>
		</SSkills>
	)
}

export default Skills

const SSkills = styled.section`
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
			display: flex;
			gap: 2rem;

			@media (max-width: 768px) {
				flex-direction: column;
			}
		}
	}
`
